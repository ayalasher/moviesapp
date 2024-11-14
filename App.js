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




// Import the functions you need from the SDKs you need
// import {getAuth , signInWithEmailAndPassword ,createUserWithEmailAndPassword , signOut   , onAuthStateChanged }  from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAygxawTv3QvUH4CoSdorsY4RqDZDchHLM",
//   authDomain: "movie-stream-app-b4f8b.firebaseapp.com",
//   projectId: "movie-stream-app-b4f8b",
//   storageBucket: "movie-stream-app-b4f8b.firebasestorage.app",
//   messagingSenderId: "669711460287",
//   appId: "1:669711460287:web:665335ba34e406b9a0630a",
//   measurementId: "G-GHD7HDE6C1"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)





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
