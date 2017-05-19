/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'

class ProjectActionSubActions extends Reflux.Component {
  render () {
    return (
      <div className="normal grey">
        <h4 className="text dark-blue">Primary actions</h4>
        <p>These actions are run in sequence on every execution of the pipeline. If one of the actions fails, the release will come to a halt requiring your attention, unless you've set a conditional action down the line.</p>
        <a className="action" href=""><div className="plus" /><div>Add the first action</div></a>
        <h4 className="text dark-blue">Actions run on failure</h4>
        <p>These actions will be run if one of the primary actions has failed. This is useful for setting notifications that will inform you in case something goes wrong.</p>
        <a className="action" href=""><div className="plus" /><div>Add the first on failed action</div></a>
        <h4 className="text dark-blue">Actions run on back to normal</h4>
        <p>These actions will be run if the pipeline status has changed from failed to successful.</p>
        <a className="action" href=""><div className="plus" /><div>Add the first on back to normal action</div></a>
        <br />
      </div>
    )
  }
}

export default ProjectActionSubActions
