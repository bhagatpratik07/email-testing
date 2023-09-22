# Email Testing

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Running the App](#running-the-app)
  - [Server](#server)
  - [Client](#client)
- [Routes](#routes)
  - [User Registration](#user-registration)
  - [View Inbox](#view-inbox)
  - [Send Email](#send-email)

## Getting Started

### Installation

Provide installation instructions for your server and client separately. For example:

#### Server

1. Navigate to the `server` folder.

2. Install dependencies:

   ```bash
   cd server
   npm install
   ```

3. Run the server:

   ```bash
   node index.js
   // server will start on localhost:3000
   ```

#### Client

Open the index.html file from the client folder in a web browser

#### Routes

#### User Registration

    Route: /register
    Method: POST

Description: This route allows users to register with a username and password.
Usage: Submit a POST request to http://localhost:3000/register with JSON data containing a username and password.

#### View Inbox

    Route: /inbox/:username
    Method: GET

Description: This route retrieves the inbox of a user with the specified username.
Usage: Submit a GET request to http://localhost:3000/inbox/:username to view the inbox for a specific user.

#### Send Email

    Route: /inbox/:username/send
    Method: POST

Description: This route allows users to send an email to another user's inbox.
Usage: Submit a POST request to http://localhost:3000/inbox/:username/send with JSON data containing the recipient's username, email subject, and email message.
