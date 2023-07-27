import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { ShoppingCartContext } from '../../Context'
import './index.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon 
                        className='w-6 h-6 text-black cursor-pointer'
                        onClick={context.closeProductDetail}/>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail

