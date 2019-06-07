import React from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const NavBar = (props) => {
  const { auth , profile }  = props;
return (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">
        Planner
      </Link>
    </div>

    
    {
      auth.uid ? (
        <SignedInLinks profile={profile}/>
      ):(
        <SignedOutLinks/>
         
      )
    }
  </nav>
);

}
const mapStateToProps = (state) => {
  return {
      auth:state.firebase.auth,
      profile:state.firebase.profile
  }

}

export default connect(mapStateToProps)(NavBar);

