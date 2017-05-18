/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'

import ProjectCard from './../components/ProjectCard'

import Store from './../Store'
import Actions from './../Actions'

class AdminProjects extends Reflux.Component {
  constructor (props) {
    super(props)
    this.store = Store
    this.handlerProjectCreate = () => Actions.projectCreate()
  }
  render () {
    if (this.props.loading) {
      return (
        <div />
      )
    }
    return (
      <div>
        {this.state.projects.total_rows === 0 &&
          <div className="box">
            <div className="container-title">Welcome to the workspace projects</div>
            <div>
              <div className="container-desc">No project found at the moment!</div>
              <br /><br />
              <div className="text-center"><a onClick={this.handlerProjectCreate} className="button green huge">New project</a></div>
            </div>
          </div>
        }
        {this.state.projects.total_rows > 0 &&
          <div className="projects-cards-box">
            <a onClick={this.handlerProjectCreate} className="button green huge add">+</a>
            <div className="projects-cards">
              {this.state.projects.rows.map((item) => {
                return (<ProjectCard key={item.id} data={item} />)
              })}
            </div>
          </div>
        }
      </div>
    )
  }
}

export default AdminProjects
