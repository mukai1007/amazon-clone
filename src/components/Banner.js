import React from 'react'
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from '/public/carousel/slide1.jpg'
import slide2 from '/public/carousel/slide2.jpg'
import slide3 from '/public/carousel/slide3.jpg'
import slide4 from '/public/carousel/slide4.jpg'
import slide5 from '/public/carousel/slide5.jpg'

function Banner () {
  return (
    <div className='relative mt-[100px]'>
        <div className='absolute w-full h-[32px] bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10'/>
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
        >
            <div>
                <Image src={slide1} alt={"slide1"}/>
            </div>

            <div>
                <Image src={slide2} alt={"slide2"}/>
            </div>

            <div>
                <Image src={slide3} alt={"slide3"}/>
            </div>

            <div>
                <Image src={slide4} alt={"slide4"}/>
            </div>

            <div>
                <Image src={slide5} alt={"slide5"}/>
            </div>
        </Carousel>
    </div>

  )
}

export default Banner