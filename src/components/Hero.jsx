import React from 'react'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'
import { Link } from 'react-router-dom'

const carouselImages = [hero3,hero4,hero2,hero1];


const Hero = () => {
  return (
   <div className='grid lg:grid-cols-2 gap-24 items-center'>
        <div>
            <h1 className='text-4xl font-bold max-w-2xl tracking-tight sm:text-6xl'>Explore our range of exciting products.</h1>
            <p className='mt-8 max-w-xl text-lg leading-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae, doloremque, hic sint a cupiditate labore incidunt et placeat ipsa consectetur fuga rem quo aperiam dolor nemo aspernatur. Ipsum, eos?</p>
            <div className="mt-10">
                <Link to="/products" className='btn btn-primary'>Our products </Link>
            </div>
        </div>
        <div className='hidden h-[28rems] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>        
            { 
                carouselImages.map( (image) => { 
                    return <div key={image} className='carousel-item'>
                        <img src={image} className='rounded-box h-full w-80 object-cover'/>
                    </div>
                    })
            }
        </div>
    </div>
    )
}




export default Hero;