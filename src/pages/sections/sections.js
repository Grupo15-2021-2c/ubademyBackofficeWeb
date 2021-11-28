import React, { useState, useEffect } from 'react';
import './sections.css';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; //Router, Switch, Route,
import { fetchSections, getCourseSelected, fetchResourcesList, setResourcesSelected } from '../../services/index';



function Sections() {

    const [sectionsInfos, setSectionsInfo] = useState([]);
    const [ courseInfos ] = useState(getCourseSelected());

    const handleResources = (courseId, sectionId) =>{
        fetchResourcesList(courseId, sectionId).then((resourcesInfo) => {
            setResourcesSelected(resourcesInfo);
        }); 
    }

    useEffect(() => {
        fetchSections(courseInfos.id).then((sectionsData) => {
            setSectionsInfo(sectionsData);
        })
            
      },[]);

    return (
        <div>
            {sectionsInfos.map((section) => (
                <>
                <div className='section-subtitle-container'>
                    <h2 className='section-subtitle'>
                        {section.subtitle}
                    </h2>
                </div>
                <Link exact to={window.location.pathname + '/section/' + section.id + '/resources'} onClick={() => handleResources(courseInfos.id, section.id)}  activeClassName='active'>
                    <button className='section-info-sections' >                
                        <div className='section-list-item'>
                            <span>Id: </span>
                            <span>{section.id}</span>
                        </div>
                        <div className='section-list-item'>
                            <span>About: </span>
                        </div>
                        <div className='section-list-item'>
                            <span>{section.body}</span>
                        </div>
                    </button>
                </Link>
                </>
            ))}
        </div>
    );
  }
  
  export default Sections;

  //mostrar nombre del curso, categoria y nombre del owner