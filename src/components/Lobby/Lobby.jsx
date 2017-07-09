import React, { PureComponent } from 'react'
import { gql, graphql } from 'react-apollo'

class Lobby extends PureComponent {
  render() {
    const { loading, allLeanCoffees } = this.props.data

    return (
      <div>
        {
          loading ? 'Loading'
            : allLeanCoffees.map(leanCoffee => (
              <div key={leanCoffee.id}>
                <div>{leanCoffee.state}</div>
                <div>{leanCoffee.host.name}</div>
                <div>{leanCoffee._topicsMeta.count}</div>
              </div>
            ))
        }
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

export default graphql(ListLeanCoffees)(Lobby)
