import { useState } from "react";
import { Text, View , StyleSheet  , Pressable , Image, ScrollView } from "react-native";

export default function Detailscreen({navigation, route}) {

    const [videodata,setvideodata] = useState([])

    
    const movietitle = route.params.Movietitle
    const Releasedate = route.params.Releasedate
    const poster_path = route.params.posterpath
    const moviedescription = route.params.decription
    const movieid = route.params.moviesid

    return <ScrollView style={styles.rootcontainer} >
            <Pressable android_ripple={{color:"grey"}}  style={styles.cardview} >
                <Image  style={styles.image} source={{uri: 'https://image.tmdb.org/t/p/w500'+ poster_path }} />
                <Text style={styles.titletxt} > {movietitle } </Text>
                <Text> Release date :  {Releasedate} </Text>
            </Pressable>
        <Text style={styles.titletxt} > Description </Text>    
        <Text> {moviedescription} </Text>

        <View style={styles.videos} >
            <Text style={styles.titletxt} >Available videos </Text>
        </View>
    </ScrollView>
}

const styles=  StyleSheet.create({
    rootcontainer:{
        flex:1,
        marginHorizontal:20,
        padding:20
    },
    cardview:{
        width:"100%",
        height:300,
        borderRadius:7,
        marginVertical:15,
    },
    image:{
        width : "100%" ,
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },titletxt:{
        fontWeight:"900",
        fontSize:20,
        marginVertical:10
    },
    videos:{
        marginVertical:15
    }

})