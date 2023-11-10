import React, { useState } from 'react'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useLoaderData} from 'react-router-dom'


const ProductsContainer = () => {
    const {meta} = useLoaderData()
    const totalProducts = meta.pagination.total

    const [layout, setLayout] = useState('grid')
    const setActiveButtonStyle = (patternName) =>{
        return `text-xl btn btn-circle btn-sm ${patternName===layout ? 'btn-primary text-primary-content' : 'btn-ghost text-based-content'}`
    }

    return (
        <>
            {/* HEADER */}
            <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-4'> 
                <h4 className='font-medium text-md'>
                    {totalProducts} product{totalProducts > 1 && 's'}.
                </h4>
                <div className='flex gap-x-2'>
                    <button type='button' onClick={()=>setLayout('grid')} className={setActiveButtonStyle('grid')}>
                        <BsFillGridFill />
                    </button>
                    <button type='button' onClick={()=>setLayout('list')} className={setActiveButtonStyle('list')}>
                        <BsList />
                    </button>
                </div>
            </div>
            {/* PRODUCT */}
            <div>
                {
                    totalProducts === 0 ? (<h5 className='text-2xl mt-16'>Sorry, no products matched your search...</h5>) :
                    layout==='grid' ? (<ProductsGrid />) : (<ProductsList />)
                }
            </div>
            
        </>
    )
}

export default ProductsContainer