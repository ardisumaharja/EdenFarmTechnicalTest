import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'
import { Provider, useSelector } from 'react-redux'
import store from './reducers' 
import { Loading } from './components'

const MainApp = () => {
  const selector = useSelector(state => state)
  return (
    <>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
      { selector.Loading == true ? <Loading/> : null }
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  )
}

export default App

