import { StyleSheet, Text,View ,TextInput,TouchableOpacity,TouchableWithoutFeedback,StatusBar,Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';


import {useState} from 'react';



  

const SignupScreen = ({ navigation }) => { 
    const [email, onChangeEmail] = useState(null);
    const [password, onChangePassword] = useState(null);
    const [confirmpassword, onChangeConfirmPassword] = useState(null);
    const [showPassword, onChangeShowPassword] = useState(false);
    const [showConfirmPassword, onChangeShowConfirmPassword] = useState(false);
    const hideShowPassword = () => {
        onChangeShowPassword(!showPassword);
      };
      const hideShowConfirmPassword = () => {
        onChangeShowConfirmPassword(!showConfirmPassword);
      };  

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
            
       </View>
               <TouchableWithoutFeedback onPress={() => navigation.navigate('Signup2')} >
                    <View style={styles.loginButton}>
                        <Text style={styles.loginButtonText}> SIGN UP</Text>
                    </View>
               </TouchableWithoutFeedback>
            
      
            <View style={styles.loginWithButton}>
                <Image style={styles.imageFacebook} source={require('../assets/facebook.png')}/>
                <View style={styles.textContainer}>
                 <Text style={styles.loginWithButtonText}>Continue with facebook</Text>
                </View>  
            </View>
            <View style={styles.loginWithButton}>
                <Image style={styles.imageApple} source={require('../assets/apple.png')}/>
                <View style={styles.textContainer}>
                <Text style={styles.loginWithButtonText}>Continue with apple</Text>
                </View>
            </View>
            <View style={styles.loginContainer}>
              <Text style={styles.loginWithButtonText}>Already have an account ? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                <Text style={[styles.loginWithButtonText,styles.loginLink]}>LOGIN </Text>
              </TouchableOpacity>
            </View>    
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


export default SignupScreen;