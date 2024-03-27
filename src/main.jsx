// import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// components
import App from './App'

// styles
import './index.css'

// redux
import { Provider } from 'react-redux'
import createInitialStateAndStore from '../src/redux/store'


async function renderApp() {
  const store = await createInitialStateAndStore(); // Espera a que el store se inicialice

  ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

renderApp(); // Llama a la función para renderizar la aplicación