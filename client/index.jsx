/*global require*/

require( "./index.scss" );

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App.jsx";

import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

ReactDOM.render( <App />, document.getElementById( "react-root" ) );

