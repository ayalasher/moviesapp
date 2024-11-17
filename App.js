import { Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Signupscreen  from './assets/screens/Signupscreen'
import  Homescreen    from './assets/screens/Homescreenall.js'
import  Moviescreen  from "./assets/screens/Moviescreens.js"
import Seriesscreen   from './assets/screens/Seriesscreen.js'
import Profilescreen from './assets/screens/Profile.js';
import Searchscreen from './assets/screens/searchscreen.js';
import Detailscreen from './assets/screens/Detailscreen.js';
import Loginscreen from './assets/screens/Loginscreen.js';





function Profileicon() {
  const navigation = useNavigation();
  function navigatetoprofile() {
    navigation.navigate("Profile")
  }
  return <Pressable style={styles.pressablecontainer} onPress={navigatetoprofile} >
    <View>
      <Text>
      <AntDesign name="user" size={24} color="white" />
      </Text>
    </View>
  </Pressable>
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return ( <Tab.Navigator>
    <Tab.Screen name="Homescreen" component={Homescreen}  options={{  headerRight:Profileicon ,  headerTintColor:"white" , headerStyle:{backgroundColor:"#E50914" }, headerTitle:"Home" ,  tabBarInactiveBackgroundColor:"#E50914" ,  tabBarActiveBackgroundColor:"#E50914" ,tabBarInactiveTintColor:"white" , tabBarActiveTintColor:"black" , tabBarLabel:"Home"  , tabBarIcon:({color, size})=>(<AntDesign name="home" size={size} color={color} />)   }}   />
    <Tab.Screen name="Moviesscreen" component={Moviescreen} options={{ headerRight:Profileicon , headerTintColor:"white" , headerStyle:{backgroundColor:"#E50914" }, headerTitle:"Movies" ,  tabBarInactiveBackgroundColor:"#E50914" ,  tabBarActiveBackgroundColor:"#E50914" , tabBarInactiveTintColor:"white" , tabBarActiveTintColor:"black" ,  tabBarLabel:"Movies" , tabBarIcon:({color,size})=>(<Feather name="tv" size={size} color={color} />) }}   />
    <Tab.Screen name="SeriesScreen" component={Seriesscreen} options={{ headerRight:Profileicon ,  headerTintColor:"white" ,  headerStyle:{backgroundColor:"#E50914" }, headerTitle:"Series" ,  tabBarInactiveBackgroundColor:"#E50914" ,  tabBarActiveBackgroundColor:"#E50914" , tabBarInactiveTintColor:"white" , tabBarActiveTintColor:"black"  ,  tabBarLabel:"Series" , tabBarIcon:({color,size})=>(<Feather name="film" size={size} color={color} />) }} />
  </Tab.Navigator> ) ; 
}


export default function App() {
  return <NavigationContainer>
   <Stack.Navigator>
   {/* <Stack.Screen name='login' component={Loginscreen}  options={{title:"Log in ", headerShown:false }} /> */}
    <Stack.Screen name='Signup' component={Signupscreen}  options={{title:"Sign up", headerShown:false }} />
    <Stack.Screen name='Login' component={Loginscreen}  options={{title:"Log in", headerShown:false }} />
    <Stack.Screen name="logintesting" component={MyTabs} options={{title:"Screen 1" ,  headerShown:false }} />
    <Stack.Screen name="Signtesting" component={Signupscreen} />
    <Stack.Screen name='Profile'  component={Profilescreen} options={{title:"Profile" , headerStyle:{backgroundColor:"#E50914"} , headerTintColor:"white" }}  />
    <Stack.Screen name='searchscreen'  component={Searchscreen} options={{title:"Search" , headerStyle:{backgroundColor:"#E50914"} , headerTintColor:"white" }}  />
    <Stack.Screen name='detailsscreen'  component={Detailscreen} options={{title:"Details" , headerStyle:{backgroundColor:"#E50914"} , headerTintColor:"white" }}  />
   </Stack.Navigator>
  </NavigationContainer>
   ;
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal:20,
    marginVertical:50, 
    padding:20
  },
  pressablecontainer:{
    borderRadius:7,
    padding:10,
    margin:10
  }
});
