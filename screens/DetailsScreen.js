import { View,Image,StyleSheet,Text,Linking,TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  { useCallback ,useEffect,useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const DetailsScreen = ({ route}) => {

    const [item,setItem] = useState(null)

    const { id } = route.params;

    const getToken =async()=> {return await AsyncStorage.getItem('token')}
   
    useEffect(() => {
        
  
            axios.get(`/car/${id}`, {
              headers: {
                'Authorization': getToken()
              }
            })
            .then(response=>{
                if(response.status == 200){
                    setItem(response.data)
                  } 
            })
            .catch((error)=> {
              console.log(error);
            })
          
          
      },[])
    const url = "https://www.google.com/maps/search/?api=1&query=Los Angeles , California ";
    //const url = "http://maps.apple.com/?q=Los+Angeles";
    const phonenumber='tel:+21628734227'
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [url]);
      const callNumber =() => {
        const supported =  Linking.openURL(phonenumber)
      }
      
      
    if (!item) {
        return null
    }  
      
   
    return ( 
        <View style={styles.container}>
            <Image style={styles.image}  source={{ uri: item.photo }}  />
            <View style={styles.informations}>
                <View style={styles.infoContainer}>
                    <View style={styles.row}>
                        <Text style={styles.carPrice}>{item.price} </Text>
                        <FontAwesome name="bookmark-o" size={30} color="#000" />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.carModel}>{item.name} </Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.infoBox}>
                            <Text style={styles.info}>{item.mileage} km</Text>
                        </View>
                        <View style={styles.infoBox}>
                        <Text style={styles.info}>{item.color}</Text>
                        </View>
                        <View style={styles.infoBox}>
                        <Text style={styles.info}>{item.year}</Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={2} style={styles.row} onPress={handlePress}  >
                        <FontAwesome style={styles.locationIcon} name="map-marker"color="#FF0000" />
                            <Text style={styles.location}>{item.address}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={2} style={styles.row} onPress={callNumber}  >
                       <FontAwesome style={styles.locationIcon} name="phone"color="#32CD32" />
                        <Text style={styles.location}>{item.phone}</Text>
                    </TouchableOpacity>
                    <View style={styles.descriptionBox}>
                        <Text style={styles.descriptionTitle}>Description</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </View>
            </View>
        </View>
     );
}
const styles =StyleSheet.create({
container:{
height:'100%',
width:'100%',
position:'relative'

},
image:{
    height:'31%',
    width:'100%',
},
informations:{
    bottom:0,
    height:'74%',
    width:'100%',
    backgroundColor:'white',
    position:'absolute',
    borderTopLeftRadius:40,
    borderTopRightRadius:40
},
 infoContainer:{
    marginTop:30,
    marginLeft:30,
},

row:{
    marginTop:20,
    width:'100%',
    flexDirection:'row'
},
carModel:{
    width:'90%',
    fontSize:18,
    fontWeight:'700',
},
carPrice:{
    width:'80%',
    fontSize:14,
    fontWeight:'600',
    color:'gray'  
},
infoBox:{
    width:'28%',
    height:30,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:'1.5%',
    marginRight:'1.5%',
    backgroundColor:'#9250FF',
    borderRadius:50,
},
info:{
    fontSize:11,
    fontWeight:'600',
    color:'white'
},
descriptionBox:{
    marginTop:30,
    width:'100%',
},
descriptionTitle:{
    fontSize:15,
    fontWeight:'700',
    marginBottom:5,
},
description:{
    fontSize:13,
    fontWeight:'400',
    width:'90%',
    lineHeight: 20,
},
location:{
    fontSize:14,
    fontWeight:'500',
    width:'70%',
},
locationIcon:{
    fontSize:18,
    fontWeight:'500',
    width:'5%',
}
})
 
export default DetailsScreen;