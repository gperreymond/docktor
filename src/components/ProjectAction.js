/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'

import Store from './../Store'

import FontAwesome from 'react-fontawesome'

const iconType = {
  'question-choices': 'question-circle',
  'question-number': 'sort-numeric-asc',
  'content-message': 'comments'
}

class ProjectAction extends Reflux.Component {
  constructor (props) {
    super(props)
    this.store = Store
    this.handleCreateAction = (e) => {
      this.props.handleCreateAction(e, this.props.index)
    }
    this.handleEditAction = (e) => {
      this.props.handleEditAction(e, this.props.index)
    }
    this.handlerChangeName = (e) => {
      this.props.data.name = e.target.value
    }
  }
  render () {
    return (
      <div className="action-box">
        <FontAwesome className="float-left text dark-blue" fixedWidth width={68} size="4x" style={{opacity: '0.75', position: 'fixed', marginTop: '-8px'}} name={iconType[this.props.data.type]} />
        <div className="action-card flex">
          <input type="text" className="no-border smaller" defaultValue={this.props.data.name} onChange={this.handlerChangeName} />
          <a onClick={this.handleEditAction} className="flexitem"><FontAwesome className="text dark-blue" size="2x" name="pencil-square" /></a>
        </div>
        <a className="action-add" onClick={this.handleCreateAction}><FontAwesome className="text dark-blue" size="2x" name="plus-circle" /></a>
      </div>
    )
  }
}

export default ProjectAction
