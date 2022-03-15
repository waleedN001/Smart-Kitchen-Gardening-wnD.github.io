import React,{useState} from 'react';
import './App.css';
import './css/styles.css';
import Navbar from './components/Navbar';
import Plants from './components/Plants';
import Footer from './components/Footer';
import CompliantHandling from './components/CompliantHandling';
import JalybiBhi from './components/JalybiBhi';
import Tool from './components/Tool';
import Soil from './components/Soil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='#79f79b'; 
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#2b5c2d';   
    }
  };
  return (
   
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <Switch>
          <Route exact path="/soil">
              <Soil/>
          </Route>
          <Route exact path="/tool">
              <Tool/>
          </Route>
          <Route exact path="/plants">
              <Plants/>
          </Route>
          <Route exact path="/complaintHandling">
            <CompliantHandling/>
          </Route>
          <Route exact path="/">
             <JalybiBhi/>
          </Route>
   </Switch>
    
    <Footer/>
    </div>
    </Router>
    </>
     
      
  );
}

export default App;
