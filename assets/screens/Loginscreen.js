import { Text, View ,  StyleSheet } from "react-native"
import React from "react"

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
 