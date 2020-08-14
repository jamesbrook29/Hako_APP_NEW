import * as ActionTypes from './ActionTypes';
import * as ApiContant from '../Apis/ApiConstant'
import { connect } from 'react-redux';
import axios from 'axios'
import ForgotPasswordScreen from '../Components/ForgotPasswordScreen'//'../components/LoginScreen'

const mapStateToProps = (state) => ({
    isLoading: state.ForgotPasswordReducer.isLoading,
    error: state.ForgotPasswordReducer.error,
    data: state.ForgotPasswordReducer.data,
}); 

const mapDispatchToProps = (dispatch) => ({
    callFogotPassMethod: (email) => dispatch(ForgotPassMethod(email)),
})

export const ForgotPassMethod = (email) => {
    return dispatch => {
        console.log('Forgot Pass Email ', email)
        dispatch(ActionPending())
        var formdata11 = new FormData();
        formdata11.append("email", email)
       
        axios({ url: ApiContant.BASE_URL+ApiContant.FORGOT_PASSWORD_END_POINT,
            method: 'POST',
            data: formdata11,
            validateStatus: (status) => {
                return true; // I'm always returning true, you may want to do it depending on the status received
              },
          }).then((responseJson) => {
         console.log(responseJson.data)
          dispatch(ActionSuccess(responseJson.data))
          }).catch(error => {
            console.log(error)
            dispatch(ActionError(error))
        });
    }
}


export const ActionPending = () => ({
    type: ActionTypes.FORGOT_PASSWORD_PENDING
})

export const ActionError = (error) => ({
    type: ActionTypes.FORGOT_PASSWORD_ERROR,
    error: error
})

export const ActionSuccess = (data) => ({
    type: ActionTypes.FORGOT_PASSWORD_SUCCESS,
    data: data 
})




export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);