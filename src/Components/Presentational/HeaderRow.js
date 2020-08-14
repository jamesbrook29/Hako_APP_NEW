import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
// import { Rating, AirbnbRating } from 'react-native-ratings';

const HeaderRow = (props) => {
    
    return (
        <View style={styles.mainContainer}>
                       <TouchableOpacity onPress={props.openDrawer}><Image resizeMode={'contain'} style={{height:28,width:28}} source={require('../../imgs/navigation_icon.png')}/></TouchableOpacity>
                       <TouchableOpacity onPress={props.searchMethod}><Image resizeMode={'contain'} style={{height:25,width:25}} source={require('../../imgs/search_icon.png')}/></TouchableOpacity>
                   </View>
    )
}
export default HeaderRow

const styles = StyleSheet.create({
   mainContainer:{
    flexDirection:'row',justifyContent:'space-between',marginHorizontal:30,marginTop:10
   }
})