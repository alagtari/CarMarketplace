import { StyleSheet, Text,View ,TextInput,FlatList,StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SearchedItem from '../components/SearchedItem';
import {useState,useEffect} from "react";
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {height, width} = Dimensions.get('window');
import axios  from 'axios';

const ITEMS = [
  {
    id:1,
   carName: "Porsche 911 Turbo S",
   color: "blue",
   year:'2018',
   km:'32k km',
   price:"$200,000",
   saved:true
 },
 {
   id:2,
   carName: "Porsche 911 Turbo S",
   color: "blue",
   year:'2018',
   km:'32k km',
   price:"$200,000",
   saved:true
 },
 {
   id:3,
   carName: "Porsche 911 Turbo S",
   color: "blue",
   year:'2018',
   km:'32k km',
   price:"$200,000",
   saved:true
 },
 {
   id:4,
   carName: "Porsche 911 Turbo S",
   color: "blue",
   year:'2018',
   km:'32k km',
   price:"$200,000",
   saved:true
 },
]
const SearchScreen = ({navigation}) => {
    const [carName, onChangeCarName] = useState('');
    const [InViewItem, setInViewItem] = useState(ITEMS[0].id);
    const [searchedCars, onChangeSearchedCars] = useState(null);

    const changeInViewItem =(itemId)=>setInViewItem(itemId)
    const getToken =async()=> {return await AsyncStorage.getItem('token')}
    
    useEffect(() => {
      
          console.log(carName);
          axios.get(`/car?name=${carName}`, {
            headers: {
              'Authorization': getToken()
            }
          })
          .then(response=>{
              if(response.status == 200){
                onChangeSearchedCars(response.data)
                } 
          })
          .catch((error)=> {
            console.log(error);
          })
        
        
    },[carName])

    const FlatListItemSeparator = () => {
      return (
        <View style={styles.separator} />
      );
    }
    return (
    <View style={styles.container}>
            <StatusBar
              barStyle="light-content"/> 
            <View style={styles.container1}>
                <View style={styles.searchSection}>
                    <View style={styles.searchBox}>
                        <EvilIcons style={styles.searchIcon} name="search" size={20} color="gray" />
                        <TextInput
                        style={styles.input}
                        onChangeText={onChangeCarName}
                        value={carName}
                        placeholder="Type car model"
                        placeholderTextColor="gray" 
                        />
                    </View>
                </View>  
                
                <FlatList
                ListHeaderComponent={<View style={{width:12}}/>}
                ListFooterComponent={<View style={{width:23}}/>}
                contentContainerStyle={{ alignItems: 'center',margin:10}} 
                ItemSeparatorComponent={FlatListItemSeparator}
                style={styles.searchedItems}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={searchedCars}
                keyExtractor={(item, index) => item + index + item}
                renderItem={({ item }) => <SearchedItem item={item} InViewItem={InViewItem} setInViewItem={changeInViewItem} navigation={navigation} />}
                />
                
               
            </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    container1: {
        
        alignItems: 'center',
        justifyContent: 'center',
        flex: .25,
        width:'100%',
        backgroundColor: '#9250FF',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50, 
          

        
      },
      
     searchSection:{
      position:'absolute',
      bottom:-(height/100)*3,
        alignItems: 'center',
        marginTop:'15%',
        width:'100%',
        
        
      },
      searchBox:{
        flexDirection:'row',
        width:'75%',
        height:50,
        paddingLeft:20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'white',
        borderRadius:50,
        backgroundColor:'rgb(240,240,240)', 
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 15,
        
      },
      input:{
        width:'80%', 
        color:'gray'
      },
      searchIcon:{
          marginRight:5
      },
      searchedItems:{
        position:'absolute',
        bottom:-height*0.65,
        height:height*.6,
        width:width,

      },
      separator:{
        width: 1,
        margin: -14,
        
    }
     
    

      
      
  });


export default SearchScreen;