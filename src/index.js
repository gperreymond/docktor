import {
  render
} from 'react-dom'

import Application from './Application'

window.localStorage.debug = 'docktor:*'

render(Application(), document.getElementById('root'))
