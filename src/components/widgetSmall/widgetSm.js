import React from "react";
import './widgetSm.css';
import jovenConfiado from '../../images/joven-confiado.jpg';
import hombreRastas from '../../images/hombre-rastas.jpg';
import mujerJoven from '../../images/mujer-joven.jpg';
import { Visibility } from "@material-ui/icons";


function WidgetSm() {

    return (
      <div className='widgetSm-container'>
        <span className='widgetSm-title'>New Join Members</span>
        <ui className='widgetSm-list' >
          <li className='widgetSm-list-item'>
            <img src={jovenConfiado} alt='' className='widgetSm-image'/>
            <div className='widgetSm-user'>
              <span className='widgetSm-username'>Daniel Kumar</span>
              <span className='widgetSm-user-title'>Protesista Dental</span>
            </div>
            <button className='widgetSm-button'>
              <Visibility className='widgetSm-icon'/>
              Display
            </button>
          </li>
          <li className='widgetSm-list-item'>
            <img src={hombreRastas} alt='' className='widgetSm-image'/>
            <div className='widgetSm-user'>
              <span className='widgetSm-username'>Bob Marley </span>
              <span className='widgetSm-user-title'>Licenciado en Música </span>
            </div>
            <button className='widgetSm-button'>
            <Visibility className='widgetSm-icon'/>
              Display
            </button>
            </li>
            <li className='widgetSm-list-item'>
            <img src={mujerJoven} alt='' className='widgetSm-image'/>
            <div className='widgetSm-user'>
              <span className='widgetSm-username'>Ana Miller </span>
              <span className='widgetSm-user-title'>Psicóloga Escolar </span>
            </div>
            <button className='widgetSm-button'>
            <Visibility className='widgetSm-icon'/>
              Display
            </button>
          </li>
          <li className='widgetSm-list-item'>
            <img src={jovenConfiado} alt='' className='widgetSm-image'/>
            <div className='widgetSm-user'>
              <span className='widgetSm-username'>Daniel Kumar</span>
              <span className='widgetSm-user-title'>Protesista Dental</span>
            </div>
            <button className='widgetSm-button'>
              <Visibility className='widgetSm-icon'/>
              Display
            </button>
          </li>
          <li className='widgetSm-list-item'>
            <img src={hombreRastas} alt='' className='widgetSm-image'/>
            <div className='widgetSm-user'>
              <span className='widgetSm-username'>Bob Marley </span>
              <span className='widgetSm-user-title'>Licenciado en Música </span>
            </div>
            <button className='widgetSm-button'>
              <Visibility className='widgetSm-icon'/>
              Display
            </button>
            </li>
            <li className='widgetSm-list-item'>
            <img src={mujerJoven} alt='' className='widgetSm-image'/>
            <div className='widgetSm-user'>
              <span className='widgetSm-username'>Ana Miller </span>
              <span className='widgetSm-user-title'>Psicóloga Escolar </span>
            </div>
            <button className='widgetSm-button'>
              <Visibility className='widgetSm-icon'/>
              Display
            </button>
          </li>
        </ui>
      </div>
    );
  }
  
  export default WidgetSm;