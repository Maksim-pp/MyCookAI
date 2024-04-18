import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './store/index.ts'
import { Provider } from 'react-redux'
import './app/firebase/index.ts'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)