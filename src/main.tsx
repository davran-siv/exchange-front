import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'
import { App } from 'app'
import { typeDefs } from 'app/constants/schema'
import { TodoModel } from 'app/models'
import { createStores } from 'app/stores'
import { createBrowserHistory } from 'history'
import { Provider } from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  typeDefs
})

// prepare MobX stores
const history = createBrowserHistory()
const rootStore = createStores(history)


// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
)
