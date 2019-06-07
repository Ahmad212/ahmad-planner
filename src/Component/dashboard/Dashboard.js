import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList'
import Notification from './Notifications' 
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {
   
    render() {
       
        const { projects , auth , notifications } = this.props;
        if(!auth.uid) return(<Redirect to='/signin'/>)
        return (


            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <ProjectList projects={projects} />
                    </div>
                    <div className='col-sm-4'>
                        <Notification notifications={notifications}/>
                    </div>
                </div>
            </div>



        );


    }


}

const mapStateToProps = (state) =>{
 return{
     projects: state.firestore.data.projects,
     auth : state.firebase.auth,
     notifications:state.firestore.ordered.notifications
 }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'projects',orderBy :['createdAt' , 'desc']},
        { collection : 'notifications' , limit : 4, orderBy:['time' , 'desc']}
    ])
)(Dashboard)
