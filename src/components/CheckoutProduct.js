import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import prime from '/public/prime.png'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cartSlice'

function CheckoutProduct({id, title, price,description, category, image, rating, hasPrime}) {
    const [rate] = useState(Math.round(rating.rate))
    const dispatch = useDispatch()

    const addItemToCart = () => {
        const product = {
            id,
            title, 
            price,
            description, 
            category, 
            image, 
            rating, 
            hasPrime
        }
        dispatch(addToCart(product))
    }

    const removeItemFromCart = () => {
        dispatch(removeFromCart({id}))
    }

  return (
    <div className='grid grid-cols-5'>
        <Image
            src={image}
            alt='img'
            width={200}
            height={200}
            className='object-contain'
        />

        {/* Middle */}
        <div className='col-span-3 mx-5'>
            <p>{title}</p>

            <div className='flex items-center'>
                <p>{rating.rate}</p>
                <p className='flex mx-1'>
                    {Array(rate).fill().map((_, i) => (
                        <AiFillStar className='h-[15px] text-yellow-500' key={i}/>
                    ))}
                </p>
                <p className='text-[#007185]'>({Math.floor(rating.count)})</p>
            </div>

            <p className='text-xs my-2 line-clamp-3'>{description}</p>
            <p>${price}</p>
            {hasPrime && 
                <div className='flex items-center'>
                    <Image src={prime} width={70} height={15} alt='prime'/>
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                </div>}
        </div>

        {/* add/remove buttons */}
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
            <button onClick={addItemToCart} className='button'>Add to Cart</button>
            <button onClick={removeItemFromCart} className='button'>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct