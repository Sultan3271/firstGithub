import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Image} from 'react-native'
import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import { styles } from '../styles/Styles';
import { useIsFocused } from '@react-navigation/native';
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  const isFocused= useIsFocused();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      
      barStyle={{ backgroundColor: '#fff2f2' }}
      
    >

      <Tab.Screen
        name="Home"
        component={Home}
         
        options={{
            
          tabBarLabel:false,
         
          tabBarIcon: ()=>(
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/1946/1946436.png'}} style={styles.tabIcon} />
          )
        }}
        
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarLabel:false,
          tabBarIcon: ()=>(
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/1077/1077114.png'}} style={styles.tabIcon} />
          )

        }}
        />
    </Tab.Navigator>
  );
}

export default MyTabs