import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './components/Auth/signin'
import SignUp from './components/Auth/signup'
import Dashboard from './components/Dashboard/dashboard';
import { Switch } from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import UserList from './components/Matches/UserList';
import UserDetails from './components/Matches/UserDetails';
//import Sidebar from './components/Layout/Sidenav'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          
          <br></br>
          <br></br>
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route exact path='/login' component={Signin}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
            <Route exact path='/searches' component={UserList}></Route>
            <Route exact path='/searches/:username' component={UserDetails}></Route> 
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
