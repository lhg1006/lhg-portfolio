'use client'
import ImageSlider from "@/components/imageSlider";
import Layout from "@/components/layout";
import Home from "@/components/home";
import Modal from 'react-modal';
import React, {useEffect} from "react";

const Main = () => {

    useEffect(() => {
        Modal.setAppElement(document.body);
    }, []);

    const images = [
        '/images/banner_1.png',
        '/images/banner_2.png',
        '/images/banner_3.png',
    ];

    return (
         <Layout>
             {/*<MainBanner/>*/}
             <ImageSlider images={images}/>
             <Home/>
         </Layout>
    )
}

export default Main