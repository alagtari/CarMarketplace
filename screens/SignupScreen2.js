import { StyleSheet, Text,View ,TextInput,TouchableOpacity,TouchableWithoutFeedback,StatusBar,Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import {useState} from 'react';



  

const SignupScreen2 = ({ navigation }) => { 
    const [username, onChangeUsername] = useState(null);
    const [address, onChangeAddress] = useState(null);
    const [phoneNumber, onChangePhoneNumber] = useState(null);
   
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"/> 
      <View style={styles.container1}>
        <Text style={styles.textHeader}>Registration</Text>
           
          

      </View>
            
      <View style={styles.container2}>
      <View style={styles.formContainer}>
            <View style={styles.inputBox}>
                 <AntDesign style={styles.inputIcon} name="user" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangeUsername}
                 value={username}
                 placeholder="Username"
                 placeholderTextColor="gray" 
                 />
            </View>
            <View style={styles.inputBox}>
                 <FontAwesome style={styles.inputIcon} name="map-marker" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangeAddress}
                 value={address}
                 placeholder="Address"
                 placeholderTextColor="gray" 
                 />
            </View>
            <View style={styles.inputBox}>
                 <FontAwesome style={styles.inputIcon} name="phone" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangePhoneNumber}
                 value={phoneNumber}
                 placeholder="Phone Number"
                 placeholderTextColor="gray" 
                 />
            </View>
       
            
       </View>
       <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')} >
            <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}> SIGN UP</Text>
            </View>
       </TouchableWithoutFeedback>
            
         
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
        top:-20,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        height:'35%',
        width:'100%',
        backgroundColor: 'rgb(0, 120, 255)',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        transform: [{ skewY: '5deg' }],   
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 20,
          

        
      },
      textHeader:{
        transform: [{ skewY: '-5deg' }], 
        marginBottom:20,
        marginLeft:20,
        fontSize:30,
          fontWeight:'600',
          color:'white' 
      },

      container2: {
        height:'41.5%',
        width:'100%',
     
        marginBottom:'15%',
        alignItems:'center',
        justifyContent:'flex-start'


      },
      formContainer:{
        marginTop:20,
        width:'90%',
        alignItems:'center',
        justifyContent:'center'
        
      },
      inputBox:{
        flexDirection:'row',
        width:'90%',
        height:50,
        paddingLeft:20,
        marginBottom:5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'white',
        borderRadius:17, 
      },
      input:{
        width:'70%', 
        color:'gray',
        fontSize:13
      },
      inputIcon:{
          marginRight:5
      },
      showhide:{
        color:'gray',
        fontSize:13,
        fontWeight:'700'  
    },
    loginButton:{
      width:'60%',
      height:50,
      marginTop:15,
      marginBottom:20,
      backgroundColor:'rgb(0,120,255)',
      borderRadius:17, 
      alignItems:'center',
      justifyContent:'center'
 
    },
    loginButtonText:{
        fontSize:15,
        fontWeight:'500',
        color:'white' 
    },
    loginWithButton:{
        width:'80%',
        height:50,
        marginTop:5,
        paddingLeft:25,
        backgroundColor:'white',
        borderRadius:17, 
        flexDirection:'row',
        alignItems:'center',
   
      },textContainer:{
        width:'80%',
        alignItems:'center',
      },
      loginWithButtonText:{
          fontSize:13,
          fontWeight:'500',
          color:'black' 
      },
      imageApple:{
          height:20,
          width:16,
          marginRight:5

      },
      imageFacebook:{
          height:20,
          width:20,
          marginRight:5

      },loginContainer:{
        width:'80%',
        height:50,
        paddingLeft:25,
        borderRadius:17, 
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

      },
      loginLink:{
        color:'rgb(0,120,255)',
        fontWeight:'700'
      }

     
      
      
  });


export default SignupScreen2;