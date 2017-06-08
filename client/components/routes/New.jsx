import React, { Component } from "react";
import classNames from 'classnames';

import {
  Button,
  IconButton,
  Card,
  CardActions,
  CardMenu,
  CardText,
  CardTitle,
  Content,
  Header,
  Layout,
  Navigation,
} from "react-mdl";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import { gql, graphql } from 'react-apollo';

const CurrentUserForLayout = gql`
  query CurrentUserForLayout {
    currentUser {
      login
      avatar_url
    }
  }
`;

class App extends Component
{
  render ( )
  {
    return (
      <div class="app">
        <div class="container">
          <Card shadow={2} style={{width: '100%'}}>
            <CardTitle border>
              Welcome
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
