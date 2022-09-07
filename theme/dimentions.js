import {Dimensions} from 'react-native';

const {h, w} = Dimensions.get('window');

const width= (percentage)=>{
    return  (w/100)*percentage
}

const height= (percentage)=>{
    return  (h/100)*percentage
}

export{width,height}