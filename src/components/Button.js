/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'

class AppBar extends Reflux.Component {
  render () {
    return (
      <a className={(this.props.color) ? 'button ' + this.props.color : 'button'} href={this.props.href || '/'}><span>{this.props.label || 'Button'}</span></a>
    )
  }
}

export default AppBar
