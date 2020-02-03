import React,{useState} from 'react';
import './App.css';
import Login from './Components/login';
import { BrowserRouter, Route, Link ,Redirect} from 'react-router-dom'
import EmployeeList from './Components/EmployeeList';
import {connect} from 'react-redux'

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to='/' ></Link>
        </div>
        <div>
          <Route path="/" exact component={Login} ></Route>
          <Route path="/Employee" component={EmployeeList} ></Route>
          {props.loginflag ? (
            <Redirect to="/Employee" />
          ) : (
            <Redirect to="/" />
          ) }
         
        </div>
        
      </div>
    </BrowserRouter>

  );
}

const mapStateToProps = state =>{
  return {
      loginflag:state.auth.isAuth
  }
}
export default connect(
  mapStateToProps
)(App);
