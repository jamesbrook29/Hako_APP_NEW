import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
// import { Rating, AirbnbRating } from 'react-native-ratings';

const ExhibitionsRow = (props) => {

    return (
        <View>
        <View style={styles.mainContainer}>
            <Image resizeMode={'contain'} style={{ height: 28, width: 28, alignSelf: 'center' }} source={require('../../imgs/star_grey.png')} />
            <Image resizeMode={'contain'} style={{ height: 80, width: 80, alignSelf: 'center', marginLeft: 10 }} source={require('../../imgs/list_items_new.png')} />
            <View style={{ justifyContent: 'center',  flexShrink: 1, marginLeft: 10, marginRight: 10 }}>
                <Text numberOfLines={1} style={{ color: 'black', flexShrink: 1, fontSize: 16, fontWeight: 'bold' }}>A Tribute to Birgit Skioid / Spinning, 1983</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginTop: 10 }}>
                    <Text numberOfLines={1} style={{ fontSize: 14, color: 'black' }}>Edition 1 of 10</Text>
                    {/* <Text style={{ fontSize: 14, color: 'black' }}>For Sale</Text> */}
                </View>

            </View>
        </View>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: .5, marginTop: 5 }} />
        </View>
    )
}
export default ExhibitionsRow

const styles = StyleSheet.create({
    mainContainer: {
   flexDirection: 'row', height: 100, marginHorizontal: 10 
   }
})