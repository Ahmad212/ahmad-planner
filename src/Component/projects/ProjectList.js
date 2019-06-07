import React from "react";
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  if(projects){
    return (
      <div>
        <br />
        <div className="card  text-center">
          {projects && Object.keys(projects).map((project,index) => {
            return (<Link to={`/project/${project}`}>
                               <ProjectSummary  project={projects[project]} key={index} />
                    </Link>
         )}
          )}
        </div>
        <br />
        <br />
      </div>

        
    );

          }
   else{
     return(<div className="container">
     <div className="d-flex justify-content-center">
       <div className="spinner-border text-primary" role="status">
         <span className="sr-only">Loading...</span>
       </div>
     </div>
   </div>)
   }       
};

export default ProjectList;

