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
        `${process.env.NEXT_PUBLIC_PHOTO_URL}/api/photo/imagePath/-2024-04-03-/4c235530-3906-4ad3-9493-2ef8dd48e9b0_banner_1.png`,
        `${process.env.NEXT_PUBLIC_PHOTO_URL}/api/photo/imagePath/-2024-04-03-/fac877bc-e646-44ea-b2b5-2b6880d14793_banner_2.png`,
        `${process.env.NEXT_PUBLIC_PHOTO_URL}/api/photo/imagePath/-2024-04-03-/fb98fb1a-25a1-4b82-868a-99c7d40da65d_banner_3.png`,
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