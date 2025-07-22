import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.tsx'
import Showroom from './pages/Showroom.tsx'
import Projects from './pages/Projects.tsx'
import News from './pages/News.tsx'
import Contact from './pages/Contact.tsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/showroom',
    element: <Showroom />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/news',
    element: <News />,
  },
  {
    path: '/contact',
    element: <Contact />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
