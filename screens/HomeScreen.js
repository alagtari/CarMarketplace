import { StyleSheet, Text,View ,FlatList,TouchableOpacity,StatusBar} from 'react-native';
import Item from '../components/Item';
import Category from '../components/Category';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const CATEGORI0ES = [
  
        {
        id:8,
        title: "CITADINE",
        icon:require('../assets/1.png'),
        color:'#9250FF',
        dementions:{
        width:52.5,
        height:21
      }
          },
        {
        id:1,      
        title: "COMPACTE",
        icon:require('../assets/2.png'),
        color:'#0078FF',
        dementions:{
        width:48.75,
        height:21
      }
      },
      {
        id:2,
        title: "BERLINE",
        icon:require('../assets/3.png'),
        color:'#0CA0E9',
        dementions:{
        width:60,
        height:21
      }
      },
      {
        id:3,
        title: "COUPÉ",
        icon:require('../assets/4.png'),
        color:'#0CA0B9',
        dementions:{
        width:57,
        height:16.8
      }
      },
      {
        id:4,      
        title: "CABRIOLET",
        icon:require('../assets/5.png'),
        color:'#0CB6A6',
        dementions:{
        width:57,
        height:16.8
      }
      },
      {
        id:5,
        title: "MONOSPACE",
        icon:require('../assets/6.png'),
        color:'#FBB80F',
        dementions:{
        width:52.5,
        height:21
      }
      },
      {
        id:6,
        title: "UTILITAIRE",
        icon:require('../assets/7.png'),
        color:'#FD7F20',
        dementions:{
        width:52.5,
        height:21
      }
      },
      {
        id:7,
        title: "PICK UP",
        icon:require('../assets/8.png'),
        color:'#E34234',
        dementions:{
        width:60,
        height:21
      }
      }
    ];
  

const HomeScreen = ({ navigation }) => { 
  const [savedCars, onChangeSavedCars] = useState([]);

const logout =async ()=>{
  const res = await AsyncStorage.clear()
  navigation.navigate('Login')

}  
 const getSavedCars =async()=>{
  const token =  await AsyncStorage.getItem('token')
  axios.get(`/saved`, {
    headers: {
      'Authorization': token
    }
  })
  .then(response=>{
    if(response.status == 200){
      onChangeSavedCars(response.data)
    }
  })
  .catch(error=>console.error(error))

}

  useEffect(()=>{
    getSavedCars()
  },[])
    
  

  return (
    <View style={styles.container}>
            <StatusBar
              barStyle="light-content"/> 
            <View style={styles.innerHeader}>
           <View style={styles.topBar}>
                <TouchableOpacity activeOpacity={2} style={styles.searchbar} onPress={() => navigation.navigate('Search')} >
                  <EvilIcons style={styles.searchIcon} name="search" size={20} color="white" />
                  <Text style={styles.search}>Search</Text>
               </TouchableOpacity>
               <TouchableOpacity activeOpacity={2} style={styles.userIcon} onPress={() => logout()} >
                     <MaterialIcons name="logout"  size={25} color="#fff" />
               </TouchableOpacity>
           </View>

      </View>
      <View style={styles.Body }>
        
      <View style={styles.innerBody }>
         <View style={styles.categoryHeader} >
             <Text style={styles.categoryTitle} >Browse</Text>
           </View>
      <FlatList
            ListFooterComponent={<View style={{width:70}}/>}
            contentContainerStyle={{ alignItems: 'center'}}   
            style={styles.caregories}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={CATEGORI0ES}

            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Category navigation={navigation} item={item}/>}
            />
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>Saved</Text>
      </View>
      <FlatList
      style={styles.saved} 
      contentContainerStyle={{ alignItems: 'center',marginTop:10}} 
      showsVerticalScrollIndicator={false}
      data={savedCars}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item,index }) => <Item navigation={navigation} item={item} isSaved={true} />}
      /*onViewableItemsChanged={onCheckViewableItems}*/
      />
      </View>
      </View>  
      <TouchableOpacity activeOpacity={2} style={styles.addButton} onPress={() => navigation.navigate('AddItem',{category:null})} >
           <Feather name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
       alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'rgb(255, 255, 255)',
    },
    Header: {
        
      alignItems: 'center',
      justifyContent: 'center',
      flex:1,
      width:'100%',
      backgroundColor: 'rgb(255, 255, 255)', 
    },
    innerHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        backgroundColor: '#9250FF',
        borderBottomRightRadius:75, 
        paddingBottom:40
      },
      Body : {
        flex:4, 
        width:'100%', 
        backgroundColor: '#9250FF',  
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
        paddingTop:'10%' 
       

      },
     caregories:{
        
        width:'95%', 
        height:'1%',   
        marginTop:0,
        marginLeft:"3%"

     },
     saved:{
        
      width:'100%', 
      height:'20%',    
      marginBottom:20

   },
     topBar:{
       flexDirection:'row',
       marginTop:80,
       width:'80%',
       height:50,
       alignItems: 'center',
       justifyContent: 'flex-start',

     },
     menuIcon:{
       marginLeft:5,
       width:'15%'
     },
     userIcon:{
       width:'10%'
     },
     searchbar:{ 
      paddingLeft:20, 
      flexDirection:'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width:'90%' ,
      height:45,
      marginRight:'5%',
      backgroundColor:'rgba(255,255,255,0.4)', 
      borderRadius:50,

     },
     search:{
      color:'white',  
      fontSize:15,
     },
     searchIcon:{
     },

     categoryHeader:{
       flexDirection:'row',
       width:'85%',
     },
     categoryTitle:{
       width:'50%',
      fontSize:18,
      fontWeight:'700',
      letterSpacing:'1'
     },
     categoryDescriptionBox:{
       width:'50%',
       alignItems:"flex-end",
     },
     categoryDescription:{
      color:'rgb(0, 120, 255)',
      fontSize:13,
      fontWeight:'600',
     },
     addButton:{
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:'#9250FF', 
        bottom:'6%',
        right:'6%',
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 10,
     }

      
      
  });


export default HomeScreen;