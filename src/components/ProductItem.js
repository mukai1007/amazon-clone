import React from 'react'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';
import prime from '/public/prime.png'
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice'

function ProductItem({title, price,description, category, image, rating}) {

    const [rate] = useState(Math.round(rating.rate))
    const [hasPrime] = useState(Math.round(rating.rate) > 3)
    const dispatch = useDispatch()

    const addItemToCart = () => {
        const product = {
            title, 
            price,
            description, 
            category, 
            image, 
            rating
        }

        dispatch(addToCart(product))
    }
 
    return (
        <div className='relative flex flex-col m-5 p-10 bg-white z-30'>
            <p className='absolute top-2 right-2 italic text-sm text-gray-400'>{category}</p>
            <Image
                src={image}
                alt='img'
                width={200}
                height={200}
                className='w-[200px] h-[200px] object-contain mx-auto'
            />
            <p className='my-2'>{title}</p>
            
            <div className='flex items-center'>
                <p>{rating.rate}</p>
                <p className='flex mx-1'>
                    {Array(rate).fill().map((_, i) => (
                        <AiFillStar className='h-[15px] text-yellow-500'/>
                    ))}
                </p>
                <p className='text-[#007185]'>({Math.floor(rating.count)})</p>
            </div>
            
            <p className='text-xs my-2 line-clamp-2'>{description}</p>
            <div>${price}</div>
            {hasPrime && 
                <div className='flex items-center'>
                    <Image src={prime} width={70} height={15} alt='prime'/>
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                </div>}
            
            <button onClick={addItemToCart} className='mt-auto button'>Add to Cart</button>
        </div>
    )
}

export default ProductItem