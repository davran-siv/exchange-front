import { RootReducer } from 'app/interfaces'
import { userMeRequest } from 'app/redux/user/user.actions'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

interface MeType {
  userMe: () => void
}

const MeComponent = (props: MeType) => {
  useEffect(() => {
    props.userMe()
  }, [])

  return null
}

const mapStateToProps = (state: RootReducer, ownProps) => ({
  ...ownProps
})

const mapDispatchToProps = (dispatch => ({
  userMe: () => dispatch(userMeRequest())
}))

const Me = connect(
  mapStateToProps,
  mapDispatchToProps
)(MeComponent)

export default Me
