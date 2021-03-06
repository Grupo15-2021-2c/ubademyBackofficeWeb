import React, { useEffect, useState } from "react";
import './widgetLg.css';
import jovenConfiado from '../../images/joven-confiado.jpg';
import { fetchUserList } from "../../services";


function WidgetLg() {

  const [userInfos, setUserInfos] = useState([]);


  useEffect(() => {
    fetchUserList().then((userData) => {
        //setUserData(JSON.stringify(userData) || 'No user data found');
        setUserInfos(userData);
    });
  },[]);

    return (
      <div className='widgetLg-container'>
        <span className='widgetLg-title'>Join Members</span>
        <table className='widgetLg-table' >
        <thead>
          <tr className='widgetLg-tr'>
            <th className='widgetLg-th' >Customer </th>
            <th className='widgetLg-th' >Name </th>
            <th className='widgetLg-th' >Email </th>
            <th className='widgetLg-th' >Status </th>
          </tr>
          </thead>
          <tbody>
              {userInfos.map((user) => (
                <tr className='widgetLg-user' key={user.id}>
                {user.role === 'USER' &&
                  <><td>
                      <img src={jovenConfiado} alt='' className='widgetLg-image' />
                    </td><td>
                        <span>{user.firstName + ' ' + user.lastName}</span>
                      </td><td>
                        <span>{user.email}</span>
                      </td><td>
                        {!user.blocked ?
                          <button className={'widgetLg-button Approved'}>
                            Active
                          </button> :
                          <button className={'widgetLg-button Declined'}>
                            Blocked
                          </button>}
                      </td></>
                }
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default WidgetLg;