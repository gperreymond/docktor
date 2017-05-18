/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'
import { Link } from 'react-router-dom'

class ProjectCard extends Reflux.Component {
  constructor (props) {
    super(props)
    this.handlerSelectProject = () => {

    }
  }
  render () {
    const diff = Math.floor((Date.now() - Date.parse(this.props.data.updatedAt)) / 86400000)
    return (
      <div className="project-card" onClick={this.handlerSelectProject}>
        <h3><Link className="project-link" to={'/admin/project/' + this.props.data.id}>{this.props.data.name.toLowerCase()}</Link></h3>
        <div className="project-update-date">Last update <strong>{diff} day(s) ago</strong></div>
      </div>
    )
  }
}

export default ProjectCard
