/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'
import Debug from 'debug'

import Actions from './../Actions'
import Store from './../Store'

import ProjectActionSubActions from './subs/ProjectActionSubActions'
import ProjectActionSubVariables from './subs/ProjectActionSubVariables'
import ProjectActionSubSettings from './subs/ProjectActionSubSettings'

import FontAwesome from 'react-fontawesome'

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
          <a onClick={this.handlerProjectUpdate} className="button green right flexitem"><span>Sauver</span></a>
        </div>
        <br />
        <ul className="tabs">
          <li onClick={this.handlerSelectActions} className={(this.state.tab === 'actions') ? '_selected' : ''}><FontAwesome style={{margin: 'auto'}} className="text dark-blue" size="2x" name="cog" /><a onClick={this.handlerSelectActions}>Actions</a></li>
          <li onClick={this.handlerSelectVariables} className={(this.state.tab === 'variables') ? '_selected' : ''}><FontAwesome style={{margin: 'auto'}} className="text purple" size="2x" name="columns" /><a onClick={this.handlerSelectVariables}>Variables</a></li>
          <li onClick={this.handlerSelectSettings} className={(this.state.tab === 'settings') ? '_selected' : ''}><FontAwesome style={{margin: 'auto'}} className="text orange" size="2x" name="sliders" /><a onClick={this.handlerSelectSettings}>Paramètres</a></li>
        </ul>
        <br />
        {this.state.tab === 'actions' &&
          <ProjectActionSubActions defaultTab="list" />
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
