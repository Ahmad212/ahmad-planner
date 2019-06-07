import React from 'react';
import {NavLink} from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'
import { connect } from 'react-redux'

//stateless component 

const SignedInLinks = (props) =>  {

   return(
     <ul className='navbar-nav ml-auto'>
     
         <li className='nav-item'><NavLink className='nav-link' to='/create'>New Project &nbsp; </NavLink> </li>
         <li className='nav-item' ><NavLink className='nav-link '  onClick={props.signOut}>Log Out &nbsp; <i className="material-icons"></i></NavLink></li>
         <li className='nav-item'><NavLink className='nav-link btn btn-primary'  to='/' >{props.profile.initials ? ((props.profile.initials).toString().toUpperCase()) : 'loading...'}</NavLink></li>
     </ul>


   );
   
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps) (SignedInLinks);
