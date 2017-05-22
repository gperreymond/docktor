// react
import Reflux from 'reflux'

const Actions = Reflux.createActions([
  'pageInitialize',
  'pageComplete',
  'projectCreate',
  'projectLoad',
  'projectUpdate',
  'projectsFind',
  'projectActionCreate',
  'projectActionTriggerCreate'
])

export default Actions
