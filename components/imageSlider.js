"use client";
import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Mousewheel, Pagination, Autoplay} from "swiper/modules";

const ImageSlider = ({images}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
    }, [])

    const swiperRefLocal = useRef()

    const handleMouseEnter = () => {
        swiperRefLocal?.current?.swiper?.autoplay?.stop()
    };

    const handleMouseLeave = () => {
        swiperRefLocal?.current?.swiper?.autoplay?.start()
    };



    return (
        <div className={'custom-swiper-bg'}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!loading && <div>loading...</div>}

            {loading && (<Swiper
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false,
                }}
                ref={swiperRefLocal}
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={"auto"}
                pagination={{clickable: true}}
                loop={true}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                            <img src={image} alt={`Image ${index}`}/>
                    </SwiperSlide>
                ))}
            </Swiper>)}
        </div>
    );
};

export default ImageSlider;
