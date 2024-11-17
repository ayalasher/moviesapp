import { Text, View , StyleSheet, TextInput, Button } from "react-native"
import React, { useState } from "react"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


//Import the functions you need from the SDKs you need
import {getAuth , signInWithEmailAndPassword ,createUserWithEmailAndPassword , signOut   , onAuthStateChanged }  from 'firebase/auth'
import Signupbtn from "../../buttons/Signupbtn";

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





export default function Signupscreen({navigation}){
    const  [email, setemail] = useState()
    const [password, setpasswaord] = useState()
    const [userdata , setuserdata] = useState()


    const signupdata = {
        collectedemail:email,
        collectedpassword:password
    }

    function captureemailhandler(Text) {
        setemail(Text)
    }

    function capturepasswordhandler(Text) {
        setpasswaord(Text)
    }

    function signuphandler() {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    setuserdata(user)
    navigation.navigate("logintesting", {
        USERDATA:userdata
    } )
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    
    
    // ..
  });
    }



    return <View style={styles.rootcontainer} >
            <TextInput onChangeText={captureemailhandler} style={styles.txtinput} placeholder="Enter your email" type />
            <Text/>
            <TextInput  onChangeText={capturepasswordhandler} style={styles.txtinput} placeholder="Enter your password" />
            <Signupbtn onpress={signuphandler}  >Sign up</Signupbtn>
    </View>
}



const styles=  StyleSheet.create({
    rootcontainer:{
        flex:1,
        marginHorizontal:30,
        marginVertical:30, 
        padding:20,
        alignItems:"center",
        justifyContent:"center"
    },
    txtinput:{
        paddingHorizontal:15,
        paddingVertical:5,
        borderColor:"grey",
        borderRadius:6,
        borderWidth:1,
        marginVertical:10,
        width:"80%"
    }
})