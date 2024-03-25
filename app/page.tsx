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
        '/images/tap-banner.jpg',
        // '/images/image2.jpg',
        // '/images/image3.jpg',
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