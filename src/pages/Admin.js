/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'
import { capitalize } from 'lodash'
import Debug from 'debug'

import Store from './../Store'
import Actions from './../Actions'

import AppBar from './../components/AppBar'
import AdminProjects from './../containers/AdminProjects'

const debug = Debug('docktor:pages')

const None = () => {
  return (
    <div className="box">
      <div className="container-title error">There is no container in this workspace</div>
      <div className="container-desc">Why not use the menu to select one?</div>
    </div>
  )
}

class Stacks extends Reflux.Component {
  componentDidMount () {
    debug('componentDidMount %s %s', this.pageName, this.props.match.params.container)
    document.title = capitalize(this.props.match.params.container) + ' | Docktor'
    switch (this.props.match.params.container) {
      case 'projects':
        this.pageContainer = <AdminProjects />
        break
      case 'plugins':
        this.pageContainer = <None />
        break
      default:
        document.title = 'None | Docktor'
        this.pageContainer = <None />
    }
    Actions.pageInitialize(this.pageName)
  }
  componentWillUnmount () {
    debug('componentWillUnmount %s', this.pageName)
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props.match.params.container === prevProps.match.params.container) {
      return false
    }
    debug('componentDidUpdate %s %s', this.pageName, this.props.match.params.container)
    document.title = capitalize(this.props.match.params.container) + ' | Docktor'
    switch (this.props.match.params.container) {
      case 'projects':
        this.pageContainer = <AdminProjects />
        break
      case 'pages':
        this.pageContainer = <None />
        break
      default:
        document.title = 'None | Docktor'
        this.pageContainer = <None />
    }
    Actions.pageInitialize(this.pageName)
  }
  constructor (props) {
    super(props)
    this.pageName = 'Admin' // for debug only
    this.pageContainer = <None />
    debug('constructor %s', this.pageName)
    this.store = Store
  }
  render () {
    debug('render %s', this.pageName)
    if (this.state.loading) {
      return (<AppBar {...this.state} pageName={this.pageName} match={this.props.match} />)
    }
    return (
      <div>
        <AppBar {...this.state} pageName={this.pageName} match={this.props.match} />
        <div className="container">
          {this.pageContainer}
        </div>
      </div>
    )
  }
}

export default Stacks
