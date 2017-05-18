import uuid from 'uuid'
import Debug from 'debug'
import request from 'request'

const debug = Debug('docktor:actions')

const handler = (context) => {
  debug('onProjectCreate')
  context.setState({loading: true, message: 'Create project in progress...'})
  let project = {
    id: uuid.v4(),
    name: 'New project',
    updatedAt: new Date(),
    createdAt: new Date()
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
      return console.error(error)
    }
    if (response.statusCode === 200) {
      debug('project created %o', project)
      return context.setState({loading: false, message: '...'})
    }
    console.error(body)
    return context.setState({loading: false, message: '...'})
  })
}

export default handler
