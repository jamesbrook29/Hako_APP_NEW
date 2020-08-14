import React, { Component } from 'react'
import {
    View, Text, Platform, ActivityIndicator, KeyboardAvoidingView, TextInput,
    SafeAreaView, TouchableOpacity, FlatList, StyleSheet, Image, ImageBackground
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderRow from './Presentational/HeaderRow'
import ExhibitionsRow from './Presentational/ExhibitionsRow'

export default class ExhibitionsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: '',
            noOfRow: 1,
            GridViewItems: [
                { key: 'One' },
                { key: 'Two' },
                { key: 'Three' },
                { key: 'Four' },
                { key: 'Five' },
                { key: 'Six' },
                { key: 'Seven' },
                { key: 'Eight' },
                { key: 'Nine' },
                { key: 'Ten' },
                { key: 'Eleven' },
                { key: 'Twelve' },
                { key: 'Thirteen' },
                { key: 'Fourteen' },
                { key: 'Fifteen' },
                { key: 'Sixteen' },
                { key: 'Seventeen' },
                { key: 'Eighteen' },
                { key: 'Nineteen' },
                { key: 'Twenty' }
            ]
        }
    }
    componentDidMount() {

    }
    forgotPasswordMethod = () => {

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
    openDrawer = () => {
        this.props.navigation.openDrawer();
    }
    searchMethod = () => {
        this.props.navigation.navigate("SearchScreen")
    }
    sortMethod = () => {
        this.props.navigation.navigate("SortScreen")
    }
    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.mainContainer}>
                <SafeAreaView style={styles.mainContainer}>
                    <HeaderRow openDrawer={this.openDrawer.bind(this)} searchMethod={this.searchMethod.bind(this)} />
                    <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between', marginHorizontal: 30, marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontSize: 14, color: 'black' }}>All</Text>
                            <Text style={{ fontSize: 14, color: 'grey', marginLeft: 10 }}>Starred</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={this.sortMethod}><Image resizeMode={'contain'} style={{ height: 28, width: 28, }} source={require('../imgs/sort_icon_blue.png')} /></TouchableOpacity>
                            <Image resizeMode={'contain'} style={{ height: 28, width: 28, marginHorizontal: 20 }} source={require('../imgs/share_blue.png')} />
                        </View>
                    </View>

                    {this.props.isLoading &&
                        <ActivityIndicator
                            animating={this.props.isLoading}
                            style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, }}//backgroundColor:'grey',zIndex:99,opacity:0.4
                            size="large"
                            color="#334088" />}



                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View>
                            <Text style={{ fontSize: 18, marginHorizontal: 30, color: 'black' }}>Active</Text>
                            <FlatList
                                keyExtractor={(item) => item.id}
                                numColumns={1}
                                data={this.state.GridViewItems}
                                renderItem={({ item }) =>
                                    <ExhibitionsRow />
                                } />


                        </View>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, backgroundColor: 'white',
    },

});