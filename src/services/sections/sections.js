import axios from 'axios';
import { setLoading } from '../index';
import {API_BASE_URL} from "../../constants/constants";


const url = API_BASE_URL + '/courses/';
let SectionSelectedState = null;

export const fetchSections = (id) => {
    let payload = url + id + '/sections';
    setLoading(true);
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

export const getSectionSelected = () => { return SectionSelectedState; };

export const setSectionSelected = (sectionSelected) => { SectionSelectedState = sectionSelected; };