import Debug from 'debug'
import request from 'request'

const debug = Debug('docktor:actions')

const handler = (context) => {
  debug('onProjectsFind')
  context.setState({loading: true, message: 'Initialisation des projets...'})
  request({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    json: true,
    uri: window.location.origin + '/api/projects'
  }, (error, response, body) => {
    if (error) {
      console.error(error)
      return context.setState({loading: false, message: '...'})
    }
    if (response.statusCode === 200) {
      let projects = body
      debug('projects listing %o', projects)
      return context.setState({loading: false, message: '...', projects})
    }
    console.error(body)
    return context.setState({loading: false, message: '...'})
  })
}

export default handler
