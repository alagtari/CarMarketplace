import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';



export const getOwnedCars =  async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      let response = await axios.get(`/car`, {
        headers: {
          'Authorization': token
        }
      })
    if(response.status == 200){
        await AsyncStorage.setItem('OwnedCars', JSON.stringify(response.data))
    }    
      
      } catch (error) {
        console.log(error);
      }
}

export const getCarById =  async(id) => {
  const token = await AsyncStorage.getItem('token');
    try {
      let response = await axios.get(`/car/${id}`, {
        headers: {
          'Authorization': token
        }
      })
      if(response.status == 200){
        await AsyncStorage.setItem('@car', JSON.stringify(response.data))
      }    
      
      } catch (error) {
        console.log(error);
      }
    
    
}

export const getCarsByCategory =  async(category) => {
    try {
      let response = await axios.get(`/car/category/${category}`)
    if(response.status == 200){
      await AsyncStorage.setItem('CarsByCategory', JSON.stringify(response.data))
    }    
      
      } catch (error) {
        console.log(error);
      }
    
    
}

export const searchCars =  async(carName) => {
    try {
      let response = await axios.get(`/car/search/${carName}`)
    if(response.status == 200){
      await AsyncStorage.setItem('@searchedCars', JSON.stringify(response.data))
    }      
      } catch (error) {
        console.log(error);
      }
    
    
}

export const deleteCarById =  async(id) => {

  const token = await AsyncStorage.getItem('token', {
    headers: {
      'Authorization': token
    }
  })

    try {
      let response = await axios.delete(`/car/${id}`)
    if(response.status == 200){
        return response.data
    }    
      
      } catch (error) {
        console.log(error);
      }
    
    
}