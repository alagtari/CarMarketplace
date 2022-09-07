import { StyleSheet, Text,View ,TextInput,TouchableOpacity,StatusBar,Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


  

const LoginScreen = ({ navigation }) => { 
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [confirmpassword, onChangeConfirmPassword] = useState(null);
  const [showPassword, onChangeShowPassword] = useState(false);
  const [showConfirmPassword, onChangeShowConfirmPassword] = useState(false);
  const [username, onChangeUsername] = useState(null);
  const [address, onChangeAddress] = useState(null);
  const [phoneNumber, onChangePhoneNumber] = useState(null);
 
  const hideShowPassword = () => {
      onChangeShowPassword(!showPassword);
    };
    const hideShowConfirmPassword = () => {
      onChangeShowConfirmPassword(!showConfirmPassword);
    };  
    const signupSubmission = ()=>{
      if(password===confirmpassword){
        const data ={
          username,
          email,
          password,
          address,
          phoneNumber
        } 
      axios.post('/register',data)
      .then((response)=>{
        if(response.status == 200){
          console.log(response.data) 
        } 
        else{
          console.log(response);
        }
      })
    
      navigation.navigate('Home')
    }
    }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"/> 
      <View style={styles.Header}>
      <View style={styles.innerHeader}>
      <Text style={styles.textHeader}>Registration</Text>
        </View>
      </View>
            
      <View style={styles.Body}>
      <View style={styles.InnerBody}>

      <View style={styles.formContainer}>
      <View style={styles.inputBox}>
                 <Feather style={styles.inputIcon} name="mail" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangeEmail}
                 value={email}
                 placeholder="Email"
                 placeholderTextColor="gray" 
                 />
            </View>
            <View style={styles.inputBox}>
                 <Ionicons style={styles.inputIcon} name="key-outline" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangePassword}
                 value={password}
                 placeholder="Password"
                 placeholderTextColor="gray" 
                 secureTextEntry={!showPassword}
                 />
                 {showPassword?
                 <TouchableOpacity onPress={hideShowPassword }>
                   <Text style={[styles.showhide]}>
                     Hide
                 </Text>  
                 </TouchableOpacity>
                  :
                 <TouchableOpacity onPress={hideShowPassword }>
                 <Text  style={[styles.showhide,{color:'rgb(0,120,255)'}]} >
                    Show
                </Text>
                 </TouchableOpacity>
                
                }
                 
            </View>
            <View style={styles.inputBox}>
                 <Ionicons style={styles.inputIcon} name="key-outline" size={20} color="gray" />
                 <TextInput
                 style={styles.input}
                 onChangeText={onChangeConfirmPassword}
                 value={confirmpassword}
                 placeholder="Confirm Password"
                 placeholderTextColor="gray" 
                 secureTextEntry={!showConfirmPassword}
                 />
                 {showConfirmPassword?
                 <TouchableOpacity onPress={hideShowConfirmPassword }>
                   <Text style={[styles.showhide]}>
                     Hide
                 </Text>  
                 </TouchableOpacity>
                  :
                 <TouchableOpacity onPress={hideShowConfirmPassword }>
                 <Text  style={[styles.showhide,{color:'rgb(0,120,255)'}]} >
                    Show
                </Text>
                 </TouchableOpacity>
                
                }
                 
            </View>
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
               <TouchableOpacity activeOpacity={2} style={styles.loginButton}  onPress={() => signupSubmission()} >
                        <Text style={styles.loginButtonText}>SIGN UP</Text>
               </TouchableOpacity>
            
      
            
      
      </View>
      </View>
      <View style={styles.Footer}>
      <View style={styles.innerFooter}>
            <View style={styles.loginWithSocialContainer}>
            <View style={styles.loginWithSocialIconContainer}>
                <Image style={styles.imageFacebook} source={require('../assets/facebook.png')}/> 
            </View>
            <View style={styles.loginWithSocialIconContainer}>
                <Image style={styles.imageApple} source={require('../assets/apple.png')}/>
            </View>
            </View>
            <View style={styles.signupContainer}>
                <Text style={styles.loginWithButtonText}>Have an account ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                  <Text style={[styles.loginWithButtonText,styles.signupLink]}>LOGIN </Text>
                </TouchableOpacity>
        </View>
           
        </View>
      </View>
      
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9250FF',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    
    Header: {
        flex:1,
        width:'100%',
        backgroundColor: 'rgb(255,255,255)',
      },
      innerHeader: {
        flex:1,
        width:'100%',
        backgroundColor: '#9250FF',
        borderBottomRightRadius:75, 
        alignItems: 'flex-start',
      justifyContent: 'flex-end',

      },
      Footer: {
        flex:1,
        width:'100%',
        backgroundColor: 'rgb(255,255,255)',
      },
      innerFooter: {
        flex:1,
        width:'100%',
        backgroundColor: '#9250FF',
        borderTopLeftRadius:75, 
        alignItems:'center',
        justifyContent:'flex-start'

      },
      textHeader:{
        marginBottom:20,
        marginLeft:20,
        fontSize:30,
        fontWeight:'600',
        color:'white' 
      },
      
      Body: {
        flex:3,
        width:'100%',
        borderTopLeftRadius:75,
        borderBottomRightRadius:75, 
        backgroundColor: 'rgb(255,255,255)',
        alignItems:'center',
        justifyContent:'center'


      },
      InnerBody: {
        flex:1,
        width:'100%',
        paddingTop:40,
        alignItems:'center',
        justifyContent:'center'


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
        marginBottom:10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'rgba(240,240,240,0.8)',
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
      marginBottom:40,
      backgroundColor:'#9250FF',
      borderRadius:17, 
      alignItems:'center',
      justifyContent:'center'
 
    },
    loginButtonText:{
        fontSize:17,
        fontWeight:'600',
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
      loginWithSocialContainer:{
        marginTop:15,
        flexDirection:'row',
      },
      loginWithSocialIconContainer:{
        height:50,
        width:50,
        paddingLeft:4,
        marginRight:5,
        marginLeft:5,
        backgroundColor:'white',
        borderRadius:50, 
        alignItems:'center',
        justifyContent:'center'
      },
      imageApple:{
          height:25,
          width:20,
          marginRight:5

      },
      imageFacebook:{
          height:25,
          width:25,
          marginRight:5

      },
       signupContainer:{
        width:'80%',
        height:50,
        paddingLeft:25,
        borderRadius:17, 
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

      },
      signupLink:{
        color:'white',
        fontWeight:'700'
      }

     
      
      
  });


export default LoginScreen;