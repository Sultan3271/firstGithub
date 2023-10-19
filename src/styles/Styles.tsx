import { StyleSheet } from "react-native";
import Colors from "../Theme/ScholarColors";
import { Fonts } from "../Theme/Fonts";

const styles = StyleSheet.create({

  container: {
    
    backgroundColor: Colors.background,
    flex: 1,
  },

  iconHeaderText: {
    fontFamily: "JustAnotherHand-Regular",
    textAlignVertical: "center",
    fontSize: 80,
    color: Colors.primary,
    paddingLeft: 20
  },
  underLine: {
    width: '90%',
    height: .7,
    backgroundColor: 'black',

  },

  profilePicBox: {
    flexDirection: 'row',
    margin: 5,
    alignItems:'center'
  },

  dividerContainer: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
//  profile page style
profileImage: {
  width: 120,
  height: 120,
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
headingStyle:{
  fontFamily: Fonts.bold,
  fontSize: 20,
  color: 'black',
  fontWeight:'bold' 
},
contentStyle:{
  fontFamily: Fonts.regular,
  fontSize: 15,
  color: 'gray' 
},
btnText: {
  color: '#FFFF',
  fontSize: 18
},

friendBoxStyle: {
  padding: 5,
  backgroundColor: Colors.primary,
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  borderRadius: 20,
  margin: 2
},

friendBoxTextStyle: {
  color: '#FFFF',
  fontSize: 20,
  fontWeight: 'bold',
},

friendBoxContainer: {
  margin: 5,
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
  fontSize: 20,
  fontWeight: 'bold',
  fontFamily:Fonts.regular,
},
userNameStyle:{
  fontFamily: Fonts.regular,
   fontSize: 22,
    color: 'black'
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
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: Colors.background,
    padding: 6,
    marginTop: 6,
  },

  postHolder: {
    backgroundColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: '100%',
    resizeMode: 'cover',

  },

  postAdmin: {
    padding: 1,
    marginLeft: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarSection: {
    borderWidth: .5,
    borderRadius: 50,
    padding: 5,
    margin: 1,
    borderColor: Colors.primary,
  },
  adminSection: {
    marginLeft: 5,
    padding: 5,
  },
  postAdminName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postDescription: {
    padding: 2,
  },
  postDescText: {
    color: Colors.text,
    fontSize: 15,
    fontFamily: Fonts.regular,
  }
  ,
  postBottom: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 'auto',
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,

  },

  actionBtn: {
    padding: 2,
  }


});

export default styles;