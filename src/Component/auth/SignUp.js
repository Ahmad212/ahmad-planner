import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
 class SignUp extends Component {
    //init state 
    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:''


    }

    handleSubmit= (e) =>{
      e.preventDefault();
      this.props.signUp(this.state)

    }

    handleChange = (e) => {
   
        this.setState({
            [e.target.id]: e.target.value
        })


    }

    render() {
        const { auth , authError } = this.props;
        if(auth.uid) return(<Redirect to='/'/>);
        return (
            <div className={`container `}>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email Address</label>
                        <input onChange={this.handleChange} type='email' className='form-control' id='email' aria-describedby='emailHelp' placeholder='Enter Email' />
                        <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input onChange={this.handleChange} type='password' className='form-control' id='password'  placeholder='Enter Password' />
                    
                    </div>
                    <div className='form-group'>
                        <label htmlFor='firstName'>First Name</label>
                        <input onChange={this.handleChange} type='text' className='form-control' id='firstName'  placeholder='Enter First Name' />
                        
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input onChange={this.handleChange} type='text' className='form-control' id='lastName'  placeholder='Enter Last Name' />
                        
                    </div>
                    <button  type='submit' className="btn btn-primary">Sign Up</button>
                </form>
                {authError ? (
              <div className="alert alert-warning alert-dismissible fade show">
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                >
                  &times;
                </button>
                <strong>Login Failed!</strong> {authError}
              </div>
            ) : null}
                
            </div>
        )
    }
}

 const mapStateToProps = (state) =>{
    return{
       auth:state.firebase.auth,
       authError:state.auth.authError
     }
 }
const mapDispatchToProps = (dispatch) => {
    return{
        signUp : (newUser)=> dispatch(signUp(newUser))
    } 
}
export default connect(mapStateToProps,mapDispatchToProps) (SignUp)

