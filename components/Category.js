import { StyleSheet, Image,View,Text,TouchableOpacity } from 'react-native';

const Category = ({item,navigation}) => {

    return (
        <TouchableOpacity style={styles.category} activeOpacity={2} onPress={() => navigation.navigate('Category',{color:item.color,title:item.title})} >
           <View style={[styles.imageContainer,{backgroundColor:item.color}]}>
           <Image style={item.dementions} source={item.icon} />
           </View>
           <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    category: {
      marginLeft:8,
      height:160,
      width:120,
      backgroundColor:'white',
      borderRadius:20 ,
      alignItems: 'center',
      justifyContent: 'flex-start',
      shadowColor: '#000',
      shadowOffset: {width: 2, height: 4},
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    imageContainer: {
        height:65,
        width:65,
        marginTop:20,
        backgroundColor:'#F8AFA6',
        borderRadius:50 ,
        alignItems: 'center',
        justifyContent: 'center', 
      },
 
      title: {
        marginTop:20, 
        fontSize:13,
        fontWeight:'700'
      }, 
    
})

export default Category;