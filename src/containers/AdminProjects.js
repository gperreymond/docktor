/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'

import Store from './../Store'
import Actions from './../Actions'

class AdminPages extends Reflux.Component {
  constructor (props) {
    super(props)
    this.store = Store
    this.handlerProjectCreate = () => Actions.projectCreate()
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
        { this.state.projects.length === 0 &&
          <div>
            <div className="container-desc">No project found at the moment!</div>
            <br /><br />
            <div className="text-center"><a onClick={this.handlerProjectCreate} className="button green huge">New project</a></div>
          </div>
        }
      </div>
    )
  }
}

export default AdminPages
