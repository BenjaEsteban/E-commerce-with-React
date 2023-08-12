import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filterProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filterProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            data: '01-02-2023',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

    return (
        <aside
            className={`${context.isCkeckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon
                        className='w-6 h-6 text-black cursor-pointer'
                        onClick={context.closeCkeckoutSideMenu} />
                </div>
            </div>

            <div className='px-6 overflow-y-scroll'>
                {
                    context.cartProducts.map((product) => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.images}
                            price={product.price}
                            handleDelete={handleDelete} />
                    ))
                }
            </div>

            <div className='px-6 mt-auto m-5 mb-10 border-t border-black'>
                <p className='flex justify-between items-center'>
                    <span className='font-medium text-2xl'>Subtotal: </span>
                    <span className='font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <button className='w-full bg-black py-3 my-5 text-white rounded-lg' onClick={() => handleCheckout()}>CheckOut</button>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu

