import axios from 'axios';
import {API_BASE_URL} from "../../constants/constants";
import { getValidToken, removeValidToken } from '../token/token';

const url = API_BASE_URL + '/courses';
let CourseSelectedState = null;
let varToken= getValidToken();

export const fetchCourseList = () => {
    return axios.get(url,{
        headers: {
          Authorization: 'Bearer ' + varToken
        }
      })
    .then(({data}) => {
        //handle success
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

export const fetchCourseById = (id) => {
    let payload = url + '/' + id;
    return axios.get(payload)
    .then(({data}) => {
        //handle success
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

export const getCourseSelected = () => { return CourseSelectedState; };

export const setCourseSelected = (courseSelected) => { CourseSelectedState = courseSelected; };