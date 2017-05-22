/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'
import FontAwesome from 'react-fontawesome'
import Debug from 'debug'

import Actions from './../../Actions'
import Store from './../../Store'
import ProjectAction from './../../components/ProjectAction'

const debug = Debug('docktor:containers:subs')

class ProjectActionSubActions extends Reflux.Component {
  constructor (props) {
    super(props)
    this.containerName = 'ProjectActionSubActions' // for debug only
    this.state = {
      tab: this.props.defaultTab,
      selectedTrigger: 1,
      nextIndex: 0
    }
    this.store = Store
    this.handleBack = (e) => {
      this.setState({tab: 'list', nextIndex: 0})
    }
    this.handleCreateAction = (e, index) => {
      this.setState({tab: 'create', nextIndex: index})
    }
    this.handleEditAction = (e, index) => {
      this.setState({tab: 'edit', nextIndex: index})
    }
    this.handleCreateTrigger = (e) => {
      Actions.projectActionTriggerCreate(this.state.currentProject)
    }
    this.handleQuestionChoice = (e) => {
      Actions.projectActionCreate(this.state.currentProject.triggers[this.state.selectedTrigger - 1], 'question-choices', this.state.nextIndex + 1)
      this.setState({tab: 'list', nextIndex: 0})
    }
    this.handleQuestionNumber = (e) => {
      Actions.projectActionCreate(this.state.currentProject.triggers[this.state.selectedTrigger - 1], 'question-number', this.state.nextIndex + 1)
      this.setState({tab: 'list', nextIndex: 0})
    }
    this.handleContentMessage = (e) => {
      Actions.projectActionCreate(this.state.currentProject.triggers[this.state.selectedTrigger - 1], 'content-message', this.state.nextIndex + 1)
      this.setState({tab: 'list', nextIndex: 0})
    }
  }
  render () {
    debug('render %s', this.containerName)
    return (
      <div className="normal">
        {this.state.tab === 'edit' &&
          <div>
            <h3><a className="text dark-blue" onClick={this.handleBack}>Retour</a> > Edition d’une action</h3>
            <div className="normal grey">
              <h4>Identifiant de l’action</h4>
              <input type="text" className="editable" defaultValue={this.state.currentProject.triggers[this.state.selectedTrigger - 1].actions[this.state.nextIndex].id} readOnly="readonly" />
              <h4>Nom de l’action</h4>
              <input type="text" className="editable" defaultValue={this.state.currentProject.triggers[this.state.selectedTrigger - 1].actions[this.state.nextIndex].name} onChange={(e) => { this.state.currentProject.triggers[this.state.selectedTrigger - 1].actions[this.state.nextIndex].name = e.target.value }} />
              <h4>Question de l’action</h4>
              <textarea className="editable" rows="5" defaultValue={this.state.currentProject.triggers[this.state.selectedTrigger - 1].actions[this.state.nextIndex].description} onChange={(e) => { this.state.currentProject.triggers[this.state.selectedTrigger - 1].actions[this.state.nextIndex].description = e.target.value }} />
              <h4>Réponses proposées</h4>
              <input type="text" className="editable" defaultValue={this.state.currentProject.triggers[this.state.selectedTrigger - 1].actions[this.state.nextIndex].propositions} onChange={(e) => { this.state.currentProject.triggers[this.state.selectedTrigger - 1].actions[this.state.nextIndex].propositions = e.target.value }} />
              <br /><br />
            </div>
          </div>
        }
        {this.state.tab === 'create' &&
          <div>
            <h3><a className="text dark-blue" onClick={this.handleBack}>Retour</a> > Création d’une action</h3>
            <h4>Questions</h4>
            <ul className="tabs">
              <li onClick={this.handleQuestionChoice}><FontAwesome style={{margin: 'auto'}} className="text dark-blue" size="2x" name="question-circle" /><a>Choix</a></li>
              <li onClick={this.handleQuestionNumber}><FontAwesome style={{margin: 'auto'}} className="text dark-blue" size="2x" name="sort-numeric-asc" /><a>Nombre</a></li>
            </ul>
            <h4>Contenus</h4>
            <ul className="tabs">
              <li onClick={this.handleContentMessage}><FontAwesome style={{margin: 'auto'}} className="text dark-blue" size="2x" name="comments" /><a>Message</a></li>
            </ul>
            <h4>Notifications</h4>
            <ul className="tabs">
              <li><FontAwesome style={{margin: 'auto'}} className="text dark-blue" size="2x" name="slack" /><a>Slack</a></li>
              <li><FontAwesome style={{margin: 'auto'}} className="text dark-blue" size="2x" name="envelope" /><a>Email</a></li>
            </ul>
          </div>
        }
        {this.state.tab === 'list' &&
          <div>
            <h3 className="text dark-blue">Séquences d’actions</h3>
            <p>Une séquence est un ensemble d’actions successives, qui peuvent avoir des conditions de déclenchement. A la fin d’une séquence des actions peuvent être déclencher également.</p>
            <br />
            <ul className="tabs-mini">
              {this.state.currentProject.triggers && this.state.currentProject.triggers.map((item) => {
                return (<li key={item.id}><a onClick={(e) => { this.setState({selectedTrigger: item.name}) }} className={(item.name === this.state.selectedTrigger) ? 'text dark-blue number selected' : 'text dark-blue number'}>{item.name}</a></li>)
              })}
              <li><a onClick={this.handleCreateTrigger} className="text dark-blue number">+</a></li>
            </ul>
            {!this.state.currentProject.triggers[this.state.selectedTrigger - 1].actions &&
              <a className="action" onClick={this.handleCreateAction}><FontAwesome className="text green" style={{marginTop: '16px', marginRight: '10px'}} size="2x" name="plus-circle" />
                <h4>Ajoutez votre première action</h4>
              </a>
            }
            {this.state.currentProject.triggers[this.state.selectedTrigger - 1].actions &&
              <div>
                <br />
                {this.state.currentProject.triggers[this.state.selectedTrigger - 1].actions.map((item) => {
                  return (<ProjectAction handleEditAction={this.handleEditAction} handleCreateAction={this.handleCreateAction} key={item.id} index={this.state.currentProject.triggers[this.state.selectedTrigger - 1].actions.indexOf(item)} data={item} />)
                })}
              </div>
            }
          </div>
        }
      </div>
    )
  }
}

export default ProjectActionSubActions
