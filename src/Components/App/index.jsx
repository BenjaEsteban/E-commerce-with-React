import './index.css'
import Home from '../Home'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import MyAccount from '../MyAccount'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

function App() {

  return (
    <>
      <div className="bg-blue-500">
        <Home />
        <MyOrder />
        <MyOrders />
        <MyAccount />
        <NotFound />
        <SignIn />
      </div>
    </>
  )
}

export default App
