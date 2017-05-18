import {
  render
} from 'react-dom'

import Application from './Application'

window.localStorage.debug = 'docktor:*'
window.Raven.config('https://f46e516689454c93a343bcb58e253bf7@sentry.io/169530').install()

render(Application(), document.getElementById('root'))
