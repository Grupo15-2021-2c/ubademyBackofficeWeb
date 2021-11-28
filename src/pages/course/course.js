import React, { useState, useEffect } from 'react';
import './course.css';
import { getCourseSelected, fetchCourseById, fetchSections, fetchCategories, getInscriptionSelected, getLoading } from '../../services/index';
import {  Modal, Label } from '../../components';
import { Loading } from '../../components';
import { Sections } from '../index';

const regex = /(\d+)/g;

function Course() {

  const [, setSectionsInfo] = useState([]);
  const [categoriesInfos, setCategoriesInfo] = useState([]);
  const [inscriptionSelected, setInscription ] = useState(getInscriptionSelected());
  const [show, setShow] = useState(false);
  const [ courseInfos, setCourse ] = useState(getCourseSelected());
  const [ loading, setLoading ] = useState(getLoading())
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const id = (window.location.pathname.match(regex));

  const handleShowInscriptions = () => {
    handleShow();
  }

  const handleRefresh = () => {
    setInscription(getInscriptionSelected());
    setLoading(getLoading());
}

  useEffect(() => {

    console.log(id[0]);
    setCourse(fetchCourseById(id[0]));

    fetchSections(courseInfos.id).then((sectionsData) => {
        setSectionsInfo(sectionsData);
    })
    
    fetchCategories(courseInfos.categoryId).then((categoriesData) => {
      setCategoriesInfo(categoriesData)

    setTimeout(() => {
        handleRefresh();
    }, 1000);
    
    });

  },[]);

  if(loading){
    return(
    <div className='resources'>
        <div className='resources-container'>
            <Loading/>
        </div>
    </div>
    );
}
  
  return (
    <div className='course'>
      { courseInfos && 
      <div className='course-container'>
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
          <button className='course-button' onClick={() => handleShowInscriptions()}>Inscriptions: {JSON.stringify(inscriptionSelected.length)}</button>
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
          <Sections/>
      </div>
      <Modal title={courseInfos} visibility={show} editing={false} onClose={handleClose}>
                {inscriptionSelected.map((inscription) => (
                  <>
                  <div className='modal-body'>
                      <u1 className='modal-list'>
                          <li className='modal-list-item'>
                              <Label text='User id'/>
                              <div className='modal-visualizing-container' >
                                  {JSON.stringify(inscription.id)}
                              </div>
                          </li>
                          <li className='modal-list-item'>
                              <Label text='First Name'/>
                              <div className='modal-visualizing-container' >
                                {inscription.firstName}
                              </div>
                          </li>
                          <li className='modal-list-item'>
                              <Label text='Last Name'/>
                              <div className='modal-visualizing-container' >
                                {inscription.lastName}
                              </div>
                          </li>
                          <li className='modal-list-item'>
                              <Label text='Email'/>
                              <div className='modal-visualizing-container' >
                                {inscription.email}
                              </div>
                          </li>
                      </u1>                    
                  </div>
                  </>
                  ))}
                <button onClick={() => handleClose()} 
                data-disabled='modal' className='modal-button-exit'>
                    Salir
                </button>
            </Modal>
      </div>}
 
    </div>
    );
  }

  export default Course;