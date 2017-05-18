import Debug from 'debug'
import request from 'request'

import Actions from './../Actions'

const debug = Debug('docktor:actions')

const handler = (page, context) => {
  debug('onPageInitialize %s', page)
  context.setState({loading: true, message: 'Chargement des data...'})
  request({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    json: true,
    uri: window.location.origin + '/api/projects'
  }, (error, response, body) => {
    if (error) {
      return console.error(error)
    }
    if (response.statusCode === 200) {
      debug('projects %o', body)
      context.setState({projects: body})
      return Actions.pageComplete(page)
    }
    console.error(body)
    return context.setState({loading: false, message: '...'})
  })
}

export default handler
