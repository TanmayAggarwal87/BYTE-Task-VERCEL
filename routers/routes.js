require("dotenv").config()
const express = require("express")
const passport = require("passport")
const passportSetup = require("../config/passport-setup")
const router = express.Router()




router.get("/youtube",passport.authenticate("google"))
router.get('/github', passport.authenticate('github', { scope: ['user:follow'] }));
    


function checkIfSubscribedToYouTube(accessToken, callback) {
    fetch('https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
    .then((response)=> {
      return response.json();
    })
    
    .then((data) => {
      var subscriptions = data.items || [];
      var isSubscribed = subscriptions.some(function(sub) {
        return sub.snippet.resourceId.channelId === process.env.YT_targetChannelId;
      });
      callback(null, isSubscribed)
      
    }
    )
    .catch((error) => {
      console.error('Error fetching YouTube subscriptions:', error);
      callback(error, false);
  });
}

function checkIfUserFollowsGitHub(accessToken, username, callback) {
    const url = `https://api.github.com/users/${username}/following/${process.env.GIT_targetGithubAccount}`

    fetch(url, {
        headers: {
        Authorization: 'Bearer ' + accessToken
        }
    })
    .then((response)=> {
        if (response.status === 204) {
          callback(null, true);
        } else {
          callback(null, false);
        }
    })
    .catch(function(error) {
        console.error('Error checking GitHub following status:', error);
        callback(error, false);
    });
  }
  



router.get("/youtube/redirect",passport.authenticate("google",{failureRedirect:"/"}),(req,res)=>{
    
    var accessToken = req.user.accessToken;

    checkIfSubscribedToYouTube(accessToken,(error,isSubscribed)=>{
        if(error){
            res.send("Error Occured While checking subscriptions")
        }
        else if(isSubscribed){
            res.render("successfull")
        }
        else{
            
            res.render("failed-yt")        
          }

    })

})

router.get('/github/redirect', passport.authenticate('github', { failureRedirect: '/' }), function(req, res) {
  var accessToken = req.user.accessToken;
  const username = req.user.profile.username;

  // Call the funstion and give designated callback
  checkIfUserFollowsGitHub(accessToken, username, function(error, isFollowing) {
      if (error) {
      res.send('Error occurred while checking follow status.');
      } else if (isFollowing) {
        res.render("successfull")
      } else {
        res.render("failed-git")
      }
  });
  });





module.exports = router