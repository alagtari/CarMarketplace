import {useState,useEffect} from 'react';
import { StyleSheet, Text,Image,View,TouchableWithoutFeedback} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import InView from 'react-native-component-inview'
const {height, width} = Dimensions.get('window');


const SearchedItem = ({item,InViewItem,setInViewItem,navigation}) => {
    const [scale, setScale] = useState([{ scaleX: 0.85  },{ scaleY: 0.85 }])
    const [saved, setSaved] = useState(item.saved)
    const checkVisible = (isVisible) => {
        if (isVisible){
            setInViewItem(item.id)
        } 
      }
      useEffect(()=>{
        InViewItem===item.id?setScale([{ scaleX: 1 },{ scaleY: 1 }]):setScale([{scaleX: 0.85  },{ scaleY: 0.85 }])
      },[InViewItem===item.id])  
    
      const styles = StyleSheet.create({
        SearchedItem:{
            marginLeft:10,
            transform: scale,
            height:(height /100)*50,
            width:(width /100)*90,
            backgroundColor:'white',
            borderRadius:30
        },
        imageBox:{
            height:'55%',
            width:'100%', 
            borderRadius:30
        },
        image:{
            height:'100%',
            width:'100%', 
            borderRadius:30
        },
        iconBox:{
            position:'absolute',
            width:55,
            height:55,
            backgroundColor:'rgb(0, 120, 255)',
            bottom:'-15%',
            right:'10%',
            borderRadius:50,
            alignItems:'center',
            justifyContent:'center'
        },
        infoContainer:{
            marginTop:30,
            marginLeft:30,
        },
     
        container:{
            marginTop:10,
            width:'100%',
            flexDirection:'row'
        },
        carModel:{
            width:'90%',
            fontSize:18,
            fontWeight:'700',
        },
        carPrice:{
            width:'60%',
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
    
    
    })   
    return (
        <TouchableWithoutFeedback  onPress={() => navigation.navigate('Details')}>
           <View style={styles.SearchedItem}>
            <View style={styles.imageBox}>
                <Image style={styles.image} source={require('../assets/porsche911.png')} />
                <TouchableWithoutFeedback onPress={() => setSaved(!saved)}>
                    <View style={styles.iconBox}>
                        <FontAwesome name={saved?"bookmark":"bookmark-o"} size={20} color="#fff" />   
                    </View>
                 </TouchableWithoutFeedback>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.container}>
                
                    <Text style={styles.carPrice}>{item.price}</Text>
                <InView onChange={(isVisible) => checkVisible(isVisible)}></InView>
                </View>
                <View style={styles.container}>
                    <Text style={styles.carModel}>{item.carName}</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.infoBox}>
                        <Text style={styles.info}>{item.km}</Text>
                    </View>
                    <View style={styles.infoBox}>
                    <Text style={styles.info}>{item.color}</Text>
                    </View>
                    <View style={styles.infoBox}>
                    <Text style={styles.info}>{item.year}</Text>
                    </View>
                </View>
            </View>
         </View>
        </TouchableWithoutFeedback>
    );
    
};

export default SearchedItem;