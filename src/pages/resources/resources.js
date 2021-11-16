import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './resources.css';
import { Loading } from '../../components';
import { getResourcesSelected, getLoading } from '../../services/index';



function Resources() {

    const [ resourcesInfo, setResourcesInfo ] = useState(() => {return getResourcesSelected()});
    const [ loading, setLoading ] = useState(getLoading())

    const handleRefresh = () => {
        setResourcesInfo(getResourcesSelected());
        setLoading(getLoading());
    }
    useEffect(() => {
        setResourcesInfo(getResourcesSelected());
        setLoading(getLoading());
        setTimeout(() => {
            handleRefresh();
        }, 1000);
      },[]);


    if (loading){
        return(
        <div className='resources'>
            <div className='resources-container'>
                <Loading/>
            </div>
        </div>
        );
    }
    
    return (
        <div className='resources'>
            {resourcesInfo.map((resourceInfo) => (
                <>
                <h1 className='resources-title'> {resourceInfo.name} </h1>
                { !(resourceInfo.type.indexOf("video")) ?
                    <ReactPlayer className='resources-video-player'
                    url={resourceInfo.url}
                    width='60%'
                    height='80%'
                    controls
                    />
                : 
                <img src={resourceInfo.url} className="resources-image" alt="logo" />}
                </>
            ))}
        </div>
    );
  }
  
  export default Resources;