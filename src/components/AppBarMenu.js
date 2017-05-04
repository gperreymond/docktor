/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'

import { Link } from 'react-router-dom'

class AppBarMenu extends Reflux.Component {
  render () {
    if (this.props.pageName === 'Admin') {
      return (
        <nav className="nav">
          <ul>
            <li className={(this.props.match.params.container === 'projects') ? 'button orange' : 'button white'}><Link to="/admin/projects">Projects</Link></li>
            <li className={(this.props.match.params.container === 'plugins') ? 'button orange' : 'button white'}><Link to="/admin/plugins">Plugins</Link></li>
          </ul>
        </nav>
      )
    }
    return (
      <nav />
    )
  }
}

export default AppBarMenu
