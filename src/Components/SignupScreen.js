import React, { Component } from 'react'
import { View, Text, Platform, ActivityIndicator, KeyboardAvoidingView, BackHandler, Alert, TextInput, SafeAreaView, PermissionsAndroid, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import * as Colors from '../Apis/Colors'
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
export default class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: '',
            inputPassword: '',
            device_type: ''
        }
    }
    componentDidMount = () => {
        if (Platform.OS === 'ios') {
            this.setState({ device_type: 'ios' })
        } else {
            this.setState({ device_type: 'Android' })
        }
    }


    loginMethod = () => {
        this.props.navigation.navigate("BottomTabScreen")
        // const { inputEmail, inputPassword } = this.state;
        // if (inputEmail === "") {
        //     alert("Please enter email.")
        // } else if (inputPassword === "") {
        //     alert("Please enter password.")
        // } else {
        //     this.props.callLoginMethod(inputEmail, inputPassword)
        // }
    }



    signUpMethod = () => {
        this.props.navigation.navigate("LoginAction")
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.data != null) {
            if (nextProps.data != this.props.data) {
                if (nextProps.data.result == "1") {
                    console.log('nextPropsss if ', nextProps.data.data.id)
                    // AsyncStorage.setItem('user_id', nextProps.data.data.id);
                    // AsyncStorage.setItem('profile', nextProps.data.data.profile);
                    // AsyncStorage.setItem('fullname', nextProps.data.data.fullname);

                    // this.props.navigation.dispatch(
                    //     CommonActions.reset({
                    //       index: 0,
                    //       routes: [
                    //         { name: 'BottomTabScreen' },
                    //       ],
                    //     })
                    //   );

                } else if (nextProps.data.result == "0") {
                    console.log('nextPropsss else ', nextProps.data.msg)
                    alert(nextProps.data.msg)
                }
            }
        }
    }
    backPress = () => {
        this.props.navigation.pop()
    }

    render() {
        return (
            <SafeAreaView style={style.view}>
                <KeyboardAvoidingView style={style.keyboardView} behavior="padding" enabled>

                    <Text style={style.mainTitle}>H A K O . Studio</Text>
                    <Text style={style.title}>A Digital Archive for All Artists</Text>
                    <Text style={style.subtitle}>Organise. Develop. Share.</Text>
                    <Text style={style.signin}>Create an account</Text>

                    <View style={style.container}>
                        <TextInput
                            keyboardType="email-address"
                            onChangeText={email => this.setState({ email })}
                            style={style.input}
                            placeholder="Email"
                            placeholderTextColor="#fff"
                            value={this.state.email}
                            returnKeyType="done"
                            onSubmitEditing={this._signInHandler}
                        />
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={password => this.setState({ password })}
                            style={style.input}
                            placeholder="Password"
                            placeholderTextColor="#fff"
                            vlaue={this.state.password}
                            returnKeyType="done"
                            onSubmitEditing={this._signInHandler}
                        />
                         <TextInput
                            secureTextEntry={true}
                            onChangeText={password => this.setState({ password })}
                            style={style.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="#fff"
                            vlaue={this.state.password}
                            returnKeyType="done"
                            onSubmitEditing={this._signInHandler}
                        />
                        <View style={style.button}>

                            <TouchableOpacity onPress={this.signUpMethod}>
                                <Text style={style.buttonText}>JOIN</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
    view: {
        backgroundColor: Colors.BLUE_BG_COLOR,
        flexGrow: 1
    },
    signin: {
        //  fontFamily: 'TTNorms-Medium',
        color: Colors.WHITE_COLOR,
        marginTop: 60,
        fontSize: 16
    },
    button: {
        width: '100%',
        alignItems: 'flex-end'
    },
    buttonText: {
        color: Colors.WHITE_COLOR,
        //  fontFamily: 'TTNorms-Regular',
        marginTop:20,
        textTransform: 'uppercase',
        fontSize: 18,
        justifyContent: 'flex-end'
    },
    mainTitle: {
        color: '#2b2e34',
        marginTop: 16,
        fontSize: 28
    },
    title: {
        // fontFamily: 'TTNorms-Light',
        color: '#2b2e34',
        marginTop: 16,
        fontSize: 21
    },
    subtitle: {
        //    fontFamily: 'TTNorms-Regular',
        color: Colors.WHITE_COLOR,
        marginTop: 6,
        fontSize: 21
    },
    keyboardView: {
        flex: 1,
        flexGrow: 1,
        paddingVertical: 65,
        paddingHorizontal: 40,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    input: {
        backgroundColor: 'transparent',
        width: '100%',
        height: 40,
        borderRadius: 0,
        color: Colors.WHITE_COLOR,
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: Colors.WHITE_COLOR,
    },
    spinnerTextStyle: {
        textAlign: 'center'
    }
});