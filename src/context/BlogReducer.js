export default (state,action) => {
    switch(action.type){
        case 'SET_POSTS':
            return {
                ...state,
                loading:false,
                blogPosts:action.payload
            };
        case 'SET_COUNTRY':
                return {
                    ...state,
                    loading:false,
                    countrie:action.payload
                };
        case 'SET_ALLCOUNTRIES':
            return{
                ...state,
                loading:false,
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
                default:
                    return state;
    }
};