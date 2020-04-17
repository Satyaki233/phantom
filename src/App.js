import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import './App.css';
import About from './components/About';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About' exact component={About}/>

       </Switch>
      
     </BrowserRouter>
    </div>
  );
}

export default App;
