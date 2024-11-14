import { Pressable, Text, View , StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Searchbutton() {

    const navigation = useNavigation();
    function opensearchscreen() {
        navigation.navigate("searchscreen")
        
    }

    return <Pressable style={styles.pressablecontainer} onPress={opensearchscreen} >
        <View>
            <Text>
            <AntDesign style={styles.icon} name="search1" size={24} color="black" />
            </Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    pressablecontainer:{
        borderRadius:7,
        backgroundColor:"#E50914",
        alignItems:"center",
        justifyContent:"center",
        elevation:4 ,
        paddingVertical:5,
        paddingHorizontal:20,
      },
      icon:{
        
      }
})


