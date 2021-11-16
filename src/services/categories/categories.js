import axios from 'axios';


const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/courses/';
let CategorySelectedState = null;

export const fetchCategories = (id) => {
    let payload = url + 'categories/' + id;
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

export const getCategorySelected = () => { return CategorySelectedState; };

export const setCategorySelected = (categorySelected) => { CategorySelectedState = categorySelected; };