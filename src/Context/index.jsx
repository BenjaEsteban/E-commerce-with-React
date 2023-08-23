import { createContext } from 'react'
import { useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    // Get productos
    const [items, setItems] = useState(null)

    useEffect(() => {
        //Recepción de API con los productos
        fetch('https://api.escuelajs.co/api/v1/products')
            //Transformar la respuesta en JSON
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    // Get productos by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    console.log(searchByTitle)

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
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
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
