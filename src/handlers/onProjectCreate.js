import uuid from 'uuid'
import Debug from 'debug'

const debug = Debug('docktor:actions')

const handler = (context) => {
  debug('onProjectCreate')
  context.setState({loading: true, message: 'Create project in progress...'})
  context.databases.projects.put({
    _id: uuid.v4(),
    name: 'New project',
    updatedAt: new Date(),
    createdAt: new Date()
  }).then((result) => {
    debug('project created %o', result)
    context.setState({loading: false, message: '...'})
  }).catch(console.error)
}

export default handler
