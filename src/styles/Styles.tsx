import { StyleSheet, Text } from "react-native";
import React from "react";
import {t} from 'react-native-tailwindcss'
export const styles= StyleSheet.create({
    container:{
        padding:10,
        alignItems:'center',
        backgroundColor:'#e1e8ff',
        flex:1,
    },
    firstName:{
        color:'black',
        fontSize:38,
        fontWeight:'700',
        padding:10,
        
    },
  lastName:{
    color:'black',
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
    backgroundColor:'black',

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
    height:'auto',
    borderRadius:10,
    paddingBottom:20,
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

  },
  friendBoxStyle:{
    padding:10,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    borderRadius:20,
    margin:3
  },
  friendBoxTextStyle:{
    color:'#FFFF',
    fontSize:20,
    fontWeight:'bold',
  },
  friendBoxContainer:{
    flexDirection:'row',
    flexWrap:"wrap",
    margin:10,
  },
  friendBoxButton:{
    padding:5,
    backgroundColor:'#e1e8ff',
    margin:5,
    borderRadius:10,
    height:30,
    width:100,
  },

  heading:{
   margin:10,
   justifyContent:'center',
   padding:5,
  },
  friendTextStyle:{
    color:'black',
    fontSize:25,
  },


  infoContainer:{
     margin:10,
     marginTop:15,
  },
  infoBox:{
    
    flexDirection:'row',
    alignItems:'center',
  },
  infoHeadBox:{
    alignItems:'center',

  },
  headingField:{
    fontSize:20,
    fontFamily:'arial',
    fontWeight:'bold',
    margin:1,
    padding:5,
  },
  textField:{
    padding:2,
    margin:1,
  }
  ,
  nameText:{
    fontSize:16,
    fontFamily:'arial',


  friendTextStyle:{
    color:'black',
    fontSize:25,

  }

})