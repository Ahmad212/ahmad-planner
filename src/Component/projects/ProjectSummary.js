import React from 'react'
import moment from 'moment'
const ProjectSummary = ({project}) => {
return (
  
  <div>
    <div className="card-header"> {project.id} </div>
    <div className="card-body">
      <h5 className="card-title">{project.title}</h5>
      <p className="card-text">
        {project.content}
      </p>
    </div>
    <div className="card-footer text-muted">Created  {moment(project.createdAt.toDate()).calendar()} by {project.authorFirstName + " " + project.authorLastName}</div>
  </div>
);


}

export default ProjectSummary