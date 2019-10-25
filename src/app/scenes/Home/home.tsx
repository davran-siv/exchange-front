import ListingCard from 'app/components/listingCard/listingCard'
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
      <div className='home'>
        <Header/>
        <ListingCard/>
      </div>
    )
  }
}

export default HomeScene