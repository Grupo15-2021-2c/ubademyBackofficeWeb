import React, { useState, useEffect } from 'react';
import './sections.css';
import { fetchSections, getCourseSelected } from '../../services/index';



function Sections() {

    const [sectionsInfos, setSectionsInfo] = useState([]);
    const [courseInfos ] = useState(getCourseSelected());

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
                <button className='section-info-sections'>
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
                </>
            ))}
        </div>
    );
  }
  
  export default Sections;