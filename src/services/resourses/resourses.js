import axios from 'axios';

const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/resources/courses/';

export const fetchResourcesList = (courseId, sectionId) => {
    let payload = url + courseId + '/sections/' + sectionId;
    console.log(payload);
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

