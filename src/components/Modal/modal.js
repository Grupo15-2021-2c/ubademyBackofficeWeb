import React from "react";
import { Box, Fade } from '@material-ui/core';
import './modal.css';


function Modal({children, childerFooter, title, onClose, onSave, visibility, editing}) {


    if(!visibility){
        return null;
    }


    return (
        <Fade in={visibility}>
        <Box className='modal-container' >
            <div className='modal-content'>
            <div className='modal-header'>
                <h4 className='modal-title'>
                    <b>{editing ? 'Editing' : 'Visualizing'}</b> {title.firstName} {title.lastName}
                </h4>
            </div>
            {children}
            {childerFooter}
            </div>
        </Box>
        </Fade>
    );
  }
  
  export default Modal;
