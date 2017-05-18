/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'

import Store from './../Store'

class AdminProjectActions extends Reflux.Component {
  constructor (props) {
    super(props)
    this.store = Store
  }
  render () {
    if (this.props.loading) {
      return (
        <div />
      )
    }
    return (
      <div className="box">
        <div className="container-title">Welcome to the workspace projects</div>
      </div>
    )
  }
}

export default AdminProjectActions
