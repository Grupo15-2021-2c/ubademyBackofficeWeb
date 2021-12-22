import React, { useEffect, useState } from "react";
import './widgetSm.css';
import jovenConfiado from '../../images/joven-confiado.jpg';
import { fetchUserList } from "../../services";


function WidgetSm() {
  const [userInfos, setUserInfos] = useState([]);


  useEffect(() => {
    fetchUserList().then((userData) => {
        //setUserData(JSON.stringify(userData) || 'No user data found');
        console.log(userData)
        setUserInfos(userData);
    });
  },[]);

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