

import React, { useEffect, useContext } from 'react'
import {  useNavigate } from "react-router-dom"; 
import { AuthContext } from "../auth/provider/AuthContext";
import simulateAuthentication from "../pages/private/simulateAuthentication";



export const AuthRoute = props => {
  const { userInfo,setUserInfo } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      // Si el usuario no está autenticado, simula la autenticación
      simulateAuthentication(setUserInfo, navigate)
    }
  }, []);


  return <>{props.children}</>
}
