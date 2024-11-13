import { Text, View , StyleSheet } from "react-native";

export default function Contentscreen() {
    return <View style={styles.rootcontainer} >
        <Text>
            Content screen
        </Text>
    </View>
}


const styles=  StyleSheet.create({
    rootcontainer:{
        flex:1,
        marginHorizontal:20,
        padding:20
    }
})