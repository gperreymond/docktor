import Debug from 'debug'
import request from 'request'

import Actions from '../Actions'

const debug = Debug('docktor:actions')

const handler = (id, data, context) => {
  debug('onProjectUpdate', id, data)
  context.setState({loading: true, message: 'Updating project...'})
  request({
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    json: true,
    body: data,
    uri: window.location.origin + '/api/projects/' + id
  }, (error, response, body) => {
    if (error) {
      console.error(error)
      return context.setState({loading: false, message: '...'})
    }
    if (response.statusCode === 200) {
      debug('project updated %o', body)
      return Actions.projectsFind()
    }
    console.error(body)
    return context.setState({loading: false, message: '...'})
  })
}

export default handler
