import { Text, View ,  StyleSheet } from "react-native"
import React from "react"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


//Import the functions you need from the SDKs you need
import {getAuth , signInWithEmailAndPassword ,createUserWithEmailAndPassword , signOut   , onAuthStateChanged }  from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAygxawTv3QvUH4CoSdorsY4RqDZDchHLM",
  authDomain: "movie-stream-app-b4f8b.firebaseapp.com",
  projectId: "movie-stream-app-b4f8b",
  storageBucket: "movie-stream-app-b4f8b.firebasestorage.app",
  messagingSenderId: "669711460287",
  appId: "1:669711460287:web:665335ba34e406b9a0630a",
  measurementId: "G-GHD7HDE6C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)




export default function Loginscreen(){
    return <View style={styles.rootcontainer} >
        <Text>Login page</Text>
    </View>
}



const styles=  StyleSheet.create({
    rootcontainer:{
        flex:1,
        marginHorizontal:20,
        padding:20
    },
})
 