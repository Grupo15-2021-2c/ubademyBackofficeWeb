import axios from 'axios';
import { setLoading } from '../index';
import {API_BASE_URL} from "../../constants/constants";
import { getValue } from '../index';

const url = API_BASE_URL + '/courses/';
let ResourcesSelectedState = [];
let varToken = '';
const user = getValue('user');
if (user){
    console.log("Sections Service", user);
    varToken = user.token;
}

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
    .catch(err =>{
        //handle error
        console.error("error",err);
    })
};

export const setResourcesSelected = (resources) =>{ ResourcesSelectedState = resources }

export const getResourcesSelected = () =>{ 
    console.log(ResourcesSelectedState);
    return ResourcesSelectedState; }