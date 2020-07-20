export default (state,action) => {
    switch(action.type){
        case 'SET_POSTS':
            return {
                ...state,
                blogPosts:action.payload
            };
        case 'SET_COUNTRY':
                return {
                    ...state,
                    countrie:action.payload
                };
        case 'SET_ALLCOUNTRIES':
            return{
                ...state,
                countrielist:action.payload
            }        
        case 'SENDING_REQUEST':
            return{
                ...state,
                loading:true,
                currentBlogPost:true
            };
            case 'REQUEST_FINISHED':
                return{
                    ...state,
                    loading:false,
                    currentBlogPost:false
                };
    }
}