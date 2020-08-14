import * as Actions from '../Actions/ActionTypes'
const initialState ={
     isLoading: false, 
     error: undefined,
      data: {} 
    }
const ForgotPasswordReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case Actions.FORGOT_PASSWORD_PENDING:
            return  {
                ...state,
                isLoading: true, 
            };
        case Actions.FORGOT_PASSWORD_ERROR:
            return {
                ...state,
               isLoading: false,
                error: action.error
            }
        case Actions.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        default:
            return state;
    }
}
export default ForgotPasswordReducer