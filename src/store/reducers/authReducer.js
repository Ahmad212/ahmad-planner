const initState = {
    authError: null
}

 export const authReducer = (state = initState , action) =>{
    switch(action.type){
        case 'LOGIN_FAILED': 
                      return{
                          ...state,
                          authError:'login fail'
                      }
        case 'LOGIN_SUCCESS':
                     return {
                         ...state,
                         authError : null
                     }    
        case 'LOGOUT_SUCCESS':
                     return state;   
        case 'SIGNUP-SUCCESS': 
                             return{
                                 ...state,
                                 authError:null
                             }    
        case 'SIGNUP_FAILED': 
                            return {
                                ...state,
                                authError:action.err.message
                            }                                        
        default:
            return state                        
    }

}

