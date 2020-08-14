import * as ActionTypes from './ActionTypes';
import * as ApiContant from '../Apis/ApiConstant'
import { connect } from 'react-redux';
import axios from 'axios'
import LoginScreen from '../Components/LoginScreen'//'../components/LoginScreen'

const mapStateToProps = (state) => ({
    isLoading: state.LoginReducer.isLoading,
    error: state.LoginReducer.error,
    data: state.LoginReducer.data,
}); 

const mapDispatchToProps = (dispatch) => ({
    callLoginMethod: (email,password) => dispatch(LoginMethod(email,password)),
    callSocailLoginMethod: (fullname,email,oauth_uid,contact,device_id,device_type,latitude,longitude,auth_type) => dispatch(socailLoginMethod(fullname,email,oauth_uid,contact,device_id,device_type,latitude,longitude,auth_type)),
})

export const socailLoginMethod = (fullname,email,oauth_uid,contact,device_id,device_type,latitude,longitude,auth_type) => {
    return dispatch => {
       
        dispatch(ActionPending())
        var formdata11 = new FormData();
        formdata11.append("fullname", fullname)
        formdata11.append("email", email)
        formdata11.append("oauth_uid", oauth_uid)
        formdata11.append("contact", contact)
        formdata11.append("device_id", device_id)
        formdata11.append("device_type", device_type)
        formdata11.append("latitude", latitude)
        formdata11.append("longitude", longitude)
        formdata11.append("auth_type", auth_type)
        console.log('SocailLogin Request ', formdata11)
        axios({ url: ApiContant.BASE_URL+ApiContant.SOCIAL_LOGIN_END_POINT,
            method: 'POST',
            data: formdata11,
            validateStatus: (status) => {
                return true; // I'm always returning true, you may want to do it depending on the status received
              },
          }).then((responseJson) => {
         console.log('sociallogin ',responseJson.data)
        //  dispatch(this.props.navigation.navigate("NavigationDrawer"));
          dispatch(ActionSuccess(responseJson.data))
          }).catch(error => {
            console.log(error)
            dispatch(ActionError(error))
        });
    }
}

export const LoginMethod = (email,password) => {
    return dispatch => {
        console.log('Login successuser_name ', email +" password "+password)
        dispatch(ActionPending())
        var formdata11 = new FormData();
        formdata11.append("email", email)
        formdata11.append("password", password)
       
        axios({ url: ApiContant.BASE_URL+ApiContant.LOGIN_END_POINT,
            method: 'POST',
            data: formdata11,
            validateStatus: (status) => {
                return true; // I'm always returning true, you may want to do it depending on the status received
              },
          }).then((responseJson) => {
         console.log(responseJson.data)
        //  dispatch(this.props.navigation.navigate("NavigationDrawer"));
          dispatch(ActionSuccess(responseJson.data))
          }).catch(error => {
            console.log(error)
            dispatch(ActionError(error))
        });
    }
}


export const ActionPending = () => ({
    type: ActionTypes.LOGIN_PENDING
})

export const ActionError = (error) => ({
    type: ActionTypes.LOGIN_ERROR,
    error: error
})

export const ActionSuccess = (data) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    data: data 
})




export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);