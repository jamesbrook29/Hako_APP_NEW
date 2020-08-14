import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity,ImageBackground } from 'react-native'
// import { Rating, AirbnbRating } from 'react-native-ratings';

const ArtWorkGridViewRow = (props) => {

    return (
        <TouchableOpacity style={styles.GridViewBlockStyle} onPress={props.rowClick}><View>
            <ImageBackground style={{height:130}} source={require('../../imgs/list_items.png')}>
    
         <Image resizeMode={'contain'} style={{height:25,width:25,margin:10}} source={require('../../imgs/star_blue.png')}/>
         </ImageBackground>
          <Text style={styles.GridViewInsideTextItemStyle} >Title for image </Text>
         </View></TouchableOpacity>
    )
}
export default ArtWorkGridViewRow

const styles = StyleSheet.create({
    GridViewBlockStyle: {
        flex:1, height: 200, margin: 5,
    },
      GridViewInsideTextItemStyle: {
         color: 'black',
         padding: 10,
         fontSize: 18,
         justifyContent: 'center',
         
       },
})