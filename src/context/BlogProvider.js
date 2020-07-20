import React, { useReducer} from 'react';
import BlogContext from './BlogContext';
import  BlogReducer  from './BlogReducer'




const BlogProvider = props =>{
    const initialState = {
        blogPosts:[],
        currentBlogPost:null,
        loading:true,
        countrielist:[],
        countrie:[]

    }


    const [state, dispatch] = useReducer(BlogReducer, initialState)
    
    // useEffect((e) => {
    //     window.location.reload(false);
    //     getAllCountries()
    // }, [])

    const getPosts= async () =>{
        try{
            dispatch({type:'SENDING_REQUEST'});
            const res=await fetch(`https://coronavirus-19-api.herokuapp.com/all`);
            const data =await res.json();
            console.log("total world report",data);
            dispatch({type:'REQUEST_FINISHED'});
            dispatch({type:'SET_POSTS',payload:data});
        }
        catch(err){
            console.log("error",err);

        }
    }
    const getAllCountries= async () =>{
        try{
            dispatch({type:'SENDING_REQUEST'});
            const res=await fetch(`https://coronavirus-19-api.herokuapp.com/countries`);
            const data =await res.json();
            console.log("total world report",data);
            dispatch({type:'REQUEST_FINISHED'});
            dispatch({type:'SET_ALLCOUNTRIES',payload:data});
        }
        catch(err){
            console.log("error",err);

        }
    }
    
    const search = async (searchValue) =>{
        console.log("searchid" ,searchValue);
        try{
            dispatch({type:'SENDING_REQUEST'});
            const res =await fetch(` https://coronavirus-19-api.herokuapp.com/countries/${searchValue}`);
            // const res=await fetch(`https://api.covid19api.com/total/country/${searchValue}`);
            const data =await res.json();
            console.log("country",data);
            dispatch({type:'REQUEST_FINISHED'});
            dispatch({type:'SET_COUNTRY',payload:data});
        }
        catch(err){
            console.log("error",err);

        }
     
    };


   

    return(
        <BlogContext.Provider value={{
            blogPosts:state.blogPosts,
             currentBlogPost:state.currentBlogPost,
             loading:state.loading,
             countrielist:state.countrielist,
             countrie:state.countrie,
             getPosts:getPosts,
             search:search,
             getAllCountries:getAllCountries
        }}>
               {props.children}
        </BlogContext.Provider>
    )
}
export default BlogProvider;
