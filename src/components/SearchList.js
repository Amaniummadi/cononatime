import React, { useEffect,useContext } from 'react'
// import Search from './Search'
import Countrydata from './Countrydata'
import BlogContext from '../context/BlogContext';
import '../css/Countrydata.css'

function SearchList(props) {
    const blogContext=useContext(BlogContext);
    const {getAllCountries,countrielist,loading}= blogContext;
   
    useEffect(()=>{
     
        getAllCountries();
        
        
    },[]);
    
    return (
        <div>
           {
            !loading ? (
                
                <div className=" searchList flex flex-wrap bg-gray-200 justify-between">
                   
                    <div className="container">
                    <h1 className="uppercase mb-4 pb-4">All Countries corona cases</h1>
                    <p className="search-text">The  virus has infected more than 9 million people and has been detected in nearly every country </p>
                        <div>
                        {
                    countrielist.map((name,i) =>(
                        <Countrydata key={i} countryname={name} />
                    ))
                 } 
             </div>
               
                    </div>
                    
            </div>  
               
            ) : (<div>Loading...</div>)
            }
            
                    
        </div>
    )
}

export default SearchList
