import { Text, View , StyleSheet } from "react-native";
import Searchbutton from "../../buttons/searchbutton";



export default function Homescreen() {
    return <View style={styles.rootcontainer} >
        <View style={styles.topview} >
        <Text style={styles.headertxt} >Search ... </Text>
        <Searchbutton/>
        </View>
       
    </View>
}

const styles = StyleSheet.create({
    rootcontainer:{
        flex:1,
        marginHorizontal:20,
        padding:20
    },
    topview:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    headertxt:{
        fontSize:25,
        fontWeight:"900"
    }

})