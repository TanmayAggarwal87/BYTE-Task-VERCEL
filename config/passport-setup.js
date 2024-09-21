require("dotenv").config()
const express = require("express")
const session = require("express-session")
const passport = require("passport")
const app = express()
const GoogleStrategy = require("passport-google-oauth20").Strategy
const GitHubStrategy = require("passport-github2").Strategy




//Google Authorization
passport.use(new GoogleStrategy({
    callbackURL:process.env.YT_callbackURL,
    clientID:process.env.YT_clientID,
    clientSecret:process.env.YT_clientSecret,
    targetChannelId:process.env.YT_targetChannelId,
    scope: ['profile', 'https://www.googleapis.com/auth/youtube.readonly']
    
},(accessToken, refreshToken, profile, done) =>{
    return done(null, { profile, accessToken });
  }));
  
    passport.serializeUser((user,done)=>{
    done(null,user)
})

    passport.deserializeUser((obj,done)=>{
    done(null,obj)
})
//GitHub Authorization
passport.use(new GitHubStrategy({
    clientID: process.env.GIT_clientID,
    clientSecret: process.env.GIT_clientSecret,
    callbackURL:process.env.GIT_callbackURL
}, function(accessToken, refreshToken, profile, done) {
    return done(null, { profile, accessToken });
}));

    passport.serializeUser(function(user, done) {
    done(null, user);
});

    passport.deserializeUser(function(obj, done) {
    done(null, obj);
});
