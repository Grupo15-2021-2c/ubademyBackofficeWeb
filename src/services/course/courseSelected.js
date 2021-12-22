import axios from 'axios';
import {API_BASE_URL} from "../../constants/constants";
import { getValue } from '../index';

const url = API_BASE_URL + '/courses';
let CourseSelectedState = null;
let varToken = '';
const user = getValue('user');
if (user){
    console.log("Sections Service", user);
    varToken = user.token;
}

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
    .catch(err =>{
        //handle error
        console.error("error",err);
    })
  };

export const fetchCourseById = (id) => {
    let payload = url + '/' + id;
    return axios.get(payload)
    .then(({data}) => {
        //handle success
        return data.data;
    })
    .catch(err =>{
        //handle error
        console.error("error",err);
    })
  };

export const getCourseSelected = () => { return CourseSelectedState; };

export const setCourseSelected = (courseSelected) => { CourseSelectedState = courseSelected; };