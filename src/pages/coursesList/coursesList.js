import React, { useState, useEffect } from 'react';
import './coursesList.css';
import { Title, Modal, Label } from '../../components';
import { DataGrid } from "@material-ui/data-grid";
import { Visibility, BlockOutlined } from "@material-ui/icons";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route,  Link } from 'react-router-dom';
import { fetchCourseList, setCourseSelected, fetchInscriptionsList, setInscriptionSelected, getValidToken } from '../../services/index';
import axios from 'axios';
import {API_BASE_URL} from "../../constants/constants";


const url = API_BASE_URL + '/courses/';
let varToken= getValidToken();

function CoursesList() {

  const [courseInfos, setCourseInfos] = useState([]);
  const [showDeletion, setShowDeletion] = useState(false);
  const [selectedCourse, setCourse] = useState({});
  const [toggleRefreshList, setToggleRefreshList] = useState(false);
  const handleCloseBlock = () => setShowDeletion(false)
  const handleShowBlock = () => setShowDeletion(true);

  const handleConfirmBlock = (params) => {
    console.log("Blocked");
    console.log(params);
    setCourse(params);
    handleShowBlock(true);
  };

  const handleBlock= (id, blocked) => {
  let payload = '';
  console.log(blocked);
  if (!blocked){
      payload = url + id + "/block";
  }else{
      payload = url + id + "/unblock";
  }
  console.log(payload);
  axios
  .patch(payload, 700,{
    headers: {
      Authorization: 'Bearer ' + varToken,
    }
  })
      .then(res => { 
          console.log(res);
          setToggleRefreshList(!toggleRefreshList);
          handleCloseBlock();
      })
}

  const handleVisualization = (params) => {
    setCourseSelected(params.row);
    fetchInscriptionsList(params.row.id).then((inscription) => {
      setInscriptionSelected(inscription);
    })
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'owner', headerName: 'Owner', width: 150 },
    { field: 'categoryId', headerName: 'Category', width: 150 },
    { field: 'blocked', headerName: 'Blocked', width: 150 },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
            return (
                <>
                <Link exact to={"/dashboard/course/"+ params.row.id}  activeClassName='active'>
                    <Visibility className='courses-visualize' onClick={() => handleVisualization(params)}/>
                </Link>
                <BlockOutlined className='courses-delete' onClick={() => handleConfirmBlock(params.row)}/>
                </>
            )
        }
    }
  ];

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
        <Modal title={selectedCourse} visibility={showDeletion} editing={false} onClose={handleCloseBlock}>
          <div className='modal-body'>
              <u1 className='modal-list'>
                  <li className='modal-list-item'>
                    <Label text={'¿Está seguro que desea bloquear/desbloquear el curso: ' + selectedCourse.title + '?'}/>
                  </li>
              </u1>
          </div>
          <div className='modal-footer'>
              <button onClick={() => handleCloseBlock()} 
              data-disabled='modal' className='modal-button'>
                  Cancelar
              </button>
              <button onClick={() => handleBlock(selectedCourse.id, selectedCourse.blocked)} 
              data-disabled='modal' className='modal-button'>
                  Confirmar
              </button>
          </div>
        </Modal>  
      </div>
    );
  }
  
  export default CoursesList;