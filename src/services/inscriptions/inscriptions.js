import axios from 'axios';

const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/courses/';
let InscriptionSelectedState = [];

export const fetchInscriptionsList = (id) => {
    let payload = url + id + '/inscriptions';
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

export const getInscriptionSelected = () => { return InscriptionSelectedState; };

export const setInscriptionSelected = (inscriptionSelected) => { InscriptionSelectedState = inscriptionSelected; }