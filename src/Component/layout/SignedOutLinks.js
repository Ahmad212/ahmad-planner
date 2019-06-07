import React from 'react';
import {NavLink} from 'react-router-dom'


//stateless component 

const SignedOutLinks = () =>  {

   return(
     <ul className='navbar-nav ml-auto'>
     
         <li className='nav-item'><NavLink className='nav-link' to='/signup'>Signup &nbsp; </NavLink></li>
         <li className='nav-item'><NavLink className='nav-link' to='/signin'>Login &nbsp; </NavLink></li>
      
     </ul>


   );

}

export default SignedOutLinks;