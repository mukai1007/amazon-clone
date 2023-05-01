import React from 'react'
import Header from '../components/Header'
import CheckoutProduct from '../components/CheckoutProduct'
import Image from 'next/image'
import checkoutImg from '@/public/checkout.png'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/cartSlice'
import { useSession } from 'next-auth/react'

function Checkout() {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const session = useSession()

  return (
    <div className='bg-gray-100'>
        <Header/>
        <main className="lg:flex w-full max-w-screen-2xl mx-auto h-full bg-gray-100 mt-[100px]">
            {/* Left */}
            <div className='flex-grow m-5 shadow-md'>
                <Image
                    src={checkoutImg}
                    alt='img'
                    width={1020}
                    height={250}
                    className='object-contain'
                />
                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? 'Корзина пуста!' : 'Все товары'}</h1>

                    {items.map((item, i) => (
                        <CheckoutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            category={item.category} 
                            image={item.image}
                            rating={item.rating}
                            hasPrime={item.hasPrime}
                        />
                    ))}
                </div>
            </div>

            {/* Right */}
            <div className='flex flex-col h-[110px] min-w-[400px] bg-white p-5 shadow-md my-5 mr-5'>
                {items.length > 0 && (
                    <>
                        <h2>
                            Итого: ({items.length} товара): {' '} 
                            <span className='font-bold'>
                                {total}$
                            </span>
                        </h2>
                        
                        <button
                            disabled={session === 'unauthenticated'}
                            className={`button mt-2 
                            ${ session.status === 'unauthenticated' && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}
                        >
                            { session.status === 'unauthenticated' ? 'Войти' : 'Перейти к оплате'}
                        </button>
                        
                    </>
                )    
                }
            </div>
        </main>
    </div>
  )
}

export default Checkout