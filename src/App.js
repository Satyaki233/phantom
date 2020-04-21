import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import './App.css';
import About from './components/About';
import Home from './components/Home'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Nav/>
       <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About' exact component={About}/>

       </Switch>
      
     </BrowserRouter>
    </div>
  );
}

export default App;
