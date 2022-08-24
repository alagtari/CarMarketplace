import { StyleSheet, Text,View ,FlatList,TouchableWithoutFeedback,StatusBar} from 'react-native';
import Item from '../components/Item';
import Category from '../components/Category';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import react from 'react';

const SAVED = [
     {
      carName: "Porsche 911 Turbo S",
      color: "blue",
      year:'2018',
      km:'32k km',
      price:"$200,000",
      image:require('../assets/porsche911.png'),
      saved:true
    },
    {
      carName: "Porsche 911 Turbo S",
      color: "blue",
      year:'2018',
      km:'32k km',
      price:"$200,000",
      image:require('../assets/porsche911.png'),
      saved:true
    },
    {
      carName: "Porsche 911 Turbo S",
      color: "blue",
      year:'2018',
      km:'32k km',
      price:"$200,000",
      image:require('../assets/porsche911.png'),
      saved:true
    },
    {
      carName: "Porsche 911 Turbo S",
      color: "blue",
      year:'2018',
      km:'32k km',
      price:"$200,000",
      image:require('../assets/porsche911.png'),
      saved:true
    },
  ]
  const CATEGORI0ES = [
    {
        title: "Saved",
        color: "#F8AFA6",
        number:18,
        image:"porcshe-category.png"
      },
      {
        title: "Cars",
        color: "#F8AFA6",
        number:18,
        image:"porcshe-category.png"
      },
      {
        title: "Trucks",
        color: "#F8AFA6",
        number:18,
        image:"porcshe-category.png"
      }]
 
  

const HomeScreen = ({ navigation }) => { 
 
  return (
    <View style={styles.container}>
            <StatusBar
              barStyle="light-content"/> 
            <View style={styles.container1}>
            <FlatList
            ListFooterComponent={<View style={{width:70}}/>}
            style={styles.caregories}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={CATEGORI0ES}

            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Category item={item}/>}
            />
           <View style={styles.topBar}>
              <Feather style={styles.menuIcon} name="menu" size={25} color="#fff" />
              
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')} >
                <View style={styles.searchbar}>
                <EvilIcons style={styles.searchIcon} name="search" size={20} color="#fff" />
                <Text style={styles.search}>Search</Text>
                </View>
               </TouchableWithoutFeedback>
              
              <AntDesign style={styles.userIcon} name="user" size={25} color="#fff" />
           </View>
           <View style={styles.browseContainer}>
             <Text style={styles.browseText}>Browse</Text>
           </View>

      </View>
            
      <View style={styles.container2}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>Saved</Text>
        <View style={styles.categoryDescriptionBox}><Text style={styles.categoryDescription}>18 Item</Text></View>
      </View>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={SAVED}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item,index }) => <Item navigation={navigation} item={item} />}
      /*onViewableItemsChanged={onCheckViewableItems}*/
      />
      </View>

      <TouchableWithoutFeedback onPress={() => navigation.navigate('AddItem')} >
        <View style={styles.addButton}>
           <Feather name="plus" size={30} color="#fff" />
        </View>
      </TouchableWithoutFeedback>
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
        height:'40%',
        width:'100%',
        backgroundColor: 'rgb(0, 120, 255)',
        borderBottomLeftRadius:150,
        borderBottomRightRadius:500,
        transform: [{ scaleX: 1.1 }],   
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 20,
          

        
      },
      container2: {
        height:'41.5%',
        width:'100%',
        paddingTop:'20%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:'15%'

      },
     caregories:{
        
        width:'100%',
        position:'absolute',
        bottom:-40,
        left:0,
        paddingLeft:50,
        paddingRight:150,

     },
     topBar:{
      transform: [{ scaleX: 0.9 }], 
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
      transform: [{ scaleX: 0.9 }],
      paddingLeft:20, 
      flexDirection:'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width:'70%',
      height:45,
      marginRight:'5%',
      backgroundColor:'rgba(255,255,255,0.2)',
      borderRadius:50,

     },
     search:{
      color:'rgba(255,255,255,0.7)',
      fontSize:15,
     },
     searchIcon:{
     },
     browseContainer:{
       marginTop:"10%",
      justifyContent: 'flex-start',
      width:'70%',
     },
     browseText:{
      color:'white',
      fontSize:25,
      fontWeight:'700',
      letterSpacing:'1'
     },
     categoryHeader:{
       flexDirection:'row',
       width:'85%',
       marginBottom:20
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
        backgroundColor:'rgb(0, 120, 255)',
        bottom:'7%',
        right:'7%'
     }

      
      
  });


export default HomeScreen;