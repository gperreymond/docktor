import Debug from 'debug'
import uuid from 'uuid'

const debug = Debug('docktor:actions')

const handler = (project, context) => {
  if (!project.triggers) {
    project.triggers = []
  }
  debug('onProjectActionTriggerCreatee %s in position %s', project.name)
  project.triggers.push({
    id: uuid.v4(),
    name: project.triggers.length + 1
  })
  context.setState({loading: false, message: '...'})
}

export default handler
