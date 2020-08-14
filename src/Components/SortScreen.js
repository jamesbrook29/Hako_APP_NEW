import React, { Component } from 'react'
import { View, Text, Platform, ActivityIndicator, KeyboardAvoidingView, BackHandler, Alert, TextInput, SafeAreaView, PermissionsAndroid, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import * as Colors from '../Apis/Colors'
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
export default class SortScreen extends Component {
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

                    <Text style={style.mainTitle}>Sort by</Text>


                    <View style={{ height: 120, borderColor: 'white', justifyContent: 'center', borderWidth: 1, borderRadius: 10, marginTop: 30, }}>
                        <View style={{ flexDirection: 'row', margin: 10 }}>
                            <Image resizeMode={'contain'} style={{ height: 50, width: 50, }} source={require('../imgs/calendar.png')} />
                            <Text style={{ fontSize: 25, marginLeft: 20, color: 'white' }}>Year</Text>
                        </View>
                        <Text style={{ fontSize: 16, marginLeft: 10, color: 'white' }}>Create a 30 sec website with our templates</Text>
                    </View>

                    <View style={{ height: 120, borderColor: 'white', justifyContent: 'center', borderWidth: 1, borderRadius: 10, marginTop: 10, }}>
                        <View style={{ flexDirection: 'row', margin: 10 }}>
                            <Image resizeMode={'contain'} style={{ height: 50, width: 50, }} source={require('../imgs/Az_icon.png')} />
                            <Text style={{ fontSize: 25, marginLeft: 20, color: 'white' }}>A-Z</Text>
                        </View>
                        <Text style={{ fontSize: 16, marginLeft: 10, color: 'white' }}>Create a 30 sec website with our templates</Text>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'space-between', position: 'absolute', bottom: 60, right: 0, left: 0 }}>
                        <View><TouchableOpacity onPress={this.cancelMethod}><Text style={{ fontSize: 20, color: 'white' }}>CANCEL</Text></TouchableOpacity></View>
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
        fontSize: 28, fontWeight: 'bold'
    },
    keyboardView: {
        flex: 1,
        flexGrow: 1,
        paddingVertical: 65,
        paddingHorizontal: 20,
    },
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 20
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
        height: 50, fontSize: 20, paddingLeft: 10, marginTop: 20,
        borderRadius: 10,
        color: 'black',
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: Colors.WHITE_COLOR,
    },

});