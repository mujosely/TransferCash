import React from 'react'
import './styles/output.css';
import Login from './pages/loginRegister/Login';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Register from './pages/loginRegister/Register'
import Home from './pages/layout/Home.jsx';

import HowItWork from './pages/layout/HowItWork'
import Payment from './pages/layout/Payment.jsx';
import Success from './pages/layout/Success.jsx';
function App() {
  return (
    <div>
    
    <Router>
    <Switch>
        <Route path='/Login'  component={Login}/>
        <Route path='/Register' component={Register}/>
        <Route path='/HowItWork' component={HowItWork}/>
               
       
        <Route path='/HowItWork' component={HowItWork}/>
        
        
         <Route path='/Payment' component={Payment}/>
         <Route path='/Success' component={Success}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
      
    </div> 
  );
}

export default App;
