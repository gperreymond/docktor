import onPageInitialize from './handlers/onPageInitialize'
import onPageComplete from './handlers/onPageComplete'
import onProjectCreate from './handlers/onProjectCreate'
import onProjectsFind from './handlers/onProjectsFind'
import onProjectUpdate from './handlers/onProjectUpdate'
import onProjectLoad from './handlers/onProjectLoad'

class Handlers {
}

Handlers.prototype.onPageInitialize = onPageInitialize
Handlers.prototype.onPageComplete = onPageComplete
Handlers.prototype.onProjectCreate = onProjectCreate
Handlers.prototype.onProjectsFind = onProjectsFind
Handlers.prototype.onProjectUpdate = onProjectUpdate
Handlers.prototype.onProjectLoad = onProjectLoad

export default Handlers
