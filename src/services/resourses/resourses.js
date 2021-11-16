import axios from 'axios';
import { setLoading } from '../index';

const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/courses/';
let ResourcesSelectedState = [];

export const fetchResourcesList = (courseId, sectionId) => {
    let payload = url + courseId + '/sections/' + sectionId + '/resources';
    setLoading(true);
    return axios.get(payload)
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
