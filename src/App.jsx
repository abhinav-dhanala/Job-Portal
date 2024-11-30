import './App.css'
import { Button } from './components/ui/button'
import { Accordion } from './components/ui/accordion.jsx'
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/app-layout'

const router=createBrowserRouter([

  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      }
    ]
  }
])
function App() {
  return <RouterProvider router={router}/>;
}

export default App
