import { StyleSheet, Text,View ,TextInput,FlatList,StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SearchedItem from '../components/SearchedItem';
import React from "react";
import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

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
    const [number, onChangeNumber] = React.useState(null);
    const [InViewItem, setInViewItem] = React.useState(ITEMS[0].id);
    const changeInViewItem =(itemId)=>setInViewItem(itemId)
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
                <View style={styles.topBar}>
                    <Feather style={styles.menuIcon} name="menu" size={25} color="#fff" />
                    <View style={styles.searchbar}>
                        <Text style={styles.search}>SEARCH</Text>
                    </View>
                    <AntDesign style={styles.userIcon} name="user" size={25} color="#fff" />
                </View>
                <View style={styles.searchSection}>
                    <View style={styles.searchBox}>
                        <EvilIcons style={styles.searchIcon} name="search" size={20} color="gray" />
                        <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Type car model"
                        placeholderTextColor="gray" 
                        />
                    </View>
                </View>  
                
                <FlatList
                ListHeaderComponent={<View style={{width:12}}/>}
                ListFooterComponent={<View style={{width:23}}/>}
                ItemSeparatorComponent={FlatListItemSeparator}
                style={styles.searchedItems}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={ITEMS}
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
      backgroundColor: 'rgba(0, 0, 255, 0.05)',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    container1: {
        
        alignItems: 'center',
        height:'55%',
        width:'100%',
        backgroundColor: 'rgb(0, 120, 255)',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50, 
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 20,
          

        
      },
      
     topBar:{
       flexDirection:'row',
       marginTop:80,
       marginLeft:'4%',
       width:'80%',
       height:50,
       alignItems: 'center',
       justifyContent: 'flex-start',

     },
     menuIcon:{
       width:'10%',
       
     },
     userIcon:{
       width:'15%'
     },
     searchbar:{
       alignItems: 'center',
       width:'75%',

     },
     search:{
      color:'white',
      fontSize:14,
      fontWeight:'500'
     },
     searchSection:{
        alignItems: 'flex-start',
        marginTop:'15%',
        marginLeft:'10%',
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
        
      },
      input:{
        width:'80%', 
      },
      searchIcon:{
          marginRight:5
      },
      searchedItems:{
        position:'absolute',
        bottom:-(height/100)*38,
        height:height/2,
        width:width,

      },
      separator:{
        width: 1,
        margin: -14,
        
    }
    

      
      
  });


export default SearchScreen;