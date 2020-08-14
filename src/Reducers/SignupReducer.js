import * as Actions from '../Actions/ActionTypes'
const initialState ={
     isLoading: false, 
     error: undefined,
      data: {} 
    }
const SignupReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case Actions.LOGIN_PENDING:
            return  {
                ...state,
                isLoading: true, 
            };
        case Actions.LOGIN_ERROR:
            return {
                ...state,
               isLoading: false,
                error: action.error
            }
        case Actions.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        default:
            return state;
    }
}
export default SignupReducer