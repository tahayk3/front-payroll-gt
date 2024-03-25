import React from 'react'
import ReactDOM from 'react-dom/client'

//toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// components
import App from './components/App'

// styles
import './index.css'

//redux
import { Provider } from 'react-redux'
import store from './redux/store'
//pruebas de consumo redux
import StoreConsumptionComponent from './components/ReduxStore/StoreConsumptionComponent'

//componentes de imagenes
import ImgUploader from './components/uploadFiles/ImgUploader'
import FileUploader from './components/uploadFiles/FileUploader'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
      <StoreConsumptionComponent/>
      <FileUploader/>

      <ImgUploader/>
      <ToastContainer />
  </Provider>
)
