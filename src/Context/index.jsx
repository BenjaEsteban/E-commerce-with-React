import { createContext } from 'react'
import { useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    //Shoping Card . Increment quantity
    const [count, setCount] = useState(0)

    //Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Product Detail . Show Product
    const [productToShow, setProductToShow] = useState({})

    //Carrito donde almacenaremos los productos
    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}
