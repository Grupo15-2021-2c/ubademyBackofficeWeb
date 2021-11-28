import axios from 'axios';

const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/courses';
let CourseSelectedState = null;

export const fetchCourseList = () => {
    return axios.get(url)
    .then(({data}) => {
        //handle success
        return data.data;
    })
    .catch(err =>{
        //handle error
        console.error("error",err);
    })
  };

export const fetchCourseById = (id) => {
    let payload = url + '/' + id;
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

export const getCourseSelected = () => { return CourseSelectedState; };

export const setCourseSelected = (courseSelected) => { CourseSelectedState = courseSelected; };