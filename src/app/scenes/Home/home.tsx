import Header from 'app/containers/header/header'
import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'

interface HomeSceneState extends RouteComponentProps<void> {

}

interface HomeSceneProps {

}

class HomeScene extends Component<HomeSceneState, HomeSceneProps> {
  render() {

    return (
      <Header/>
    )
  }
}

export default HomeScene