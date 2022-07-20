import React, {useEffect} from 'react'
import {useState, useContext} from "react";
import {UserContext} from "../../context/UserContext";
import Login  from "../../Components/Login/Login";
import { Navigate } from "react-router-dom";
import './UserLogin.css'


const UserLogin = () => {
  const {login , isAuth} = useContext(UserContext)
  const [loginData, setLoginData] = useState({});

  const [data,setData] = useState({
      username:'',
      password: ''
  })

    useEffect(()=>{
        console.log(process.env)
    },[])


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoginData(await login(data))
        console.log(loginData)
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    if(isAuth){
      return <Navigate to="/home"/>
    }else {
      return (
        <div className='page'>
            <Login onChange={handleChange} onSubmit={handleSubmit}/>
        </div>
      )
    }
  }

export default UserLogin;