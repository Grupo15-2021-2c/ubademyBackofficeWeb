import axios from 'axios';
import { setLoading } from '../index';
import {API_BASE_URL} from "../../constants/constants";
import { getValue } from '../index';

const url = API_BASE_URL + '/courses/';
let InscriptionSelectedState = [];
let varToken = '';
const user = getValue('user');
if (user){
    console.log("Sections Service", user);
    varToken = user.token;
}

export const fetchInscriptionsList = (id) => {
    let payload = url + id + '/inscriptions';
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
    .catch(err =>{
        //handle error
        console.error("error",err);
    })
  };

export const getInscriptionSelected = () => { return InscriptionSelectedState; };

export const setInscriptionSelected = (inscriptionSelected) => { InscriptionSelectedState = inscriptionSelected; }