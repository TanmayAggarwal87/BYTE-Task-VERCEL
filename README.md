# Access Control System for B.Y.T.E.

Welcome to the Access Control System for B.Y.T.E.! This project implements a secure system that restricts access to a webpage based on user subscriptions to the B.Y.T.E. YouTube channel and follows on GitHub. Only users who are subscribed to the YouTube channel or following the GitHub account can access the restricted page.

## Project Overview

The goal of this project was to enhance my backend development skills by implementing OAuth 2.0 for user authentication and authorization. By leveraging Express, Node.js, Passport.js, and EJS, I built a user-friendly interface that ensures only authorized users can access specific content.


Here are some Images:
### Home Page

![image](https://github.com/user-attachments/assets/6b8d2971-a7e3-4b10-95e9-504b763178b1)

### for failed Authentication (Not following target channel on Youtube or following them on Github)

![image](https://github.com/user-attachments/assets/26d7c3b0-c9b5-4c5d-97a8-3f91dba03944)

### for Successfull Authentication (following target channel on Youtube or following them on Github)

![image](https://github.com/user-attachments/assets/0c064262-fa08-45f2-a031-a2605dd337e1)





### Key Features

- **OAuth 2.0 Authentication**: Securely authenticate users via YouTube and GitHub.
- **Subscription Validation**: Check if the user is subscribed to the B.Y.T.E. YouTube channel.
- **Follow Validation**: Verify if the user follows the B.Y.T.E. GitHub account.
- **Express.js Framework**: Built on Express.js for streamlined server-side handling.
- **Session Management**: Utilize `express-session` for maintaining user sessions.
- **Dynamic Web Pages**: Render dynamic pages using EJS templating.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building the application.
- **Passport.js**: Middleware for authenticating requests.
- **EJS**: Templating engine for rendering dynamic HTML pages.
- **express-session**: Middleware for managing user sessions.
- **OAuth 2.0**: For secure authentication with YouTube and GitHub APIs.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- A GitHub account
- A YouTube account

### Installation

1. Clone the repository:

   ```bash
   gh repo clone TanmayAggarwal87/BYTE-task-VERCEL
   cd BYTE-task-vercel
   
2.Install the necessary dependencies:
    ````terminal
    
    npm install
    
3.Set up your environment variables for OAuth (create a .env file):
```.env
    YT_clientID=your_youtube_client_id
    YT_clientSecret=your_youtube_client_secret
    YT_callbackURL= your callback url for youtube
    GIT_clientId=your_github_client_id
    GIT_clientSecret=your_github_client_secret
    GIT_callbackURL= your callback url for github
    
4. Start the server:
       ```terminal

       npm start

5. Navigate to http://localhost:3000 in your web browser
   
## Deployment
- The project has been deployed on Vercel. You can access it https://tanmay-byte-task.vercel.app/

