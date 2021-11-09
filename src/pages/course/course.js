import React, { useState, useEffect } from 'react';
import './course.css';
/*import { Title, Modal, Label, Input, passwordRegex, validateEmail } from '../../components';
/*import { DataGrid, getInitialGridColumnResizeState } from "@material-ui/data-grid";
import { Visibility, BlockOutlined } from "@material-ui/icons";*/
import { getCourseSelected } from '../../services/index';
import axios from 'axios';

const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/courses/';


function Course() {


  //const [courseInfos, setCourseInfos] = useState();
  const [sectionsInfos, setSectionsInfo] = useState([]);
  const [categoriesInfos, setCategoriesInfo] = useState([]);
  const [toggleRefreshList, setToggleRefreshList] = useState(false);


  const courseInfos = getCourseSelected();

  const fetchSections = (id) => {
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
  }

  const fetchCategories = (id) => {
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
  }

  useEffect(() => {
    fetchSections(courseInfos.id).then((sectionsData) => {
        setSectionsInfo(sectionsData);
    })
    
    fetchCategories(courseInfos.categoryId).then((categoriesData) => {
      setCategoriesInfo(categoriesData)
    });

  },[toggleRefreshList]);


  return (
    <div className='course'>
      { courseInfos && 
      <>
      <div className='course-title-container'>
        <h1 className='course-title'>
          Course {courseInfos.title}
        </h1>
      </div>
      <div className='course-info'>
        <div className='course-list-item'>
          <span>Id: </span>
          <span> {JSON.stringify(courseInfos.id)}</span>
        </div>
        <div className='course-list-item'>
          <span>Owner: </span>
          <span> {JSON.stringify(courseInfos.owner)}</span>
        </div>
        <div className='course-list-item'>
          <span>Category: </span>
          <span> {JSON.stringify(categoriesInfos.name)}</span>
        </div>
        <div className='course-list-item'>
          <span>Blocked: </span>
          <span> {JSON.stringify(courseInfos.blocked)}</span>
        </div>
        <div className='course-list-item'>
          <span>Description: </span>
          <span> {JSON.stringify(courseInfos.description)}</span>
        </div>
      </div>
      <div className='course-title-container'>
          <h1 className='course-title'>
            Sections:
          </h1>
      </div>
      {!sectionsInfos.lenght ? sectionsInfos.map((section) => (
        <>
          <div className='course-subtitle-container'>
              <h2 className='course-subtitle'>
                {section.subtitle}
              </h2>
          </div>
          <div className='course-info'>
            <div className='course-list-item'>
              <span>Id: </span>
              <span>{section.id}</span>
            </div>
            <div className='course-list-item'>
              <span>About: </span>
            </div>
            <div className='course-list-item'>
              <span>{section.body}</span>
            </div>
          </div>
        </>
      ))
      : <h1 className='course-title'> No Sections For this Course </h1>}
      </>}
    </div>
    );
  }

  export default Course;