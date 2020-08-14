import React, { Component } from 'react'
import { View, Text, Platform, ActivityIndicator,KeyboardAvoidingView, TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
export default class DashboardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    componentDidMount() {

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
   
    render() {
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.mainContainer} >
            <SafeAreaView style={styles.mainContainer}>
                
                {this.props.isLoading &&
                    <ActivityIndicator
                        animating={this.props.isLoading}
                        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, }}//backgroundColor:'grey',zIndex:99,opacity:0.4
                        size="large"
                        color="#334088" />}

              

                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View>
                    <Image resizeMode={'contain'} style={{ height: 200, width: 200, alignSelf: 'center', marginTop: 40, marginBottom: 0 }} source={require('../imgs/Dashboard_text.png')} />
                    
                   
                   <Image resizeMode={'cover'} style={styles.imageView} source={require('../imgs/HundredDayButton.png')} />
                   <Image resizeMode={'cover'} style={styles.imageView} source={require('../imgs/SundayBasketButton.png')} />
                   <Image resizeMode={'cover'} style={styles.imageView} source={require('../imgs/Free_Button.png')} />
                   
                   

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
    imageView:{
         height: 100,width:250,marginTop: 0, marginBottom: 10 ,alignSelf:'center'
    },
    imageViewSecond:{
        height: 80,width:250,marginTop: 0, marginBottom: 10 ,alignSelf:'center'
   }
   
});