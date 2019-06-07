import React  , {Component}from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import NavBar from './Component/layout/NavBar'
import Dashboard from './Component/dashboard/Dashboard'
import ProjectDetails from './Component/projects/ProjectDetails'
import SignIn from './Component/auth/SignIn'
import SignUp from './Component/auth/SignUp'
import CreateProject from './Component/projects/CreateProject'
class  App extends Component {
  
  render(){
  return (
    
    <BrowserRouter>

    <div className="App">
     <NavBar />
     <Switch>
       <Route exact path='/' component={Dashboard}/>
       <Route path='/project/:id' component={ProjectDetails} />
       <Route path='/signin' component={SignIn} />
       <Route path='/signup' component={SignUp}/>
       <Route path='/create' component={CreateProject}/>
     </Switch>

    </div>

    </BrowserRouter>
  );
}
}
export default App;



