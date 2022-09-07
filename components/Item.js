import { StyleSheet, Text,View ,Image,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const Item = ({navigation ,item ,isSaved}) => {
  
  const [saved,setSaved]=useState(isSaved)

  const unsave =async()=> {
    const token = await AsyncStorage.getItem('token')
    axios.put(`/saved?car_id=${item._id}`,{}, {
      headers: {
        'Authorization': token
      }
    })
   
    
  }

  useEffect(()=>{
    if(!saved){ 
      unsave()  
    }
  },[saved])
  
    return (
      <TouchableOpacity activeOpacity={2} onPress={() => {navigation.navigate('Details',{id:item._id})}}>
        <View style={styles.item}>
          <Image style={styles.image} source={{ uri: item.photo }}  />
          <View style={styles.textBox}>
          <Text style={styles.yearText}>{item.year}</Text>
          <Text style={styles.modelText}>{item.name}</Text>
          <Text style={styles.infoText}>{item.mileage} km   {item.color}    {item.price} </Text>
          </View>
          <View style={styles.iconBox}>
          <TouchableOpacity 
          activeOpacity={2} 
          onPress={() => setSaved(!saved)}>
            <FontAwesome name={saved?"bookmark":"bookmark-o"} size={20} color="#000" />
          </TouchableOpacity >
          
          </View>
        </View>
      </TouchableOpacity>  
    );
}
const styles = StyleSheet.create({
    item: {
      width:width*0.9, 
      height:100,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      borderRadius:20 ,
      paddingLeft:10,
      marginBottom:15,
      shadowColor: '#000',
      shadowOffset: {width: 2, height: 4},
      shadowOpacity: 0.15,
      shadowRadius: 10,
      
      
    },
    image: {
        width:'25%',
        height:'70%',
        borderRadius:15 
      },
    textBox: {
       flex:.8,
       marginLeft:10
      }, 
    yearText: {
      fontSize:11,
      color:'gray'
    }, 
    modelText: {
        marginTop:5,
        marginBottom:8,
        fontSize:15,
        fontWeight:'700'
    },  
    infoText: {
        fontSize:11,
        fontWeight:'600'
    }, 
    iconBox:{
      flex:.1,
      marginTop:25,
      height:'100%',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
    }
})
export default Item;