/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'

class ProjectCard extends Reflux.Component {
  render () {
    return (
      <div className="project-card">
        <h3>{this.props.data.name}</h3>
        <div className="project-update-date">Last update <strong>2 days ago</strong></div>
      </div>
    )
  }
}

export default ProjectCard
