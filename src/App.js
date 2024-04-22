import React, { useState, useEffect, useReducer } from 'react'
import './App.css';
import EmployeeTable from './Components/EmployeeTable';
import EmployeeHeader from './Components/EmployeeHeader';
import { reducer } from './Components/EmployeeTable/EmployeeTable.helper';
import { INITIAL_STATE } from './Components/EmployeeTable/EmployeeTable.constants';

const App = () => {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const showDrawer = () => {
    setOpen(true);
  };
  // const getData = () => {
  //   var requestOptions = {
  //     method: "GET",
  //   };

  //   fetch("http://localhost:3030/posts", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => dispatch({ type:'ON_SUBMIT', value: result }))
  //     .catch((error) => console.log("error", error));
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className='appContainer'>
      <div className='employeeTableContainer'>
        <EmployeeHeader state={state} showDrawer={showDrawer}/>
        <EmployeeTable state={state} dispatch={dispatch} open={open} setOpen={setOpen}/>
      </div>
    </div>
  )
}

export default App