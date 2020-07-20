import React,{useContext,useEffect} from 'react'
import BlogContext from '../context/BlogContext';
import '../css/Home.css'
import '../css/mediaqueries.css'
import NumberFormat from 'react-number-format';


function HomeCarousel() {
    const blogContext=useContext(BlogContext);
    const {getPosts,blogPosts,loading}= blogContext;

    useEffect(()=>{
        
        getPosts();
    
        
    },[]);
   
    return (
        <div className="HomeCarousel">
           
            <div className="container ">
            {
              !loading ? (
                <div className="carousel-head">
                    <h1 className="carousel_heading">world wide covid 19 cases</h1>
                    <div className="cal2">
                         
                         <h1>
                         <NumberFormat value={blogPosts.cases} displayType={'text'} thousandSeparator={true}  />
                         </h1>
                         <h2>Total Confirmed </h2>
                    </div>
                    <div className="cal1 left-block">
                   
                    <h1>
                         <NumberFormat value={blogPosts.deaths} displayType={'text'} thousandSeparator={true}  />
                         </h1>
                         <h2>Total Deaths </h2>
                    </div>
                    <div className="cal1 right-block">
                      
                        <h1>
                         <NumberFormat value={blogPosts.recovered} displayType={'text'} thousandSeparator={true}  />
                         </h1>
                         <h2>Total Recovered </h2>
                    </div>
              
                </div>
              )  :
              (<div className="loading">loading...</div>)
            }
            </div>
            
           
          
        </div>
    )
}

export default HomeCarousel
