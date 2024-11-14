import { Text, View , StyleSheet , FlatList, Image, Pressable } from "react-native";
import Searchbutton from "../../buttons/searchbutton";
import { useEffect , useState} from "react";




export default function Homescreen({navigation}) {




    const [data , setData] = useState([])

    function renderitemshandler(Itemdata) {

        function opendetailsscreenhandler() {
            navigation.navigate("detailsscreen" , {
                Movietitle : Itemdata.item.title,
                Releasedate : Itemdata.item.release_date ,
                posterpath : Itemdata.item.poster_path,
                decription : Itemdata.item.overview,
                // Movie id below . Will be used in getting the video
                moviesid : Itemdata.item.id,
            } )
        }
        return <View style={styles.rootview} >


            <Pressable android_ripple={{color:"grey"}} onPress={opendetailsscreenhandler}  style={styles.cardview} >
                <Image  style={styles.image} source={{uri: 'https://image.tmdb.org/t/p/w500'+ Itemdata.item.poster_path}} />
                <Text style={styles.titletxt} > { Itemdata.item.title } </Text>
                <Text> Release date :  {Itemdata.item.release_date} </Text>
                <Text> Rating :  {Itemdata.item.vote_average}/10 </Text>
            </Pressable>
           
        </View>
    }


    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmE0N2ZlZTkyYjcwYWMwNmZiYjhlZTllYjNkZWE4NCIsIm5iZiI6MTczMTQ4MDY1My43NjA0MzE1LCJzdWIiOiI2NzMzNGRjNWI3MzcwZWE2ZGM0MTI4OWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SY_NzAk4J2zC1HFDFhEGYXuW6BZgN5rW8CUw6HbwTYA'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => setData(res)
            
              )
            .catch(err => console.error(err));
    },[])


    return <View style={styles.rootcontainer} >
        <View style={styles.topview} >
        <Text style={styles.headertxt} >Search ... </Text>
        <Searchbutton/>
        </View>

        <View>
        <FlatList data={data.results} keyExtractor={(item)=>item.id.toString() } renderItem={renderitemshandler} />
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
        justifyContent:"space-between",
        marginVertical:15
    },
    headertxt:{
        fontSize:25,
        fontWeight:"900"
    },rootview:{
        elevation:1
    },
    cardview:{
        width:250,
        height:300,
        borderRadius:10,
        borderColor:"grey",
        borderWidth:1,
        marginVertical:15,
    },
    image:{
        width:250,
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },titletxt:{
        fontWeight:"900",
        fontSize:20
    },

})