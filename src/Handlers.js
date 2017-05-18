import onPageInitialize from './handlers/onPageInitialize'
import onPageComplete from './handlers/onPageComplete'
import onProjectCreate from './handlers/onProjectCreate'
import onProjectsFind from './handlers/onProjectsFind'

class Handlers {
}

Handlers.prototype.onPageInitialize = onPageInitialize
Handlers.prototype.onPageComplete = onPageComplete
Handlers.prototype.onProjectCreate = onProjectCreate
Handlers.prototype.onProjectsFind = onProjectsFind

export default Handlers
