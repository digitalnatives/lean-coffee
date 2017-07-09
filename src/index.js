import React from 'react'
import ReactDOM from 'react-dom'
import { createNetworkInterface, ApolloClient, ApolloProvider } from 'react-apollo'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj3okomy5fb9l0198ja30bnhu'
})
const client = new ApolloClient({ networkInterface })

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)
registerServiceWorker()
