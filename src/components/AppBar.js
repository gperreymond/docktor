/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'

import AppBarMenu from './AppBarMenu'

class AppBar extends Reflux.Component {
  render () {
    if (this.props.loading) {
      return (
        <header className="header">
          <div className="header-projects">
            {this.props.message}
          </div>
        </header>
      )
    }
    return (
      <header className="header">
        <div className="header-projects">
          <a className="header-logo" href="/" />
          <a className="header-project-name">{this.props.pageName === 'Admin' ? 'Administrator' : 'Docktor'}</a>
        </div>
        <AppBarMenu {...this.state} pageName={this.props.pageName} match={this.props.match} />
      </header>
    )
  }
}

export default AppBar
