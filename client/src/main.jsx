import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider , Route , createRoutesFromElements} from 'react-router-dom'
import Register from './pages/register.jsx'
import Secret from './pages/secrets.jsx'
import Layout from "./pages/Layout.jsx"
import Login from './pages/login.jsx'

//removing the strict mode because they will show 
//the component twice in the dev mode//

const Router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<Layout />} >
         <Route path="login" element={<Login />} />
         <Route path="register" element={<Register />} />
         <Route path="secret" element={<Secret />} />
         <Route path="*"  element={<div>Page not Found</div>}/>
      </Route>
   )
)
createRoot(document.getElementById('root')).render( 
  
  
   <StrictMode>

   <RouterProvider router = {Router} />
   </StrictMode>
  
)
