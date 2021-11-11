import axios from 'axios';

const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/courses/';
let SectionSelectedState = null;

export const fetchSections = (id) => {
    let payload = url + id + '/sections';
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

export const getSectionSelected = () => { return SectionSelectedState; };

export const setSectionSelected = (sectionSelected) => { SectionSelectedState = sectionSelected; };