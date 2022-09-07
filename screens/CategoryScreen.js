import { StyleSheet, Text,View ,FlatList,TouchableOpacity,StatusBar} from 'react-native';
import Item from '../components/Item';
import Category from '../components/Category';
import Feather from 'react-native-vector-icons/Feather';
import {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';



const CategoryScreen = ({ route,navigation }) => { 
    const { color,title } = route.params;  
  const [categoryCars, onChangeCategoryCars] = useState([]);


 const getcarsByCategory =()=>{
  axios.get(`/car/category/${title}`)
  .then(response=>{
    if(response.status == 200){
      onChangeCategoryCars(response.data)
    }
  })
  .catch(error=>console.error(error))

}

  useEffect(()=>{
    getcarsByCategory()
  },[])
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
       alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'rgb(255, 255, 255)',
    },
    innerHeader: {
        justifyContent: 'flex-end',
        width:'100%',
        flex:.7,
        backgroundColor: color,
        borderBottomRightRadius:75, 
        paddingBottom:40
      },
      title:{
        fontSize:28 ,
        fontWeight:'600' ,
        color:'white',
        marginLeft:'5%'
      },
      Body : {
        flex:4, 
        width:'100%', 
        backgroundColor: color,  
        alignItems: 'center',
        justifyContent: 'center',
        
        

      },
      innerBody : {
        flex:1, 
        width:'100%', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(255, 255, 255)', 
        borderTopLeftRadius:75,
        paddingTop:'10%' ,
        paddingBottom:'5%' 
       

      },
     cars:{
        
      width:'100%', 
      height:'20%',    
      marginBottom:20

   },

      
      
  });  

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"/> 
      <View style={styles.innerHeader}>
        <Text style={styles.title} >{title}</Text>
      </View>
      <View style={styles.Body }>
        
      <View style={styles.innerBody }>
 
      <FlatList
      style={styles.cars} 
      contentContainerStyle={{ alignItems: 'center',marginTop:10}} 
      showsVerticalScrollIndicator={false}
      data={categoryCars}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item,index }) => <Item navigation={navigation} item={item} isSaved={true} />}
      />
      
      </View>
      </View>  
    </View>
    );
}




export default CategoryScreen;