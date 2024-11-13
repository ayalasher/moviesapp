import { Text, View , StyleSheet  } from "react-native";

export default function Moviescreen() {
    return <View style={styles.rootcontainer} >
        <Text>Movie page</Text>
    </View>
}

const styles=  StyleSheet.create({
    rootcontainer:{
        flex:1,
        marginHorizontal:20,
        padding:20
    }
})