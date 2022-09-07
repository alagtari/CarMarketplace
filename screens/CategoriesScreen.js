import React, { useState } from "react";
import { View,Image, Text,FlatList,TouchableOpacity, StyleSheet,StatusBar } from "react-native";

const CategoriesScreen = ({navigation}) => {
  const [alignContent, setAlignContent] = useState("flex-start");
  const CATEGORI0ES = [
    {
    id:8,
    title: "CITADINE",
    icon:require('../assets/1.png'),
    color:'#E34234',
    dementions:{
    width:52.5,
    height:21
  }
      },
    {
    id:1,      
    title: "COMPACTE",
    icon:require('../assets/2.png'),
    color:'#FD7F20',
    dementions:{
    width:48.75,
    height:21
  }
  },
  {
    id:2,
    title: "BERLINE",
    icon:require('../assets/3.png'),
    color:'#FBB80F',
    dementions:{
    width:60,
    height:21
  }
  },
  {
    id:3,
    title: "COUPÉ",
    icon:require('../assets/4.png'),
    color:'#0CB6A6',
    dementions:{
    width:57,
    height:16.8
  }
  },
  {
    id:4,      
    title: "CABRIOLET",
    icon:require('../assets/5.png'),
    color:'#0CA0B9',
    dementions:{
    width:57,
    height:16.8
  }
  },
  {
    id:5,
    title: "MONOSPACE",
    icon:require('../assets/6.png'),
    color:'#0CA0E9',
    dementions:{
    width:52.5,
    height:21
  }
  },
  {
    id:6,
    title: "UTILITAIRE",
    icon:require('../assets/7.png'),
    color:'#0078FF',
    dementions:{
    width:52.5,
    height:21
  }
  },
  {
    id:7,
    title: "PICK UP",
    icon:require('../assets/8.png'),
    color:'#9250FF',
    dementions:{
    width:60,
    height:21
  }
  }
];
  return (
    <View style={styles.container}>
      <StatusBar
              barStyle="light-content"/>
      <View style={styles.gategoriesTitleBox }>
        <Text style={styles.gategoriesTitle }>Select a Category</Text>
      </View>

      <FlatList
          columnWrapperStyle={{  justifyContent:"center" }}
          style={styles.categoriesList}
          showsHorizontalScrollIndicator={false}
          data={CATEGORI0ES}
          numColumns={3}
          keyExtractor={(item, index) => item + index + item}
          renderItem={({ item }) =>
          <TouchableOpacity  style={styles.box} onPress={() => navigation.navigate('AddItem',{category:item.title})} >

              <View style={[styles.image,{backgroundColor:item.color}]}>
                <Image style={item.dementions} source={item.icon}/>
              </View>
              <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity  >

           }
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop:100,

  },
  gategoriesTitleBox:{
    width:'100%',
    height:'5%',
    justifyContent:'center',
    alignItems:'center',
  },
  gategoriesTitle:{
    fontSize:21,
    fontWeight:'700',
  },
  box: {
    width: '28%',
    height: 80,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:35
  },

  categoriesList:{
      marginTop:50,
      paddingTop:5,
      width:'100%',
  },
  image:{
      height:65,
      width:65,
      alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
    borderRadius:50,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title:{
    fontSize:10,
    fontWeight:'600',
  }


});

export default CategoriesScreen;