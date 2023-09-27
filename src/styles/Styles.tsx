import { StyleSheet } from "react-native";
import Colors from "../Theme/ScholarColors";
import { Fonts } from "../Theme/Fonts";

const styles = StyleSheet.create({

  container: {
    padding: 10,
    backgroundColor:Colors.background,
    flex: 1,
    
  },

  iconHeaderText: {
    fontFamily: "JustAnotherHand-Regular",
    textAlignVertical: "center",
    fontSize: 80,
    color: Colors.secondary,
    paddingLeft: 20
  },

  firstName: {
    color: 'black',
    fontSize: 38,
    fontWeight: '700',
    padding: 10,
  },

  lastName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
  },

  starIcon: {
    width: 60,
    height: 60,
    margin: 10,
    marginLeft: 35,
  },

  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%'
  },

  underLine: {
    width: '90%',
    height: .7,
    backgroundColor: 'black',

  },

  profilePicBox: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },

  dividerContainer: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },

  profileImage: {
    width: 130,
    height: 130,
    padding: 10,
    backgroundColor: '#FFFF',
    borderRadius: 50,
    margin: 10,
  },

  formField: {
    width: 300,
    borderWidth: .8,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderCurve: 'circular',
  },

  btnText: {
    color: '#FFFF',
    fontSize: 18
  },

  friendBoxStyle: {
    padding: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 20,
    margin: 3
  },

  friendBoxTextStyle: {
    color: '#FFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  friendBoxContainer: {
    margin: 10,
    padding: 3,
  },
  friendBoxes: {
    flexDirection: 'row',
  }
  ,
  friendBoxButton: {
    padding: 5,
    backgroundColor: '#e1e8ff',
    margin: 5,
    borderRadius: 10,
    height: 30,
    width: 100,
  },

  heading: {
    margin: 10,
    justifyContent: 'center',
    padding: 5,
  },

  friendTextStyle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 2,
    marginLeft: 5,
    padding: 4,
  },

  // For Tab Navigator
  tabIcon: {
    width: 30,
    height: 30,
    padding: 5,
  },



  /**
   * For The Home Screen 
   */

  headBox: {
    margin: 2,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center'
  }
  ,
  logoContainer: {
    padding: 5,
  },
  titleContainer: {
    margin: 1,
    padding: 5,
  }
  ,
  
  post: {
   justifyContent:'center',
   position:'relative',
    width: '100%',
    overflow: 'hidden',
    backgroundColor:Colors.background,
    padding:6,
    marginTop:6,
  },
  
  postHolder: {
    backgroundColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: '100%',
    resizeMode:'cover',
    
  },
  
  postAdmin: {
    padding: 1,
    marginLeft: 1,
    flexDirection:'row',
    alignItems:'center',
  },
  avatarSection:{
   borderWidth:.5,
   borderRadius:50,
   padding:5,
   margin:1,
   borderColor:Colors.primary,
  },
  adminSection:{
   marginLeft:5,
   padding:5,
  },
  postAdminName: {
    fontWeight:'bold',
    fontSize: 16,
  },
  postDescription: {
    padding: 2,
  },
  postDescText: {
    color: Colors.text,
    fontSize: 15,
    fontFamily:Fonts.regular,
  }
,
  postBottom:{
  backgroundColor:'transparent',
   flexDirection:'row',
   justifyContent:'space-between',
   width:'auto',
   padding:2,
   paddingLeft:10,
   paddingRight:10,
   borderBottomRightRadius:5,
   borderBottomLeftRadius:5,

  },

  actionBtn:{
    padding:2,
  }


});

export default styles;