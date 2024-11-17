import { Pressable, Text, View , StyleSheet } from "react-native";

export default function Signupbtn({children,onpress}) {
    return <Pressable android_ripple={{color:"grey"}} onPress={onpress} style={styles.rootcontainer} >
            <Text style={styles.btntxt} >
                {children}
            </Text>
    </Pressable>
}

const styles = StyleSheet.create({
    rootcontainer:{
        paddingVertical:10,
        paddingHorizontal:15,
        backgroundColor:"#E50914",
        borderRadius:10,
        textAlign:"center",
        marginVertical:10
    },
    btntxt:{
        color:"white"

    }
})