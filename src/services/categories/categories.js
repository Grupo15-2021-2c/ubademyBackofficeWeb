import axios from 'axios';
import {API_BASE_URL} from "../../constants/constants";
import { getValue } from '../index';

const url = API_BASE_URL + '/courses/';
let CategorySelectedState = null;
let varToken = '';
const user = getValue('user');
if (user){
    console.log("Sections Service", user);
    varToken = user.token;
}

export const fetchCategories = (id) => {
    let payload = url + 'categories/' + id;
    console.log(payload);
    return axios.get(payload,{
        headers: {
          Authorization: 'Bearer ' + varToken
        }
      })
    .then(({data}) => {
        //handle success
        return data.data;
    })
    .catch(err =>{
        //handle error
        console.error("error",err);
    })
  };

export const getCategorySelected = () => { return CategorySelectedState; };

export const setCategorySelected = (categorySelected) => { CategorySelectedState = categorySelected; };