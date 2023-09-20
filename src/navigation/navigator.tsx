import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import UserProfile from '../screens/UserProfile';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

// NOTE: MyStack should probably be named something like NerdUpStack or ScholarStack
function MyStack() {
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

export default MyStack;