import React from "react";
import { Box, Fade } from '@material-ui/core';
import './modal.css';
import PropTypes from 'prop-types';


function Modal({children, childerFooter, title, visibility, editing}) {


    if(!visibility){
        return null;
    }

    Modal.propTypes = {
        children: PropTypes.node.isRequired,
        childerFooter: PropTypes.node.isRequired,
        title: PropTypes.node.isRequired,
        visibility: PropTypes.node.isRequired,
        editing: PropTypes.node.isRequired,
    };

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
