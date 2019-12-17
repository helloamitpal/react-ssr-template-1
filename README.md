# React-SSR-Boilerplate

This is a React based Server side rendering boilerplate.

[Demo](https://react-ssr-template-app.herokuapp.com)

## Primary Tech stack

- **React**: The primary UI library
- **Redux**: Redux data flow
- **React-redux**: Integrating React with Redux data flow
- **Redux-thunk**: Redux middleware to support asynchronous operations
- **Redux-pack**: Redux library to extend various stages (start, success, error, finish, always) of API calling
- **Express**: NodeJS library to create server to serve the client UI
- **Webpack**: Module bundler
- **SCSS**: CSS pre-processor
- **Axios**: Javascript library to make rest API call
- **React-helmet**: React library to change header metadata and title

## Features of this template

- Complete UI architecture
- Centralised API interceptor
- Progressive web app (PWA)
- Server side rendering (SSR)
- Offline support with service worker
- Code splitting
- React hooks
- React lazy to load the modules dynamically
- Hot reloading for local development
- React memo to stop redundant rendition
- Error boundary to catch unexpected UI errors
- Modular and functional programming paradigm used
- Common and extensible config

## How to run this template

First clone project and install dependencies

```sh
$ mkdir ProjectName && cd ProjectName
$ git clone https://github.com/amit040386/react-ssr-template
$ cd react-ssr-template
$ npm install
```

Navigate to [News API](https://newsapi.org/) and grab your API key.

Find config/default.js in root folder and update API Key.

```javascript
{
  API_KEY: 'enter-your-api-key';
}
```

To run on local

```sh
$ npm run dev
```

Navigate to [http://localhost:3000](http://localhost:4566)

To change the port, find config/default.js in root folder and update the port number.

```javascript
{
  DEFAULT_DEV_PORT: 'enter-your-port-number';
}
```

## Deployment

Deployment build

```sh
$ npm run build:prod
```

You can deploy this project to:

- [Heroku](https://www.heroku.com/)
