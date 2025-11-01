import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import Store from './redux/Store.js'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={Store}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Provider>
  </>,
)
