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


    const divStyle = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px',
        border: '1px solid black',
        minHeight:'400px',
        marginBottom:'30px'
    };



    return (
        <div style={divStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!loading && <div>loading...</div>}

            {loading && (<Swiper
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false,
                }}
                ref={swiperRefLocal}
                modules={[Autoplay, Mousewheel, Pagination]}
                spaceBetween={30}
                slidesPerView={"auto"}
                mousewheel={true}
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
