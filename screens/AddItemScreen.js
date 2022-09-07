import { StyleSheet,ScrollView, Text,View ,TextInput,TouchableOpacity,Image,StatusBar,Alert, Modal, Pressable,} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useState} from "react";
import {Dimensions} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const {height, width} = Dimensions.get('window');

const AddItemScreen = ({route,navigation}) => {

    const { category } = route.params;  

    const [name, onChangeName] = useState(null);
    const [price, onChangePrice] = useState(null);
    const [description, onChangeDescription] = useState(null);
    const [color, onChangeColor] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [year, onChangeYear] = useState(null);
    const [km, onChangeKm] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
   
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          setPhoto(result.uri);
        }
      };
    
    const addItem =async()=>{
      const token =  await AsyncStorage.getItem('token')
      axios.post('/car',{
        name,
        price,
        color,
        category,
        description,
        photo,
        year,
        mileage:km
      }, {
        headers: {
          'Authorization': token
        }
      })
      .then(response=>{
        if(response.status == 200){
          setModalVisible(true)
          setTimeout(()=>{
            setModalVisible(false)
            navigation.navigate('Home')
          }, 2000)
          
      } 
      })
       
    }  
    return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled' style={styles.container}>
            <StatusBar
              barStyle="light-content"/>
            <View style={styles.titleBox} >
                <Text style={styles.title}>New Listing</Text>
            </View>
            
            {photo?<Image source={{ uri: photo }} style={ styles.uploadImageBox} />:
            <TouchableOpacity activeOpacity={2} style={styles.uploadImageBox} onPress={pickImage}> 
                 <EvilIcons name="camera" size={50} color="gray" />
            </TouchableOpacity>
            }
             <View style={styles.formContainer}>
             <View style={styles.inputBox}>
                 <Feather style={styles.inputIcon} name="edit-2" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangeName}
                 value={name}
                 placeholder="Model Name"
                 placeholderTextColor="gray" 
                 />
             </View>
             <View style={styles.doubleInputRow}>
             <View style={styles.smallInputBox}>
                 <Ionicons style={styles.inputIcon} name="ios-pricetag-outline" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangePrice}
                 value={price}
                 placeholder="Price"
                 placeholderTextColor="gray" 
                 keyboardType="numeric"
                 />
             </View>
             <View style={styles.smallInputBox}>
                 <Ionicons style={styles.inputIcon} name="speedometer-outline" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangeKm}
                 value={km}
                 placeholder="Mileage"
                 placeholderTextColor="gray" 
                 keyboardType="numeric"
                 />
             </View>
             </View>
             <View style={styles.doubleInputRow}>
             <View style={styles.smallInputBox}>
             <Ionicons style={styles.inputIcon} name="color-palette-outline" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangeColor}
                 value={color}
                 placeholder="Color"
                 placeholderTextColor="gray" 
                 />
             </View>
             <View style={styles.smallInputBox}>
             <AntDesign style={styles.inputIcon} name="calendar" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangeYear}
                 value={year}
                 placeholder="Year"
                 placeholderTextColor="gray" 
                 />
             </View>
             </View>
             <TouchableOpacity activeOpacity={2} style={styles.inputBox} onPress={() => navigation.navigate('Categories')} >
                 <Ionicons style={styles.inputIcon} name="ios-grid-outline" size={20} color="gray" />
                 <Text 
                 style={styles.input}>{category?category:"Category"}</Text>
             </TouchableOpacity>
             <View style={styles.TextArea}>
                 <Feather style={styles.descriptionIcon} name="file-text" size={20} color="gray" />
                 <TextInput
                 multiline={true}
                 numberOfLines={4}
                 style={styles.description}
                 onChangeText={onChangeDescription}
                 value={description}
                 placeholder="Description"
                 placeholderTextColor="gray" 
                 />
             </View>
             <TouchableOpacity activeOpacity={2} style={styles.buttonBox} onPress={() => addItem()} >
                 <Text style={styles.button}>Post</Text>
             </TouchableOpacity>
             <Pressable
                style={styles.cancelButtonBox}
                onPress={() => {navigation.navigate('Home')}}
              >
                  <Text style={styles.cancelButton}>Cancel</Text>
              </Pressable>
           </View> 
           
           <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Car added !</Text>
                <AntDesign  name="checkcircleo" size={90} color="green" />

                
              </View>
            </View>
          </Modal>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingLeft:20
    },
    titleBox:{
        marginTop:"10%",
        justifyContent: 'flex-start',
        
      },
      uploadImageBox:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        width:height/6,
        height:height/6,
        backgroundColor:'rgba(240,240,240,0.8)',
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
        backgroundColor:'rgba(240,240,240,0.8)',
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
        backgroundColor:'rgba(240,240,240,0.8)',
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
        backgroundColor:'#9250FF',
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
      doubleInputRow:{
        flexDirection:'row',
        marginBottom:10,
        width:'100%'
      },
      smallInputBox:{
        flexDirection:'row',
        width:'44 %',
        height:50,
        paddingLeft:20,
        marginRight:'2%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'rgba(240,240,240,0.8)',
        borderRadius:50, 
      },
      centeredView: {
        position:'absolute',
        height:'90%',
        width:'100%',
        bottom:0,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor:'rgba(255,255,255,0.7)'
      },
      modalView: {
        margin: 20,
        height:250,
        width:250,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      
      
      
      modalText: {
        fontSize:20,
        marginBottom: 15,
        textAlign: "center"
      }

    

      
      
  });


export default AddItemScreen;