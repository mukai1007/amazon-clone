import React from 'react'
import ProductItem from './ProductItem'
import Image from 'next/image'

function ProductList({products}) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 md:-mt-52'>
       {products.slice(0, 4).map(({id, title, price, description, category, image, rating}) => (
        <ProductItem
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
        />
       ))}
       <div className='md:col-span-full sm:mx-auto cursor-pointer'>
            <img src='https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg'/>
       </div>
       <div className='md:col-span-2'>
            {products.slice(4, 5).map(({id, title, price, description, category, image, rating}) => (
                <ProductItem
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    rating={rating}
                />
            ))}
       </div>
       {products.slice(5, products.length).map(({id, title, price, description, category, image, rating}) => (
                <ProductItem
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    rating={rating}
                />
            ))}
    </div>
  )
}

export default ProductList