/**
 * @file Navigator.tsx
 * @description This script is responsible for controling page navigation.
 * @ownership ?
 * @last modified 9/20/2023
 */
        
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import UserProfile from '../screens/UserProfile';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

function ScholarStack() {
  return ( 
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
      <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default ScholarStack;