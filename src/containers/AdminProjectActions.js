/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'
import Debug from 'debug'

import Actions from './../Actions'
import Store from './../Store'

import ProjectActionSubActions from './subs/ProjectActionSubActions'
import ProjectActionSubVariables from './subs/ProjectActionSubVariables'
import ProjectActionSubSettings from './subs/ProjectActionSubSettings'

const debug = Debug('docktor:containers')

class AdminProjectActions extends Reflux.Component {
  constructor (props) {
    super(props)
    this.containerName = 'AdminProjectActions' // for debug only
    debug('constructor %s %o', this.containerName, this.props.project)
    this.state = {
      tab: 'actions'
    }
    this.store = Store
    this.handlerChangeName = (e) => {
      this.state.currentProject.name = e.target.value
      this.setState({currentProject: this.state.currentProject})
    }
    this.handlerProjectUpdate = (e) => {
      Actions.projectUpdate(this.props.project, this.state.currentProject)
    }
    this.handlerSelectActions = () => {
      this.setState({tab: 'actions'})
    }
    this.handlerSelectVariables = () => {
      this.setState({tab: 'variables'})
    }
    this.handlerSelectSettings = () => {
      this.setState({tab: 'settings'})
    }
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
        <div className="flex">
          <input type="text" className="no-border" defaultValue={this.state.currentProject.name} onChange={this.handlerChangeName} />
          <a onClick={this.handlerProjectUpdate} className="button green right flexitem">Save</a>
        </div>
        <br />
        <ul className="tabs">
          <li><a className={(this.state.tab === 'actions') ? '_actions _selected' : '_actions'} onClick={this.handlerSelectActions}>Actions</a></li>
          <li><a className={(this.state.tab === 'variables') ? '_variables _selected' : '_variables'} onClick={this.handlerSelectVariables}>Variables</a></li>
          <li><a className={(this.state.tab === 'settings') ? '_settings _selected' : '_settings'} onClick={this.handlerSelectSettings}>Settings</a></li>
        </ul>
        <br />
        {this.state.tab === 'actions' &&
          <ProjectActionSubActions />
        }
        {this.state.tab === 'variables' &&
          <ProjectActionSubVariables />
        }
        {this.state.tab === 'settings' &&
          <ProjectActionSubSettings />
        }
      </div>
    )
  }
}

export default AdminProjectActions
