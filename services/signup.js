import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signup =  async(username,email,password,address,phoneNumber) => {
    try {
      let response = await axios.post('/register',{
        username,
        email,
        password,
        address,
        phoneNumber
      })
    if(response.status == 200){
        console.log(res.data)
        await AsyncStorage.setItem('token', response.data.token)   
    }    
      
      } catch (error) {
        console.log(error);
      }
    
    return ;
}