import React, { useEffect,useContext } from 'react'
import CountryInfo from './CountryInfo'
import BlogContext from '../context/BlogContext';
import {useParams} from 'react-router-dom';
import '../css/SingleCountry.css'

import Search from './Search'
function SingleCountry() {
    const blogContext=useContext(BlogContext);
    const {search,countrie,loading}= blogContext;
    let {country} = useParams();
      
    useEffect(()=>{
     
        search(country);
        
        
    },[]);
  
    console.log("searchdata in signle page",countrie);
    return (
        <div>
        {
            !loading ? (
                <div className="SingleCountry">
                    <div className="container">

                        <Search/>
                        <CountryInfo  countryname={countrie}/>
                   
                        </div>
                </div>  
               
            ) : (<div>Loading...</div>)
            }
                 
     </div>
    )
}

export default SingleCountry
