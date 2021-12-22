import axios from 'axios';
import { setLoading } from '../index';
import {API_BASE_URL} from "../../constants/constants";
import { getValidToken, removeValidToken } from '../token/token';

const url = API_BASE_URL + '/courses/';
let ResourcesSelectedState = [];
let varToken= getValidToken();

export const fetchResourcesList = (courseId, sectionId) => {
    let payload = url + courseId + '/sections/' + sectionId + '/resources';
    setLoading(true);
    return axios.get(payload,{
        headers: {
          Authorization: 'Bearer ' + varToken
        }
      })
    .then(({data}) => {
        //handle success
        setLoading(false);
        ResourcesSelectedState = data.data;
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

export const setResourcesSelected = (resources) =>{ ResourcesSelectedState = resources }

export const getResourcesSelected = () =>{ 
    console.log(ResourcesSelectedState);
    return ResourcesSelectedState; }