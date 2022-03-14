import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux' 
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Main/Main';
import Finish from './components/Finish/Finish';
import { getUser } from './redux/actions/userAction'

function App() {
  const dispatch = useDispatch()
  const ures = useSelector((state)=>state.user)
  const [status, setStatus] = useState(false)
  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])

  useEffect(()=>{
    if (ures.shared && ures.email) {
      setStatus(true)
    }
  },[ures])

  return (
    <div className="">
      {!status?<Main />:<Finish />}

    </div>
  );
}

export default App;
