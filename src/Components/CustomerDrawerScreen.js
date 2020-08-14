import React, { Component } from 'react'
import { View, Text, Platform, ActivityIndicator, KeyboardAvoidingView, TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
export default class CustomerDrawerScreen extends Component {
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
        this.props.navigation.closeDrawer();
        }
    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.mainContainer}>
                    
                <SafeAreaView style={styles.mainContainer}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ marginHorizontal: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <TouchableOpacity onPress={this.backPress}>
                                    <Image resizeMode={'contain'} style={{ height: 20, width: 30, }} source={require('../imgs/cancel.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.logoutMethod}>
                                    <Text style={{ fontSize: 20, color: 'white' }}>Log Out</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity><Text style={{ fontSize: 20, color: 'white', marginTop: 40 }}>Help</Text></TouchableOpacity>
                            <View style={{ borderBottomColor: 'white', borderBottomWidth: .5, marginTop: 20 }} />

                            <Text style={styles.textStyle}>Account</Text>
                            <TouchableOpacity><Text style={styles.textStyle}> - Change Password</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.textStyle}> - Change Email</Text></TouchableOpacity>

                            <View style={{ borderBottomColor: 'white', borderBottomWidth: .5, marginTop: 30 }} />
                            <TouchableOpacity><Text style={styles.textStyle}>Contact</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.textStyle}>Recommend HAKO</Text></TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, backgroundColor: '#36383b',
    },
    textStyle: {
        fontSize: 20, color: 'white', marginTop: 30
    }
});