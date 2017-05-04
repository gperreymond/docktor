import onPageInitialize from './handlers/onPageInitialize'
import onPageComplete from './handlers/onPageComplete'
import onProjectCreate from './handlers/onProjectCreate'

class Handlers {
}

Handlers.prototype.onPageInitialize = onPageInitialize
Handlers.prototype.onPageComplete = onPageComplete
Handlers.prototype.onProjectCreate = onProjectCreate

export default Handlers
