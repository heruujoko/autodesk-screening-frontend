# Autodesk Identity Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

live demo on [https://autodesk-demo.web.app/](https://autodesk-demo.web.app/)

## Available Scripts

In the project directory, you can run:

- `npm run start` to start the project
- `npm run build:css` to build the styles
- `npm run test` run unit test
- `npm run build` to build the project for production use

# Configuration
in the project there are 2 files for configurations called 
- `.env` for local development configuration
- `.env.prod` for production configuration

```
REACT_APP_API_BASE_URL=https://autodesk-service.devtabspace.xyz
REACT_APP_ENV=local
```
values can be added as needed and accessible from `process.env` within the project.

## Deployment

Deployment set using Firebase Hosting with Github Actions following their guide on [https://firebase.google.com/docs/hosting/github-integration](https://firebase.google.com/docs/hosting/github-integration)
Choosing firebase hosting is based on simplicity with GHithub Action that supported out of the box and applied most of the best practices like brotli compression without any additional cost or configurations.

## Monitoring
This app is integrated with [https://logrocket.com/](https://logrocket.com/) to provide monitoring and error playback happened in user browser
![image](https://user-images.githubusercontent.com/2826137/97172962-c9b75500-17ca-11eb-9f18-840e3b984016.png)
