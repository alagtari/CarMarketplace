import { StyleSheet, Text,View ,Image,TouchableWithoutFeedback} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
const Item = ({navigation ,item}) => {
  const [saved,setSaved]=useState(item.saved)
    return (
      <TouchableWithoutFeedback  onPress={() => navigation.navigate('Details')}>
        <View style={styles.item}>
          <Image style={styles.image} source={item.image} />
          <View style={styles.textBox}>
          <Text style={styles.yearText}>{item.year}</Text>
          <Text style={styles.modelText}>{item.carName}</Text>
          <Text style={styles.infoText}>{item.km}   {item.color}    {item.price} </Text>
          </View>
          <View style={styles.iconBox}>
          <TouchableWithoutFeedback onPress={() => setSaved(!saved)}>
            <FontAwesome name={saved?"bookmark":"bookmark-o"} size={20} color="#000" />
          </TouchableWithoutFeedback>
          
          </View>
        </View>
      </TouchableWithoutFeedback>  
    );
}
const styles = StyleSheet.create({
    item: {
      width:340, 
      height:100,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      borderRadius:20 ,
      paddingLeft:10,
      marginBottom:15,
      
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