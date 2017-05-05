import PouchDB from 'pouchdb'
import Debug from 'debug'

import Actions from './../Actions'

const debug = Debug('docktor:actions')

const handler = (page, context) => {
  debug('onPageInitialize %s', page)
  context.setState({loading: true, message: 'Chargement des data...'})
  // data from projects
  context.databases.projects = new PouchDB('docktor_projects', {auto_compaction: true})
  context.databases.projects.info().then((info) => {
    debug('data info %o', info)
    if (info.doc_count === 0) {
      context.setState({projects: {total_rows: 0, rows: []}})
    } else {
      context.databases.projects.changes({
        since: 'now',
        live: true,
        include_docs: true
      }).on('change', (change) => {
        debug('projects change %o', change)
        context.databases.projects.allDocs({include_docs: true}).then((docs) => {
          context.setState({projects: docs})
        })
      }).on('error', console.error)
    }
    return context.databases.projects.allDocs({include_docs: true}).then((docs) => {
      debug('projects all docs %o', docs)
      context.setState({projects: docs})
      return true
    })
  }).then(() => {
    Actions.pageComplete(page)
  }).catch((error) => {
    console.error(error)
  })
}

export default handler
