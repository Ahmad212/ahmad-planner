import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

 class CreateProject extends Component {
    //init state 
    state = {
        title:'',
        content:'',
        

    }

    handleSubmit= (e) =>{
      e.preventDefault();
      this.props.createProject(this.state);
      this.props.history.push('/')

    }

    handleChange = (e) => {
   
        this.setState({
            [e.target.id]: e.target.value
        })


    }

    render() {
        const {auth} = this.props;
        if(!auth.uid) return(<Redirect to='/signin'/>)
        return (
            <div className={`container `}>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input onChange={this.handleChange} type='text' className='form-control' id='title'  placeholder='Enter title' />
                        
                    </div>
                    <div className='form-group'>
                        <label htmlFor='content'>Content</label>
                        <textarea onChange={this.handleChange}  className='form-control' id='content' placeholder='Enter Content Here' rows='3' />
                    
                    </div>
                   
                    <button  type='submit' className="btn btn-primary">Create</button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth:state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        createProject: (project) => dispatch(createProject(project))
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)

