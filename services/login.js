import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login =  async(email,password) => {
    try {
      let response = await axios.post('/login',{
        email,
        password
      })
    if(response.status == 200){
        await AsyncStorage.setItem('token', response.data.token)
        
    }    
      } catch (error) {
        console.log(error);
      }
    
    return ;
}