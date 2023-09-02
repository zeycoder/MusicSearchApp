import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10,
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
        marginRight:10,
    },
    innerContainer:{
        flex:1,
        // backgroundColor:'orange',
        justifyContent:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    info_container:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    artist:{
        fontWeight:'bold',
        marginRight:5,
    },
    year:{
        color:'gray',
        fontSize:12,
    },
    artistAndYear:{
        flexDirection:'row',
    },
    stock:{
        borderWidth:1,
        borderColor:'red',
        marginRight:10,
        textAlign:'right',
        borderRadius:5,
    },
    stockText:{
        color:'red',
        textAlign: 'right',
        padding:3,
    }
})
export default styles;