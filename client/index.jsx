/*global require*/

require( "./index.scss" );

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App.jsx";

import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://api.example.com/graphql'
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById( "react-root" )
);

