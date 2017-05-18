/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'
import Debug from 'debug'

import Actions from './../Actions'
import Store from './../Store'

const debug = Debug('docktor:containers')

class AdminProjectActions extends Reflux.Component {
  constructor (props) {
    super(props)
    this.containerName = 'AdminProjectActions' // for debug only
    debug('constructor %s %o', this.containerName, this.props.project)
    this.store = Store
    this.handlerChangeName = (name) => Actions.projectUpdate({name})
  }
  componentDidMount () {
    debug('componentDidMount %s', this.containerName, this.props.project)
    if (this.state.currentProject === false) {
      Actions.projectLoad(this.props.project)
    }
  }
  render () {
    debug('render %s', this.containerName)
    if (this.state.currentProject === false) {
      return (
        <div />
      )
    }
    return (
      <div className="box">
        <input className="project-name" value={this.state.currentProject.name} onChange={this.handlerChangeName} />
      </div>
    )
  }
}

export default AdminProjectActions
