import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home'
import Tours from './pages/Tours/Tours'
import Tour from './pages/Tour/Tour'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './app.scss'




const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Tours/:id',
        element: <Tours />
      },
      {
        path: '/Tour/:id',
        element: <Tour />
      },
    ],
  },
])

function App() {

  return (
    <RouterProvider router={router}>
      <div className="App">
      </div>
    </RouterProvider>

  )
}

export default App
