import Debug from 'debug'
import request from 'request'

const debug = Debug('docktor:actions')

const handler = (id, context) => {
  debug('onProjectLoad %s', id)
  context.setState({loading: true, message: 'Loading project...'})
  request({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    json: true,
    uri: window.location.origin + '/api/projects/' + id
  }, (error, response, body) => {
    if (error) {
      console.error(error)
      return context.setState({loading: false, message: '...'})
    }
    if (response.statusCode === 200) {
      let project = body
      debug('project loaded %o', project)
      // return false
      return context.setState({loading: false, message: '...', currentProject: project})
    }
    console.error(body)
    return context.setState({loading: false, message: '...'})
  })
}

export default handler
