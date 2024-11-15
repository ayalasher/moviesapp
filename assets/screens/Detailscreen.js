import { useEffect, useState } from "react";
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView}  from "expo-video"
import { Text, View , StyleSheet  , Pressable , Image, ScrollView, FlatList } from "react-native";




export default function Detailscreen({navigation, route}) {




    const [videodata,setvideodata] = useState([])


    const movietitle = route.params.Movietitle
    const Releasedate = route.params.Releasedate
    const poster_path = route.params.posterpath
    const moviedescription = route.params.decription
    const movieid = route.params.moviesid


    function seevideoshandler(Itemdata) {

        const youtubeUrl = `https://www.youtube.com/watch?v=${Itemdata.item.key}`;
        const player = useVideoPlayer(youtubeUrl, player => {
            player.loop = true;
            player.play();
          });
        
          const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
    
        return (
            <View style={styles.contentContainer}>
              <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
              <View style={styles.controlsContainer}>
                <Button
                  title={isPlaying ? 'Pause' : 'Play'}
                  onPress={() => {
                    if (isPlaying) {
                      player.pause();
                    } else {
                      player.play();
                    }
                  }}
                />
              </View>
            </View>
          );
    }



    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmE0N2ZlZTkyYjcwYWMwNmZiYjhlZTllYjNkZWE4NCIsIm5iZiI6MTczMTQ4MDY1My43NjA0MzE1LCJzdWIiOiI2NzMzNGRjNWI3MzcwZWE2ZGM0MTI4OWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SY_NzAk4J2zC1HFDFhEGYXuW6BZgN5rW8CUw6HbwTYA'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => setvideodata(res) )
            .catch(err => console.error(err));
    },[])





   


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
            <FlatList nestedScrollEnabled={true} data={videodata.results} keyExtractor={(item)=>item.id.toString()} renderItem={seevideoshandler}  />
        </View>
    </ScrollView>
}

const styles=  StyleSheet.create({
    rootcontainer:{
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
    },contentContainer:{
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    },
    video: {
        width: 350,
        height: 275,
      },
      controlsContainer: {
        padding: 10,
      },

})