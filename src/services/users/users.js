import axios from 'axios';
import {API_BASE_URL} from "../../constants/constants";
import { getValue } from '../index';


const url = API_BASE_URL + '/users';
const user = getValue('user');
let varToken= '';
if (user){
    console.log("User Service", user);
    varToken = user.token;
}

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
    .catch(err =>{
        //handle error
        console.error("error",err);
    })
}

export const handleBlockUser = (id, blocked) => {
    let payload = '';
    console.log(blocked);
    if (!blocked){
        payload = url + "/" + id + "/block";
    }else{
        payload = url + "/" + id + "/unblock";
    }
    console.log(payload);
    return axios.patch(payload,{
        headers: {
          Authorization: 'Bearer ' + varToken
        }
      })
        .then(res => {
            //handle succes
            console.log(res);            
            return res.data;
        })
        .catch(err =>{
            //handle error
            console.error("error",err);
            return err;
        })
}