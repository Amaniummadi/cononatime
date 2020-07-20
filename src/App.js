import React from 'react';

import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import SearchList from './components/SearchList'
import BlogProvider from './context/BlogProvider'

import SingleCountry from './components/SingleCountry'
// import NavBar from './components/NavBar'

import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BlogProvider>
  <div className="App">
  

       <Router>
{/* <NavBar/> */}
       <Header/>
   
       <div>
       
         <Switch>
           <Route path="/about">
             <About />
           </Route>
          
           <Route path="/countries" >
             <SearchList />
           </Route>
           <Route path="/" exact>
             <Home />
           </Route>
           <Route path="/:country" exact component={SingleCountry} />
           
         </Switch>
       </div>
     </Router>
 
 
     </div>
    </BlogProvider>
  
  );
}

export default App;
