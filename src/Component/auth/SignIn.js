import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
 class SignIn extends Component {
    //init state 
    state = {
        email:'',
        password:''


    }

    handleSubmit= (e) =>{
      e.preventDefault();
      this.props.signIn(this.state)

    }

    handleChange = (e) => {
   
        this.setState({
            [e.target.id]: e.target.value
        })


    }

    render() {
      const { authState } = this.props;
      if(authState.uid) return(<Redirect to='/'/>)
        return (
          <div className={`container `}>
            <br />
            <br />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  onChange={this.handleChange}
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.handleChange}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </form>
            <br />
            {this.props.authError ? (
              <div class="alert alert-warning alert-dismissible fade show">
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                >
                  &times;
                </button>
                <strong>Login Failed!</strong> Something Wrong With Your Email or Password!
              </div>
            ) : null}

            <br />
            <br />
            <br />
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        authError:state.auth.authError,
        authState:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    
    return{
        signIn : (credentials) => dispatch(signIn(credentials)) 
    }
} 

export default connect(mapStateToProps,mapDispatchToProps) (SignIn)

