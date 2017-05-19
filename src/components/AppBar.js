/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'
import { Link } from 'react-router-dom'

import AppBarMenu from './AppBarMenu'

class AppBar extends Reflux.Component {
  render () {
    /* if (this.props.loading) {
      return (
        <header className="header">
          <div className="header-projects">
            {this.props.message}
          </div>
        </header>
      )
    } */
    return (
      <header className="header">
        <div className="header-projects">
          <Link className="header-logo" to="/admin/projects" />
          <Link className="header-project-name" to="/admin/projects">{this.props.pageName === 'Admin' ? 'Administrator' : 'Docktor'}</Link>
        </div>
        <AppBarMenu {...this.state} pageName={this.props.pageName} match={this.props.match} />
      </header>
    )
  }
}

export default AppBar
