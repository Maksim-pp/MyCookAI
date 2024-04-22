import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './store/index.ts'
import { Provider } from 'react-redux'
import './app/firebase/index.ts'
import { ScrollToTop } from './shared/index.ts'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)