# Nexmo Stitch Demo

An API server and client app to demo how to use Nexmo Stitch applications. For more info visit our [developer site.](https://developer.nexmo.com/stitch/overview)

<!-- Remix Button -->
<a href="https://glitch.com/edit/#!/remix/nexmo-stitch">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="remix button" aria-label="remix" height="33">
</a>

## Prerequisites

### Install the Nexmo CLI

* Ensure you have [Node.JS](https://nodejs.org/) installed
* Create a free Nexmo account - [signup](https://dashboard.nexmo.com)
* Install the Nexmo CLI:

```bash
$ npm install -g nexmo-cli@beta
```

Setup the CLI to use your Nexmo API Key and API Secret. You can get these from the [setting page](https://dashboard.nexmo.com/settings) in the Nexmo Dashboard.

```bash
$ nexmo setup api_key api_secret
```

### Create an Application

Create an application named `My Conversation Application` and store the returned private key as `private.key` within your current working directory.

```sh
$ nexmo app:create "My Stitch Application" http://example.com http://example.com --type=rtc --keyfile=private.key
```

## Running the demo

1. Clone or download this repo
1. Create a .env file using the env.example template
1. Input your API Key, API Secret, and application ID
1. Ensure the `private.key` file from the "Create an Application" is in your current working directory (See `private.key.example`)
1. Install the node modules `$ npm install`
1. Start the app: `$ npm start`
1. The app should be running on `localhost:3000`

## Start chatting!

1. Create a user or two
```sh
curl --request POST \
  --url http://localhost:3000/api/users \
  --header 'content-type: application/json' \
  --data '{
	"username": "user2",
	"admin": true
}'
```

2. Create a conversation via the demo API
```sh
curl --request POST \
  --url http://localhost:3000/api/conversations \
  --header 'content-type: application/json' \
  --data '{"displayName": "My Chat"}'
```

3. Join the user to the conversation. Remember to replace the `conversationId` and `userId` with IDs from the two previous steps.
```sh
curl --request PUT \
  --url http://localhost:3000/api/conversations \
  --header 'content-type: application/json' \
  --data '{
	"conversationId": "CON-7cda3a42-8f7f-44c6-a4ba-aa23be506397",
	"userId": "USR-ca160eee-836a-4ec7-8ac4-317aefe8d5d3",
	"action": "join"
}'
```

4. Verify the app is running by visiting `localhost:3000/` and login with the username you created in step 1.

## What's Next

Use the [Android Messaging Demo app](https://github.com/Nexmo/messaging-demo-android) to try out Nexmo Stitch across web and Android platforms.
