import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <br></br>
          <br></br>
          <Switch>
            <Route exact path='/' component={Input}></Route>
            <Route exact path='/verification' component={OTP}></Route>
            <Route exact path='/verified' component={Verified}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/about' component={About}></Route>
            {/* <Route path='/posts/:postID' component={ProjectDetails}></Route>
            <Route path="/login" component={Signin}></Route>
            <Route path='/signup' component={SignUp}></Route>
            <Route path='/create' component={Create}></Route> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
