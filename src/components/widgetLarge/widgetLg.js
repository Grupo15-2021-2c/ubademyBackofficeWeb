import React, { useEffect, useState } from "react";
import './widgetLg.css';
import jovenConfiado from '../../images/joven-confiado.jpg';
import axios from 'axios';
import {API_BASE_URL} from "../../constants/constants";

const url = API_BASE_URL + '/users';


function WidgetLg() {

  const [userInfos, setUserInfos] = useState([]);
  const [toggleRefreshList, setToggleRefreshList] = useState(false);


  const fetchUserList = () => {
    return axios.get(url)
    .then(({data}) => {
        //handle succes
        setToggleRefreshList(toggleRefreshList);
        return data.data;
    })
    .catch(err =>{
        //handle error
        console.error("error",err);
    })
  }

  useEffect(() => {
    fetchUserList().then((userData) => {
        //setUserData(JSON.stringify(userData) || 'No user data found');
        setUserInfos(userData);
    });
  },[toggleRefreshList]);

    return (
      <div className='widgetLg-container'>
        <span className='widgetLg-title'>Join Members</span>
        <table className='widgetLg-table' >
          <tr className='widgetLg-tr'>
            <th className='widgetLg-th' >Customer </th>
            <th className='widgetLg-th' >Name </th>
            <th className='widgetLg-th' >Email </th>
            <th className='widgetLg-th' >Status </th>
          </tr>
              {userInfos.map((user) => (
                <>
                {user.role === 'USER' &&
                <tr className='widgetLg-user'>
                  <td>
                      <img src={jovenConfiado} alt='' className='widgetLg-image'/>   
                  </td >
                  <td>
                      <span>{user.firstName + ' ' + user.lastName}</span>
                  </td>
                  <td>
                      <span>{user.email}</span>
                  </td>
                  <td>
                    {!user.blocked ? 
                    <button className={'widgetLg-button Approved'}>
                      Active
                    </button> : 
                    <button className={'widgetLg-button Declined'}>
                      Blocked
                    </button>
                    }
                  </td>
                </tr>
                }
                </>
            ))}
        </table>
      </div>
    );
  }
  
  export default WidgetLg;