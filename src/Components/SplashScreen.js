import React, { Component } from 'react'
import { View, Text, TextInput, SafeAreaView, StyleSheet, Image, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions,CommonActions } from '@react-navigation/native';
export default class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
           this.props.navigation.navigate("LoginAction")
            // AsyncStorage.getItem('user_id').then((value) => {
            //     if (value !== null) {
            //         console.log('user_id',value)
            //         this.props.navigation.navigate("BottomTabScreen")
            //     }else{
            //         this.props.navigation.dispatch(
            //             CommonActions.reset({
            //               index: 0,
            //               routes: [
            //                 { name: 'IntroScreen' },
            //               ],
            //             })
            //           );
            //     } 
            // });
        }, 5000);
    }

    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <ImageBackground source={require('../imgs/splash_bg.png')} style={styles.image}>

                    {/* <Image style={{ height: 220, width: 220 }} source={require('../imgs/camera_splash.png')} />

                    <Text style={{ fontSize: 30, marginTop: 24, fontWeight: 'bold', color: 'white' }}>MYLIFE</Text>
                    <Text style={{ fontSize: 18, marginTop: 2, color: '#8cc8e9', fontWeight: 'bold' }}>Digital Legacy App</Text> */}
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, flexDirection: 'column'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },
});