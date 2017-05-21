/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'
import { Link, Redirect } from 'react-router-dom'

class ProjectCard extends Reflux.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.redirect = () => {
      let path = '/admin/project/' + this.props.data.id
      this.setState({redirect: path})
    }
  }
  render () {
    if (this.state.redirect !== false) {
      return (<Redirect to={this.state.redirect} />)
    }
    const diff = Math.floor((Date.now() - Date.parse(this.props.data.updatedAt)) / 86400000)
    return (
      <div className="project-card" onClick={this.redirect}>
        <h3><Link className="project-link" to={'/admin/project/' + this.props.data.id}>{this.props.data.name.toLowerCase()}</Link></h3>
        <div className="project-update-date">Dernière mise à jour <strong>{diff} jour(s)</strong></div>
      </div>
    )
  }
}

export default ProjectCard
