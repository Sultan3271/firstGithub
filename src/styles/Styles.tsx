import { StyleSheet, Text } from "react-native";
import React from "react";

export const styles= StyleSheet.create({
    container:{
        padding:10,
        alignItems:'center',
        backgroundColor:'brown',
        flex:1,
    },
    firstName:{
        color:'#FFFF',
        fontSize:38,
        fontWeight:'700',
        padding:10,
        
    },
  lastName:{
    color:'#FFFF',
    fontSize:20,
    fontWeight:'600',
    marginTop:15,
  },
  starIcon:{
    width:60,
    height:60,
    margin:10,
    marginLeft:35,
  },
  boxContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:'90%'
  },
  underLine:{
    width:'90%',
    height:.7,
    backgroundColor:'#FFFF',

  },
  profilePicBox:{
    flexDirection:'row',
    margin:5,
    alignItems:'center',
  },
  profileImage:{
    width:130,
    height:130,
    padding:10,
    backgroundColor:'#FFFF',
    borderRadius:50,
    margin:10,
  },
  formContainer:{
    margin:10,
    padding:10,
    alignItems:'center',
    backgroundColor:'#adb5bd',
    width:'90%',
    height:'65%',
    borderRadius:10,
  },
  inputFieldsContainer:{
    margin:5,
    padding:5,

  },
  formField:{
    width:300,
    borderWidth:.8,
    margin:10,
   padding:10,
   borderRadius:10,
   borderCurve:'circular',


  },
  submitBtnContainer:{
    margin:5,

  },
  submitBtn:{
    backgroundColor:'brown',
    padding:15,
    width:300,
    alignItems:'center',
    borderRadius:10,
    margin:10,
  },
  btnText:{
    color:'#FFFF',
    fontSize:18,

  }
})