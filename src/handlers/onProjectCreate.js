import uuid from 'uuid'
import Debug from 'debug'
import request from 'request'

import Actions from '../Actions'

const debug = Debug('docktor:actions')

const handler = (context) => {
  debug('onProjectCreate')
  context.setState({loading: true, message: 'Creation du projet...'})
  let project = {
    id: uuid.v4(),
    name: 'Nouveau projet'
  }
  request({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    json: true,
    body: project,
    uri: window.location.origin + '/api/projects'
  }, (error, response, body) => {
    if (error) {
      console.error(error)
      return context.setState({loading: false, message: '...'})
    }
    if (response.statusCode === 200) {
      debug('project created %o', body)
      return Actions.projectsFind()
    }
    console.error(body)
    return context.setState({loading: false, message: '...'})
  })
}

export default handler
