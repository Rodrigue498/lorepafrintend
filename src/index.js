import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "GOOGLE_CLIENT_ID"; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={clientId}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>
);


