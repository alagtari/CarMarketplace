import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
//feha mochkla 
export const getSaved =  async() => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    try {
      let response = await axios.get(`/saved`, {
        headers: {
          'Authorization': token
        }
      })
    if(response.status == 200){
        await AsyncStorage.setItem('@savedCars', JSON.stringify(response.data))
    }    
      } catch (error) {
      }
}

export const Save =  async(id) => {
    const token = await AsyncStorage.getItem('token');
    try {
      let response = await axios.post(`/saved/?car_id=${id}`, {
        headers: {
          'Authorization': token
        }
      })
    if(response.status == 200){
        
    }    
      } catch (error) {
      }
}

export const Unsave =  async(id) => {
    const token = await AsyncStorage.getItem('token');
    try {
      console.log(token);
      let response = await axios.put(`/saved?car_id=630cf406e8ebf5727bc0a5f4`,{
        headers: {
          'Authorization': token
        }
      })
      } catch (error) {
      }
}
