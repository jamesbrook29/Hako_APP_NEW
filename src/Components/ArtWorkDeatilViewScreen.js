import React, { Component } from 'react'
import {
    View, Text, Platform, ActivityIndicator, KeyboardAvoidingView, TextInput, SafeAreaView,
    TouchableOpacity, StyleSheet, Image, ImageBackground, FlatList
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import * as Colors from '../Apis/Colors'
import ExhibitionsRowNew from '../Components/Presentational/ExhibitionsRowNew'
export default class ArtWorkDeatilViewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: '',
            GridViewItems: [
                { key: 'One' },
                { key: 'Two' },
                { key: 'Three' },
                { key: 'Four' },
                { key: 'Five' },
                { key: 'Six' },
                { key: 'Seven' },
                { key: 'Eight' },

            ]
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
                        <View style={{ marginHorizontal: 20, marginBottom: 30 }}>

                            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between', marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 18, color: 'black' }}>Baby doll, 2009</Text>
                                </View>

                                <View style={{ flexDirection: 'row', }}>
                                    <TouchableOpacity onPress={this.sortMethod}>
                                        <Image resizeMode={'contain'} style={{ height: 28, width: 28, }} source={require('../imgs/star_grey.png')} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={this.listViewChange} style={{ justifyContent: 'center', marginHorizontal: 20 }}>
                                        <Text style={{ fontSize: 16, color: '#47c1f3', textAlign: 'center', alignSelf: 'center' }}>Edit</Text>
                                    </TouchableOpacity>

                                    <Image resizeMode={'contain'} style={{ height: 25, width: 25, }} source={require('../imgs/share_blue.png')} />
                                </View>
                            </View>

                            <Image resizeMode={'cover'} style={{ height: 300, width: '100%', alignSelf: 'center', }} source={require('../imgs/list_items.png')} />

                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10, }}>
                                <Text style={{ fontSize: 16, color: '#36383b', paddingVertical: 10, paddingHorizontal: 5 }}>JB004</Text>
                                <View style={{ backgroundColor: Colors.BLUE_BG_COLOR, borderRadius: 7 }}>
                                    <Text style={{ fontSize: 16, color: 'white', padding: 10, }}>For Sale</Text>
                                </View>
                            </View>

                            <Text style={styles.textStyle}>Artist Name</Text>
                            <Text style={styles.textStyle}>Edition 8 of 11</Text>
                            <Text style={styles.textStyle}>Mixed Media</Text>
                            <Text style={styles.textStyle}>Plastic, cloth, human hair,leather & glue</Text>
                            <Text style={styles.textStyle}>65.35 * 30 * 77 cm</Text>

                            <View style={{ borderBottomColor: 'grey', borderBottomWidth: .5, marginTop: 10 }} />

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={styles.textStyle}>Location:</Text>
                                <Text style={styles.textStyle}>Liliane Lijn Studio</Text>
                            </View>

                            <Text style={styles.textStyle}>$23,000</Text>
                            <Text style={styles.textStyle}>Hand made doll, made of natural materials</Text>

                            <Text style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ fontSize: 16, color: '#36383b', padding: 5, fontWeight: 'bold' }}>Artwork Notes:  </Text>
                                <Text style={styles.textStyle}>Made ad a limited edition for the show in the Bethnal Green Museum of childhood.This show travelled around the UK during 2008 and was installed permanently at the childs Museum in Germany.</Text>
                            </Text>
                            <View style={{ borderBottomColor: 'grey', borderBottomWidth: .5, marginTop: 10 }} />

                            <Text style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ fontSize: 16, color: '#36383b', padding: 5, fontWeight: 'bold' }}>Authentication:  </Text>
                                <Text style={styles.textStyle}>Signed.</Text>
                            </Text>
                            <Text style={styles.textStyle}>Signed on pinth & embroidered on the dolls dress.</Text>
                            <View style={{ borderBottomColor: 'grey', borderBottomWidth: .5, marginTop: 10 }} />

                            <Text style={{ fontSize: 18, color: '#36383b', padding: 5, fontWeight: 'bold', marginTop: 10 }}>Exhibited </Text>
                            <FlatList
                                keyExtractor={(item) => item.id}
                                // key={(this.state.isGridView) ? 1 : 0}
                                numColumns={1}
                                data={this.state.GridViewItems}
                                renderItem={({ item }) =>
                                    <ExhibitionsRowNew />
                                } />
                        </View>
                    </ScrollView>

                    <TouchableOpacity onPress={() => this.props.navigation.pop()} style={styles.bottomButton}>
                        <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>CLOSE</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, backgroundColor: 'white',
    },
    textStyle: {
        fontSize: 16, color: '#36383b', padding: 5,
    },
    bottomButton: {
        backgroundColor: Colors.BLUE_BG_COLOR, height: 50, justifyContent: 'center', position: 'absolute', bottom: 20, left: 0, right: 0
    }
});