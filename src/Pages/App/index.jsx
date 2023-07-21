import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import MyAccount from '../MyAccount'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import './index.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar/>
    </BrowserRouter>
  )
}

export default App
