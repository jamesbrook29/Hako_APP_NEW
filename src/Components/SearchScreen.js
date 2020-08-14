import React, { Component } from 'react'
import { View, Text, Platform, ActivityIndicator, KeyboardAvoidingView, BackHandler, Alert, TextInput, SafeAreaView, PermissionsAndroid, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import * as Colors from '../Apis/Colors'
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: '',
        }
    }
   
    cancelMethod = () => {
        this.props.navigation.pop()
    }
    searchMethod = () => {
        console.log('search')
    }

    render() {
        return (
            <SafeAreaView style={style.view}>
                <KeyboardAvoidingView style={style.keyboardView} behavior="padding" enabled>

                    <Text style={style.mainTitle}>Search for...</Text>
                  
                        <TextInput
                           
                            onChangeText={email => this.setState({ email })}
                            style={style.input}
                            placeholder="Search"
                            placeholderTextColor="grey"
                            value={this.state.email}
                            returnKeyType="done"
                            onSubmitEditing={this._signInHandler} />
                       
                        
                 <View style={{flexDirection:'row',marginHorizontal:30,justifyContent:'space-between',position:'absolute',bottom:30,right:0,left:0}}>
                    <View><TouchableOpacity onPress={this.cancelMethod}><Text style={{fontSize:20,color:'white'}}>CANCEL</Text></TouchableOpacity></View>
                    <View><TouchableOpacity onPress={this.searchMethod}><Text style={{fontSize:20,color:'white'}}>SEARCH</Text></TouchableOpacity></View>
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
    mainTitle: {
        color: 'white',
        marginTop: 16,
        fontSize: 28,fontWeight:'bold'
    },
    keyboardView: {
        flex: 1,
        flexGrow: 1,
        paddingVertical: 65,
        paddingHorizontal: 40,
    },
    container: {
        backgroundColor:'white',
        alignItems: 'center',
        marginTop: 20
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,fontSize:20,paddingLeft:10,marginTop:20,
        borderRadius: 10,
        color: 'black',
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: Colors.WHITE_COLOR,
    },
   
});