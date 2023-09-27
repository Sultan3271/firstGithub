import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    padding: 10,
    // backgroundColor: '#e1e8ff',
    backgroundColor:'#FFFFFF',
    flex: 1,
  },

  iconHeaderText: {
    fontFamily: "JustAnotherHand-Regular",
    textAlignVertical: "center",
    fontSize: 80,
    color: "#006CA2",
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
  screenTitle: {
    fontSize: 38,
    fontWeight: 'bold',
    fontFamily: 'times new roman',
  },
  bodyContainer: {
    margin: 5,
  },

  feedContainer: {
    margin: 5,
    padding: 5,
  }
  ,
  post: {
    flexDirection: 'row',
    margin: 5,
    marginTop: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'auto',
    padding: 5,
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: .5,
    borderColor: '#0096c7',

  },
  postLeft: {
    justifyContent: 'center',
  }
  ,
  postHolder: {
    backgroundColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
  },
  postRight:
  {
    padding: 5,
    marginLeft: 5,
  }
  ,
  postAdmin: {
    padding: 1,
    marginLeft: 1,
  },
  postAdminName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postDescription: {
    padding: 2,
    width: '95%',
  },
  postDescText: {
    color: 'gray',
    fontSize: 15,
  }




});

export default styles;