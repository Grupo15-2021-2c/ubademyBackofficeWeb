import React, { useEffect, useState } from "react";
import './widgetSm.css';
import jovenConfiado from '../../images/joven-confiado.jpg';
import axios from 'axios';

const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/users';

function WidgetSm() {
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
        console.log(userData)
        setUserInfos(userData);
    });
  },[toggleRefreshList]);

    return (
      <div className='widgetSm-container'>
        <span className='widgetSm-title'>Admin Members</span>
        <table className='widgetSm-table' >
          <tr className='widgetSm-tr'>
              <th className='widgetSm-th' >Pic </th>
              <th className='widgetSm-th' >Name </th>
              <th className='widgetSm-th' >Email </th>
              <th className='widgetSm-th' >Status </th>
            </tr>
            {userInfos.map((user) => (
                    <>
                    {user.role === 'ADMIN' &&
                    <tr key={user.id} className='widgetSm-user'>
                      <td>
                        <img src={jovenConfiado} alt='' className='widgetSm-image'/>   
                      </td>
                      <td>
                        <span>{user.firstName + ' ' + user.lastName}</span>
                      </td>
                      <td>                        
                        <span>{user.email}</span>
                      </td>
                      <td>
                        {!user.blocked ? 
                        <button className={'widgetSm-button Approved'}>
                          Active
                        </button> : 
                        <button className={'widgetSm-button Declined'}>
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
  
  export default WidgetSm;