/**
 * @file Navigator.tsx
 * @description This script is responsible for controling page navigation.
 * @ownership ?
 * @last modified 9/20/2023
 */
        
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EditProfile from '../screens/additive/EditProfile';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Splash from '../screens/Splash';
import UserProfile from '../screens/UserProfile';
import Post from '../screens/Post';

const Stack = createNativeStackNavigator();
  
function ScholarStack() {
  return ( 
    <Stack.Navigator> 
      <Stack.Screen name="Login"  component={Login} options={{headerShown:false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
      <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown:false}}/>
      <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}/>
      <Stack.Screen name="Post" component={Post} options={{headerShown:false}}/>
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default ScholarStack;