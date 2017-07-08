import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    const { loading, allPosts } = this.props.data

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-content">
          {
            loading ? 'Loading'
            : allPosts.map(post => (
              <div className="Post" key={post.id}>
                <img
                  src={post.imageUrl}
                  alt={post.description}
                  style={{
                    width: '600px',
                    maxHeight: '400px',
                    objectFit: 'cover',
                  }}
                />
                <div>{post.description}</div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

const ListQuery = gql`
  query allPosts {
    allPosts(orderBy: createdAt_DESC) {
      id
      description
      imageUrl
    }
  }
`

export default graphql(ListQuery)(App)
