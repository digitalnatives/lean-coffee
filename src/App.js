import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    const { loading, allLeanCoffees } = this.props.data

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-content">
          {
            loading ? 'Loading'
            : allLeanCoffees.map(leanCoffee => (
              <div className="LeanCoffee" key={leanCoffee.id}>
                <div>{leanCoffee.state}</div>
                <div>{leanCoffee.host.name}</div>
                <div>{leanCoffee._topicsMeta.count}</div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

const ListLeanCoffees = gql`
  query {
    allLeanCoffees {
      id
      state
      host {
        name
      }
      _topicsMeta {
        count
      }
    }
  }
`

export default graphql(ListLeanCoffees)(App)
