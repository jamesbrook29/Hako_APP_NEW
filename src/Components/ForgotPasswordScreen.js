import React, { Component } from 'react'
import { View, Text, Platform, ActivityIndicator,KeyboardAvoidingView, TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
export default class ForgotPasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: '',
        }
    }
    componentDidMount() {

    }
    forgotPasswordMethod = () => {
        const { inputEmail } = this.state;
        if (inputEmail === "") {
            alert("Please enter email.")
        } else {
            this.props.callFogotPassMethod(inputEmail)
        }

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.data != null) {
            if (nextProps.data != this.props.data) {
                if (nextProps.data.result == "1") {
                    console.log('nextPropsss if ', nextProps.data.data.id)
                    alert(nextProps.data.msg)
                    // AsyncStorage.setItem('user_id', nextProps.data.data.id);
                    // this.props.navigation.navigate("BottomTabScreen")
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
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.mainContainer}
          >
            <SafeAreaView style={styles.mainContainer}>
                
                {this.props.isLoading &&
                    <ActivityIndicator
                        animating={this.props.isLoading}
                        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, }}//backgroundColor:'grey',zIndex:99,opacity:0.4
                        size="large"
                        color="#334088" />}

              

                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View>
                    <TouchableOpacity onPress={this.backPress}>
                        <Image style={{ height: 20, width: 30, marginLeft: 20, marginTop:10}} source={require('../imgs/back.png')} />
                    </TouchableOpacity>
                    <TextInput
                                style={styles.textInput}
                                placeholder={'  EMAIL'}
                                placeholderTextColor="#a9a9a9"
                                onChangeText={(inputEmail) => this.setState({ inputEmail })}
                                value={this.state.inputEmail} />

                       

                        <TouchableOpacity onPress={this.forgotPasswordMethod}>
                                <View style={styles.loginButtonContainer}>
                                    <Text style={styles.loginBtnText}>SUBMIT</Text>
                                </View>
                            </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,backgroundColor: '#1c355d',
    },
    textInput: {
        fontSize: 16, height: 60, paddingLeft: 20, fontSize: 16, color: 'black', backgroundColor: 'white',
        borderColor: '#be206f', borderRadius: 10, borderWidth: 1, marginHorizontal: 30, marginTop: 60
    },
    loginButtonContainer: {
        width: 150, flexDirection: 'row', backgroundColor: '#be206f', height: 60,
        justifyContent: 'center', borderRadius: 10, marginHorizontal: 10, marginTop: 30, shadowColor: '#000', alignSelf: 'center'
   },
    loginBtnText: {
        fontSize: 16, color: 'white', alignSelf: 'center',
    }
});