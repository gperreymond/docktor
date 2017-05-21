import Debug from 'debug'
import uuid from 'uuid'

const debug = Debug('docktor:actions')

const handler = (project, type, position, context) => {
  if (!project.actions) {
    project.actions = []
  }
  debug('onProjectActionCreate %s in position %s', project.name, type, position)
  project.actions.splice(position, 0, {
    id: uuid.v4(),
    type,
    name: type + ' : Nouvelle action'
  })
  context.setState({loading: false, message: '...'})
}

export default handler
