import ApolloClient from 'apollo-boost'
import { App } from 'app'
import { typeDefs } from 'app/constants/schema'
import configureStore from 'app/redux/configureStore'
import { createBrowserHistory } from 'history'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  typeDefs
})

const history = createBrowserHistory()
const { store } = configureStore();

// render react DOM
ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
)
