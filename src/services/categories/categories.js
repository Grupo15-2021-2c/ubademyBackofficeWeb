import axios from 'axios';
import {API_BASE_URL} from "../../constants/constants";
import { getValidToken, removeValidToken } from '../token/token';

const url = API_BASE_URL + '/courses/';
let CategorySelectedState = null;
let varToken= getValidToken();

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
        console.log(data.data);
        return data.data;
    })
    .catch(error =>{
        //handle error
        console.error("error",error.response.data.message);
        if(error.response.data.message === 'JwtParseError: Jwt is expired'){
          console.log('Removing data...');
          removeValidToken();
      }
    })
  };

export const getCategorySelected = () => { return CategorySelectedState; };

export const setCategorySelected = (categorySelected) => { CategorySelectedState = categorySelected; };