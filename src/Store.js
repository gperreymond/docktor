import Reflux from 'reflux'
import Debug from 'debug'

import Actions from './Actions'
import Handlers from './Handlers'

const debug = Debug('docktor:store')

class Store extends Reflux.Store {
  constructor () {
    super()
    // state
    this.state = {
      // loader
      loading: true,
      message: '...',
      // work in progress
      working: false,
      // data
      projects: {
        total_rows: 0,
        rows: []
      }
    }
    debug('constructor')
    this.listenables = [Actions]
    this.handlers = new Handlers()
    // couchdb, pouchdb
    this.databases = {
      projects: false
    }
  }
  onPageInitialize (page) { this.handlers.onPageInitialize(page, this) }
  onPageComplete (page) { this.handlers.onPageComplete(page, this) }
  onProjectCreate () { this.handlers.onProjectCreate(this) }
  onProjectsFind () { this.handlers.onProjectsFind(this) }
}

export default Store
