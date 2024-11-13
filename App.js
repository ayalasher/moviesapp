import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
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

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Movie application by react native and TMDB</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
