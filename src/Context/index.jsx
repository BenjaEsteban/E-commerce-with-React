import { createContext } from 'react'
import { useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    // Get productos
    const [items, setItems] = useState(null)

    // State from filter products
    const [filteredItems, setFilterItems] = useState(null)

    // Get productos by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    // Get productos by category
    const [searchByCategory, setSearchByCategory] = useState(null)

    useEffect(() => {
        //Recepción de API con los productos
        fetch('https://api.escuelajs.co/api/v1/products')
            //Transformar la respuesta en JSON
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])


    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE'){
            return filteredItemsByTitle(items, searchByTitle)
        }
        else if (searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory)
        }
        else if (searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        
        }
        else if (!searchType){
            return items
        
        }
    }

    useEffect(() => {
        if (searchByCategory && searchByTitle){
            setFilterItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        }
        else if (searchByTitle && !searchByCategory){
            setFilterItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        }
        else if (searchByCategory && !searchByTitle){
            setFilterItems(filterBy('BY_CATEGORY', items, searchByTitle,searchByCategory))
        }
        else if (!searchByCategory && !searchByTitle){
            setFilterItems(filterBy(null, items, searchByTitle, searchByCategory))
        }
    }, [items, searchByTitle, searchByCategory])


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

    console.log(filteredItems)

    return (
        <ShoppingCartContext.Provider value={{
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilterItems,
            searchByCategory,
            setSearchByCategory,
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
