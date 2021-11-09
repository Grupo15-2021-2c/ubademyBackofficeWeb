import React, { useState, useEffect } from 'react';
import './coursesList.css';
import { Title } from '../../components';
import { DataGrid } from "@material-ui/data-grid";
import { Visibility, BlockOutlined } from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { setCourseSelected } from '../../services/index';


const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/courses';

function CoursesList() {

  const [courseInfos, setCourseInfos] = useState([]);
  const [toggleRefreshList, setToggleRefreshList] = useState(false);


  const handleVisualization = (params) => {
    setCourseSelected(params.row);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'owner', headerName: 'Owner', width: 150 },
    { field: 'categoryId', headerName: 'Category', width: 150 },
    //{ field: 'email', headerName: 'Email', width: 200 },
    { field: 'blocked', headerName: 'Blocked', width: 200 },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
            return (
                <>
                <Link exact to={"/dashboard/course/"+ params.row.id} className='courses-list-item' activeClassName='active'>
                  <Visibility className='courses-visualize' onClick={() => handleVisualization(params)}/>
                </Link>
                </>
            )
        }
    }
  ];


  const fetchCourseList = () => {
    return axios.get(url)
    .then(({data}) => {
        //handle success
        setToggleRefreshList(toggleRefreshList);
        return data.data;
    })
    .catch(err =>{
        //handle error
        console.error("error",err);
    })
  }

  useEffect(() => {
    fetchCourseList().then((courseData) => {
        //setCourseData(JSON.stringify(courseData) || 'No course data found');
        setCourseInfos(courseData);
    });
  },[toggleRefreshList]);

  return (
      <div className='courses'>
        <div className='courses-container'>
          <ui className='courses-list'>
            <li style={{ listStyleType: 'none' }}>
              <Title text='Listado de Cursos' />
              <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                  rows={courseInfos}
                  disableSelectionOnClick
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[10]}
                  checkboxSelection />
              </div>
            </li>
          </ui>
      </div>        
    
      </div>
    );
  }
  
  export default CoursesList;