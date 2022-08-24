import { View,Image,StyleSheet,Text,Linking,TouchableWithoutFeedback } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  { useCallback } from "react";

const DetailsScreen = () => {
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
      

    return ( 
        <View style={styles.container}>
            <Image style={styles.image}  source={require('../assets/porsche911.png')} />
            <View style={styles.informations}>
                <View style={styles.infoContainer}>
                    <View style={styles.row}>
                        <Text style={styles.carPrice}>50,000 TND </Text>
                        <FontAwesome name="bookmark-o" size={30} color="#000" />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.carModel}>Porsche 911 Turbo S</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.infoBox}>
                            <Text style={styles.info}>100k km</Text>
                        </View>
                        <View style={styles.infoBox}>
                        <Text style={styles.info}>Gray</Text>
                        </View>
                        <View style={styles.infoBox}>
                        <Text style={styles.info}>1988</Text>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress={handlePress}  >
                        <View style={styles.row}>
                            <FontAwesome style={styles.locationIcon} name="map-marker"color="#FF0000" />
                            <Text style={styles.location}>Los Angeles , California </Text>
                        </View>    
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={callNumber}  >
                       <View style={styles.row}>
                        <FontAwesome style={styles.locationIcon} name="phone"color="#32CD32" />
                        <Text style={styles.location}> 28 755 588 </Text>
                        </View>    
                    </TouchableWithoutFeedback>
                    <View style={styles.descriptionBox}>
                        <Text style={styles.descriptionTitle}>Porsche 911 Turbo S</Text>
                        <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer, when an unknown printer, when an unknown printer, when an unknown printer </Text>
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
    backgroundColor:'rgba(0, 120, 255,0.7)',
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