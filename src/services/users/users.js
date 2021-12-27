import axios from 'axios';
import {API_BASE_URL} from "../../constants/constants";
import { getValidToken, removeValidToken } from '../token/token';


const url = API_BASE_URL + '/users';
let varToken= getValidToken();

export const fetchUserList = () => {
    return axios.get(url,{
        headers: {
          Authorization: 'Bearer ' + varToken
        }
      })
    .then(({data}) => {
        //handle succes
        return data.data;
    })
    .catch(error =>{
        //handle error
        console.error("error: ",error.response.data.message);
        if(error.response.data.message === 'JwtParseError: Jwt is expired'){
            console.log('Removing data...');
            removeValidToken();
        }
    });
}

export const handleBlockUser = (id, blocked) => {
    let payload = '';
    console.log(blocked);
    if (!blocked){
        payload = url + "/" + id + "/block";
    }else{
        payload = url + "/" + id + "/unblock";
    }
    console.log('Bearer ' + varToken);
    return axios.patch(payload, 700,{
      headers: {
        Authorization: 'Bearer ' + varToken,
      }
    })
    .then(res => {
        //handle succes
        console.log(res);            
        return res.data;
    })
    .catch(error =>{
        //handle error
        console.error("error",error.response.data.message);
        return error;
    })
}