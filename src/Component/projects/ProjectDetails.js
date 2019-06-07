import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import moment from 'moment'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
const ProjectDetails = (props) => {
  const { project , auth} = props;
  const fixStyle = {
    opacity: '0.4',
    color : 'pink'
  }

  if(!auth.uid) return(<Redirect to='/signin'/>)
if(project){
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="card text-center text-white  bg-dark mb-3">
          <div className="card-header">ID:{' ' +props.match.params.id}</div>
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{project.title}</h5>
          <p className='card-text'>{project.content}</p>
        </div>
        <br />
        <hr />
        <br />
        <div className='card-footer' style={fixStyle} >Posted by {project.authorFirstName} {" "} {project.authorLastName} <br />{moment(project.createdAt.toDate()).calendar()}</div>
      </div>

    </div>
  );
}
else {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}



}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    project: project,
    auth:state.firebase.auth
  }

}



export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails);

