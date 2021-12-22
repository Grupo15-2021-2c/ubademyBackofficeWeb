import axios from 'axios';
import { setLoading } from '../index';
import {API_BASE_URL} from "../../constants/constants";
import { getValidToken, removeValidToken } from '../token/token';

const url = API_BASE_URL + '/courses/';
let SectionSelectedState = null;
let varToken= getValidToken();

export const fetchSections = (id) => {
    let payload = url + id + '/sections';
    setLoading(true);
    return axios.get(payload,{
        headers: {
          Authorization: 'Bearer ' + varToken
        }
      })
    .then(({data}) => {
        //handle success
        setLoading(false);
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

export const getSectionSelected = () => { return SectionSelectedState; };

export const setSectionSelected = (sectionSelected) => { SectionSelectedState = sectionSelected; };