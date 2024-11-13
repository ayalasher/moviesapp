import { Text, View , StyleSheet } from "react-native"
import React from "react"


export default function Signupscreen(){
    return <View style={styles.rootcontainer} >
        <Text>Sign up page</Text>
    </View>
}



const styles=  StyleSheet.create({
    rootcontainer:{
        flex:1,
        marginHorizontal:20,
        padding:20,
    },
})