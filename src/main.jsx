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
import { createStore } from 'redux'
import reducer from './redux/reducers/index'

const initialState = {}
const store = createStore(reducer, initialState)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  </Provider>,
)
