import React,{useState,useContext} from 'react'
import {Button,Input} from 'semantic-ui-react'
import BlogContext from '../context/BlogContext';



function Search() {
    const blogContext=useContext(BlogContext);
    const {search} = blogContext;
    const [change,setchange] = useState('')
   

    const updatechangevalue=(e)=>{
        setchange(e.target.value);
    }
    const getSearch=(e)=>{
    e.preventDefault(); 

        setchange('');
        console.log("change",change);
        search(change);
    }
    
    return (
      <div className="search">
            <form onSubmit={getSearch} >
                
                <Input className="search-input" icon='search' placeholder='Search for a country...' type="text" value={change} onChange={updatechangevalue}/>

                <Button className="search-btn">search</Button>
                
            </form>
      </div>
            
       
     
    )
}

export default Search
