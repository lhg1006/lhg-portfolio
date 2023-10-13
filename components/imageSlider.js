"use client";
import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Pagination, Autoplay} from "swiper/modules";
import LoadingSpinner from "@/components/loadingSpinner";
import Image from "next/image";
const ImageSlider = ({images}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [])

    const swiperRefLocal = useRef()

    const handleMouseEnter = () => {
        swiperRefLocal?.current?.swiper?.autoplay?.stop()
    };

    const handleMouseLeave = () => {
        swiperRefLocal?.current?.swiper?.autoplay?.start()
    };

    const swiperParams = {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        modules: [Autoplay, Pagination],
        spaceBetween: 30,
        slidesPerView: 'auto',
        pagination: {
            clickable: true,
        },
        loop: true,
    };

    return (
        <div className={'custom-swiper-bg'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {loading && <LoadingSpinner/>}

            {!loading && (
                <Swiper {...swiperParams}>
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image} alt={`Image ${index}`}/>
                            {/*<Image src={image} width={100} height={100} alt={`Image ${index}`}/>*/}
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default ImageSlider;
