"use client";

import Image from 'next/image'
import React, { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'

type CarouselProps = {
    images: string[],
    width: number,
    height: number,
}

const Carousel: FunctionComponent<CarouselProps> = ({ images, width, height }) => {
    const [carouselActiveItem, setCarouselActiveItem] = useState(0)

    const carouselRef = useRef<HTMLDivElement>(null)

    const scrollItem = () => {
        setCarouselActiveItem(prevState => {
            if (images.length - 1 > prevState) {
                return prevState + 1
            } else {
                return 0
            }
        })
    }

    const autoplay = useCallback(() => setInterval(scrollItem, 2000), [])

    useEffect(() => {
        const play = autoplay()
        return () => clearInterval(play)
    }, [autoplay])

    useEffect(() => {
        carouselRef.current?.scroll({ left: width * carouselActiveItem })
    }, [carouselActiveItem])


    return (
        <div ref={carouselRef} className="carousel carousel-center">
            {
                images.map(imgSrc =>
                    <div key={imgSrc} className="carousel-item">
                        <Image src={imgSrc} alt={imgSrc} width={width} height={height} loading='lazy'></Image>
                    </div>
                )
            }
        </div>
    );
}

export default Carousel;