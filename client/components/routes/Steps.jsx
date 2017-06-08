import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

import { Spinner } from "react-mdl";

import {
  Collection,
  Discussion,
  Voting
} from "./steps";

import { UsersList } from "../layout"

class App extends Component
{
  render ( )
  {
    const { loading, leanCoffee } = this.props.data;
    const { state, users } = leanCoffee;

    return (
      loading ? (
        <Spinner singleColor />
      ) : (
        <div class="row">
          <div class="col-xs-12 col-md-8">
            { state === "TOPIC_COLLECTION" && <Collection leanCoffee={ leanCoffee } /> }
            { state === "TOPIC_VOTING" && <Voting leanCoffee={ leanCoffee } /> }
            { state === "DISCUSSION" && <Discussion leanCoffee={ leanCoffee } /> }
          </div>
          <div class="col-xs-12 col-md-4">
            <UsersList users={ users } />
          </div>
        </div>
      )
    );
  }
}

const CurrentLeanCoffee = gql`
  query CurrentLeanCoffee($leanCoffeId: ID) {
    LeanCoffee(id: $leanCoffeId) {
      state,
      users {
        id,
        name,
        emailHash
      }
    }
  }
`;

const StepsWithData = graphql( CurrentLeanCoffee,
  {
    options: ( props ) => ({
      variables: {
        leanCoffeeId: props.params.leanCoffeeId
      }
    })
  }
)( Steps );

export default StepsWithData;
