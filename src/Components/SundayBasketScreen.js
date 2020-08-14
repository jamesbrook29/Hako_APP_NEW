import React, { Component } from 'react'
import { View, Text, Platform, ActivityIndicator,KeyboardAvoidingView, TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
export default class SundayBasketScreen extends Component {
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
                   <Image resizeMode={'cover'} style={styles.imageView} source={require('../imgs/SundayBasketButton.png')} />
                  
                  <View style={styles.horizontalContainer}>
                      <View>
                   <Image resizeMode={'contain'} style={styles.imageViewRound} source={require('../imgs/SundayBasketSystem.png')} />
                  <Text style={styles.fontStyle}>THE COMPLEMENT{'\n'} SUNDAY BASKET SYSTEM</Text>
                   </View>

                   <View>
                   <Image resizeMode={'contain'} style={styles.imageViewRound} source={require('../imgs/Video.png')} />
                   <Text style={styles.fontStyle}>VIDEOS</Text>
                   </View>

                   </View>

                   <View style={styles.horizontalContainer}>
                      <View>
                   <Image resizeMode={'contain'} style={styles.imageViewRound} source={require('../imgs/Podcast.png')} />
                  <Text style={styles.fontStyle}>PODCAST</Text>
                   </View>

                   <View>
                   <Image resizeMode={'contain'} style={styles.imageViewRound} source={require('../imgs/Download.png')} />
                   <Text style={styles.fontStyle}>FEATURED DOWNLOADS</Text>
                   </View>

                   </View>

                   <View style={styles.horizontalContainer}>
                      <View>
                   <Image resizeMode={'contain'} style={styles.imageViewRound} source={require('../imgs/Supplies.png')} />
                  <Text style={styles.fontStyle}>SUPPLIES</Text>
                   </View>

                   <View>
                   <Image resizeMode={'contain'} style={styles.imageViewRound} source={require('../imgs/Video.png')} />
                   <Text style={styles.fontStyle}>VIDEOS</Text>
                   </View>

                   </View>
                   

                    </View>
                </ScrollView>
            </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,backgroundColor: 'white',
    },
    imageView:{
         height: 100,width:250,marginTop: 0, marginTop: 30 ,alignSelf:'center'
    },
    imageViewRound:{
        height: 100,width:100, marginTop: 30 ,alignSelf:'center',marginHorizontal:30
    },
    fontStyle:{
        fontSize:12,textAlign:'center',marginTop:10
    },
    horizontalContainer:{
        flexDirection:'row',justifyContent:'center'
    }
   
   
});