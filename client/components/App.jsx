import React, { Component } from "react";

import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider
} from "react-apollo";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import {
  New,
  Join,
  Steps
} from "./routes";

// import {
//   SubscriptionClient,
//   addGraphQLSubscriptions
// } from 'subscriptions-transport-ws';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj3okomy5fb9l0198ja30bnhu'
});

// const wsClient = new SubscriptionClient(
//   "https://api.graph.cool/simple/v1/cj3okomy5fb9l0198ja30bnhu",
//   { reconnect: true }
// );

// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
//   networkInterface,
//   wsClient
// );

const client = new ApolloClient({
  networkInterface: networkInterface
});

class App extends Component
{
  render ( )
  {
    return (
      <ApolloProvider client={ client }>
        <Router>
          <Switch>
            <Route
              path="/"
              component={ New }
            />
            <Route
              path="/:leanCoffeeId"
              component={ Join }
            />
            <Route
              path="/:leanCoffeeId/:userId"
              component={ Steps }
            />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
