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

     //Ckeckout side menu . Open/Close
     const [isCkeckoutSideMenuOpen, setIsCkeckoutSideMenuOpen] = useState(false)
     const openCkeckoutSideMenu = () => setIsCkeckoutSideMenuOpen(true)
     const closeCkeckoutSideMenu = () => setIsCkeckoutSideMenuOpen(false)

    //Product Detail . Show Product
    const [productToShow, setProductToShow] = useState({})

    //Carrito donde almacenaremos los productos
    const [cartProducts, setCartProducts] = useState([])

    //Shopping Cart . Order
    const [order, setOrder] = useState([])

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
            setCartProducts,
            isCkeckoutSideMenuOpen,
            openCkeckoutSideMenu,
            closeCkeckoutSideMenu,
            order,
            setOrder
        
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}
