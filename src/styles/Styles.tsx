import { StyleSheet, Text } from "react-native";
import React from "react";
import {t} from 'react-native-tailwindcss'

export const styles = StyleSheet.create({
  
  container: {
    padding:10,
    backgroundColor:'#e1e8ff',
    backgroundColor:'#FFFFFF',
    flex:1,
  },

  firstName: {
    color:'black',
    fontSize:38,
    fontWeight:'700',
    padding:10,
  },

  lastName: {
    color:'black',
    fontSize:20,
    fontWeight:'600',
    marginTop:15,
  },

  starIcon: {
    width:60,
    height:60,
    margin:10,
    marginLeft:35,
  },

  boxContainer: {
    flexDirection:'row',
    alignItems:'center',
    width:'90%'
  },

  underLine: {
    width:'90%',
    height:.7,
    backgroundColor:'black',

  },

  profilePicBox: {
    flexDirection:'row',
    margin:5,
    alignItems:'center',
  },

  profileImage: {
    width:130,
    height:130,
    padding:10,
    backgroundColor:'#FFFF',
    borderRadius:50,
    margin:10,
  },

  formContainer: {
    margin:10,
    padding:10,
    alignItems:'center',
    // backgroundColor:'#ecf0f1',
    width:'90%',
    height:'auto',
    borderRadius:10,
    paddingBottom:20,
  },

  inputFieldsContainer: {
    margin:5,
    padding:5,
  },

  formField: {
    width:300,
    borderWidth:.8,
    margin:10,
    padding:10,
    borderRadius:10,
    borderCurve:'circular',
  },

  submitBtnContainer: {
    margin:5,
  },

  submitBtn: {
    backgroundColor:'brown',
    padding:15,
    width:300,
    alignItems:'center',
    borderRadius:10,
    margin:10,
  },

  btnText: {
    color:'#FFFF',
    fontSize:18,
  },

  friendBoxStyle: {
    padding:10,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    borderRadius:20,
    margin:3
  },

  friendBoxTextStyle: {
    color:'#FFFF',
    fontSize:20,
    fontWeight:'bold',
  },

  friendBoxContainer: {
    margin:10,
    padding:3,
  },
  friendBoxes:{
    flexDirection:'row',
  }
,
  friendBoxButton: {
    padding:5,
    backgroundColor:'#e1e8ff',
    margin:5,
    borderRadius:10,
    height:30,
    width:100,
  },

  heading: {
   margin:10,
   justifyContent:'center',
   padding:5,
  },

  friendTextStyle: {
    color:'black',
    fontSize:22,
    fontWeight:'bold',
    margin:2,
    marginLeft:5,
    padding:4,
  },

  // For Tab Navigator
  tabIcon: {
    width:30,
    height:30,
    padding:5,
  },
  


/**
 * For The Home Screen 
 */
  
  headBox:{
    margin:2,
    padding:5,
    flexDirection:'row',
    alignItems:'center'
  }
  ,
  logoContainer:{
   padding:5,
  },
  titleContainer:{
    margin:1,
    padding:5,
  }
  ,
  screenTitle:{
    fontSize:38,
    fontWeight:'bold',
    fontFamily:'times new roman',
  },
  bodyContainer:{
   margin:5,
  },
  
  feedContainer:{
    margin:5,
    padding:5,
  }
  ,
  post:{
    flexDirection:'row',
    margin:5,
    marginTop:7,
    alignItems:'center',
    justifyContent:'space-between',
    width:'auto',
    padding:5,
    borderRadius:5,
    overflow:'hidden',
    borderWidth:.5,
    borderColor:'#0096c7',
    
  },
   postLeft:{
  justifyContent:'center',
   }
  ,
  postHolder:{
    backgroundColor:'gray',
  borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    height:70,
    width:70,
  },
  postRight:
  {
    padding:5,
    marginLeft:5,
  }
,
postAdmin:{
 padding:1,
 marginLeft:1,
},
postAdminName:{
 fontWeight:'bold',
 fontSize:16,
},
  postDescription:{
    padding:2,
    width:'95%',
  },
  postDescText:{
    color:'gray',
    fontSize:15,
  }




});