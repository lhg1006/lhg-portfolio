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
        `/api/photo/imagePath/-2024-04-11-/feb2496c-2f27-405c-9eb7-8d01b516eca1_banner_1.png`,
        `/api/photo/imagePath/-2024-04-11-/aed970f0-68d4-4b04-87c7-3fb8d0a6f688_banner_3.png`,
        `/api/photo/imagePath/-2024-04-11-/da3f2b01-6814-4d98-83af-7de4a434a9f5_banner_2.png`,
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