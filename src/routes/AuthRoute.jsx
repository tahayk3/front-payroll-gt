
import React from "react";

import {  useNavigate } from "react-router-dom"; 
import { AuthContext } from "../auth/provider/AuthContext";
import simulateAuthentication from "../pages/private/simulateAuthentication";




export const AuthRoute = props => {
  const { userInfo,setUserInfo } = React.useContext(AuthContext)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!userInfo) {
      // Si el usuario no está autenticado, simula la autenticación
      simulateAuthentication(setUserInfo, navigate)
    }
  }, []);


  return <>{props.children}</>
}

