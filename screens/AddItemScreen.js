import { StyleSheet, Text,View,FlatList ,TextInput,TouchableWithoutFeedback,Image,StatusBar} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import React from "react";
import {Dimensions} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const {height, width} = Dimensions.get('window');

const AddItemScreen = ({navigation}) => {
    const [CarName, onChangeCarName] = React.useState(null);
    const [Price, onChangePrice] = React.useState(null);
    const [Description, onChangeDescription] = React.useState(null);
    const [Color, onChangeColor] = React.useState(null);
    const [category, onChangeCategory] = React.useState(null);
    const [image, setImage] = React.useState(null);
   
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
    return (
    <View style={styles.container}>
            <StatusBar
              barStyle="light-content"/>
            <View style={styles.titleBox} >
                <Text style={styles.title}>New Listing</Text>
            </View>
            
            {image?<Image source={{ uri: image }} style={ styles.uploadImageBox} />:
            <TouchableWithoutFeedback onPress={pickImage}> 
                <View style={styles.uploadImageBox}>
                 <EvilIcons name="camera" size={50} color="gray" />
                </View>     
            </TouchableWithoutFeedback>
            }
             <View style={styles.formContainer}>
             <View style={styles.inputBox}>
                 <Feather style={styles.inputIcon} name="edit-2" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangeCarName}
                 value={CarName}
                 placeholder="Car Name"
                 placeholderTextColor="gray" 
                 />
             </View>
             <View style={styles.inputBox}>
                 <Ionicons style={styles.inputIcon} name="ios-pricetag-outline" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangePrice}
                 value={Price}
                 placeholder="Price"
                 placeholderTextColor="gray" 
                 keyboardType="numeric"
                 />
             </View>
             <View style={styles.inputBox}>
             <Ionicons style={styles.inputIcon} name="color-palette-outline" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangeColor}
                 value={Color}
                 placeholder="Color"
                 placeholderTextColor="gray" 
                 />
             </View>
             <TouchableWithoutFeedback onPress={() => navigation.navigate('Categories')} >
              <View style={styles.inputBox}>
                 <Ionicons style={styles.inputIcon} name="ios-grid-outline" size={20} color="gray" />
                 <Text 
                 style={styles.input}>Category</Text>
              </View>   
             </TouchableWithoutFeedback>
             <View style={styles.TextArea}>
                 <Feather style={styles.descriptionIcon} name="file-text" size={20} color="gray" />
                 <TextInput
                 multiline={true}
                 numberOfLines={4}
                 style={styles.description}
                 onChangeText={onChangeDescription}
                 value={Description}
                 placeholder="Description"
                 placeholderTextColor="gray" 
                 />
             </View>
             <View style={styles.buttonBox}>
                 <Text style={styles.button}>Post</Text>
             </View>
             <View style={styles.cancelButtonBox}>
                 <Text style={styles.cancelButton}>Cancel</Text>
             </View>
           </View> 
           
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 255, 0.05)',
      paddingLeft:20
    },
    titleBox:{
        marginTop:"15%",
        justifyContent: 'flex-start',
        
      },
      uploadImageBox:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        width:height/6,
        height:height/6,
        backgroundColor:'rgba(255,255,255,0.7)',
        borderRadius:25
        
      },  
    title:{
      fontSize:25,
      fontWeight:'700',
        
      },

     formContainer:{
        alignItems: 'flex-start',
        marginTop:20,
        width:'100%',
        
      },
      inputBox:{
        flexDirection:'row',
        width:'90%',
        height:50,
        paddingLeft:20,
        marginBottom:10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'white',
        borderRadius:50, 
      },
      TextArea:{
        flexDirection:'row',
        width:'90%',
        height:'25%',
        paddingLeft:20,
        marginBottom:20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor:'white',
        borderRadius:25, 
      },
      description:{
        marginTop:10,
        width:'80%', 
        color:'gray',
        fontSize:13
      },
      descriptionIcon:{
        marginTop:13,
          marginRight:5
      },
      input:{
        width:'80%', 
        color:'gray',
        fontSize:13
      },
      inputIcon:{
          marginRight:5
      },
      buttonBox:{
        width:'90%',
        height:50,
        marginBottom:10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgb(0, 120, 255)',
        borderRadius:50, 
      },
      button:{
        fontSize:20,
        fontWeight:'700',
        color:'white' 
      },
      cancelButtonBox:{
        width:'90%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      cancelButton:{
        fontSize:17,
        fontWeight:'700',
      },

    

      
      
  });


export default AddItemScreen;