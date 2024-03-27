//AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthRoute } from '../routes/AuthRoute';


import {
  Employee,
  Payroll,
  Profile,
  Store,
  Dashboard,
  Company,
} from '../pages/private'
import { Login,Home, Uikit, Register, NotFound, RegisterCompany} from '../pages/public';

import Layout from '@/components/Layout';



const AppRouter = () => {
  return (

    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/uikit' element={<Uikit />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/login' element={< Login/>}/>
      <Route path='/register-company' element={< RegisterCompany/>}/>


{/* ----------PRIVATE ROUTES-------- */}
      <Route path='/profile' element={<AuthRoute><Layout><Profile /></Layout></AuthRoute>}/>
      <Route path='/dashboard' element={<AuthRoute><Layout>< Dashboard/></Layout></AuthRoute>}/>
      <Route path='/company' element={<AuthRoute><Layout>< Company/></Layout></AuthRoute>}/>
      <Route path='/employee' element={<AuthRoute><Layout><Employee /></Layout></AuthRoute>}/>
      <Route path='/Payroll' element={<AuthRoute><Layout><Payroll/></Layout></AuthRoute>}/>
      <Route path='/store' element={<AuthRoute><Layout><Store/></Layout></AuthRoute>}/>
    </Routes>
    </>
  )
}

export default AppRouter