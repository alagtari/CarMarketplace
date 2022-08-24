import { StyleSheet, Image,View,Text } from 'react-native';

const Category = ({item}) => {
    return (
        <View style={styles.category}>
           <View style={styles.imageContainer}>
           <Image style={styles.image} source={require('../assets/porcshe-category.png')} />
           </View>
           <Text style={styles.title}>{item.title}</Text>
           <Text style={styles.description}>{item.number} nearly</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    category: {
      transform: [{ scaleX: 0.9 }],
      height:160,
      width:120,
      backgroundColor:'white',
      borderRadius:20 ,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    imageContainer: {
        height:65,
        width:65,
        marginTop:20,
        backgroundColor:'#F8AFA6',
        borderRadius:50 ,
        alignItems: 'center',
        justifyContent: 'flex-start', 
      },
      image: {
        height:65,
        width:90,   
      },
      title: {
        marginTop:8, 
        fontSize:13,
        fontWeight:'700'
      }, 
      description: {
        marginTop:2, 
        fontSize:11,
        fontWeight:'400',
        color:'gray'
      }, 
})

export default Category;