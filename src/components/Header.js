import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import '../css/HeaderPage.css'
import '../css/mediaqueries.css'

function Header() {
  const [isNavVissible, setisNavVissible] = useState(true)
  const [isSmallScreen, setisSmallScreen] = useState(false)
useEffect(() => {
  // console.log("useEffcect",isSmallScreen);
  const mediaQuery= window.matchMedia("(max-width:768px)");
  mediaQuery.addListener(handleMediaQueryChange);
  handleMediaQueryChange(mediaQuery);
  return () => {
    console.log("return effect");
   mediaQuery.removeListener(handleMediaQueryChange);
  };
}, [])

const handleMediaQueryChange = mediaQuery => {
    console.log("mediaQuery",mediaQuery);
  if(mediaQuery.matches){
    console.log("mediaQuery.matches",mediaQuery.matches);
    setisSmallScreen(true);
  }
  else{
    console.log("mediaQuery.matches",mediaQuery.matches);
    setisSmallScreen(false);
  }
}

  const toggleNav=() => {
    console.log("!isNavVissible",!isNavVissible);
    setisNavVissible(!isNavVissible);
  }
    return (
        <div className="HeaderPage sticky top-0 ...">
          <div className="container">
          <div className="topnav">
 
              <div >
                <div className="logo">
                  <Link to="/" className="logo_link">
                  <h2>Corona Time</h2>
                    </Link> 
                    <div className="navbar_head" onClick={toggleNav}>
                    <Icon disabled name='bars' className="navbar" />
                    </div>
                  
                </div>
               
                   
              </div>
              {( !isSmallScreen  || isNavVissible) && ( <div className="menu">
                  <nav>
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to='/countries' >countries</Link>
                          </li>
                        </ul>
                  </nav>
              </div>)}
             

            </div>

          </div>
      
        </div>
    )
}

export default Header




