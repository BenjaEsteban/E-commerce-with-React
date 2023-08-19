import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative">
        <h1>MyOrders</h1>
      </div>

      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <MyOrders
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </Link>
        )
        )
      }

    </Layout>
  )
}

export default MyOrders