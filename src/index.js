// import { Auth0Provider } from "@auth0/auth0-react";
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// ReactDOM.render(

//   <Auth0Provider
//     domain={process.env.REACT_APP_AUTH_DOMAIN}
//     clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
//     authorizationParams={{
//       redirect_uri: process.env.REACT_APP_AUTH_REDIRECT_URI
//     }}
//   >
//     <App />
//     </Auth0Provider>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: process.env.REACT_APP_AUTH_REDIRECT_URI
    }}
  >
    <App />
    </Auth0Provider>,
  </React.StrictMode>
);


