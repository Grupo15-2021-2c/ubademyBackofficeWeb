import axios from 'axios';
import { setLoading } from '../index';

const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/courses/';
let InscriptionSelectedState = [];

export const fetchInscriptionsList = (id) => {
    let payload = url + id + '/inscriptions';
    console.log(payload);
    setLoading(true);
    console.log("loading");
    return axios.get(payload)
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

export const getInscriptionSelected = () => { 
    console.log("get", InscriptionSelectedState);
    return InscriptionSelectedState; };

export const setInscriptionSelected = (inscriptionSelected) => { 
    
    InscriptionSelectedState = inscriptionSelected; 
    console.log("set", InscriptionSelectedState);}