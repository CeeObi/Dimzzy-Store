import React, { useState } from 'react'
import { formatPrice } from '../utils'


const FormRange = ({name,label,size,price}) => {
    const step = 1000;
    const maxPrice = 100000;

    const [selectedPrice,setSelectedPrice] = useState( price || maxPrice)

    return (
        <div className='form-control'>
            <label htmlFor={name} className='label cursor-pointer'>
                <span className='label-text capitalize'>{label}</span>
                <span>{formatPrice(selectedPrice)}</span>
            </label>
            <input type="range" name={name} min={0} step={step} max={maxPrice} value={selectedPrice} className={`range range-primary ${size}`} onChange={(event) => setSelectedPrice(event.target.value)}/>
            <div className="w-full flex justify-between px-2 mt-2 text-xs">
                <span className='font-bold text-md'>0</span>
                <span className='font-bold text-md'>Max: {formatPrice(maxPrice)}</span>
            </div>
        </div>
    )
}







export default FormRange