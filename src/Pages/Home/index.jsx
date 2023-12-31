import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
    const context = useContext(ShoppingCartContext)
    const renderView = () => {
            if (context.filteredItems?.length > 0){
                return (
                    context.filteredItems?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                )
            }
            else {
                return (
                    <div>No existen :(</div>
                )
            }
    }

    return (
        <Layout>
            <div className="flex items-center justify-center w-80 relative mb-4">
                <h1 className="font-medium text-xl">Products Exclusive</h1>
            </div>
            <input
                type="text"
                placeholder="Search a product"
                className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
                onChange={(e) => context.setSearchByTitle(e.target.value)} />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                { renderView() }
            </div>
            <ProductDetail></ProductDetail>
        </Layout>
    )
}

export default Home
