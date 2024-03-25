'use client'
import ImageSlider from "@/components/imageSlider";
import Layout from "@/components/layout";
import Home from "@/components/home";
import Modal from 'react-modal';
import {useEffect} from "react";
import { useSearchParams } from "next/navigation";
import MainBanner from "@/components/mainBanner";
import ParallaxCompo from "@/components/parallaxCompo";
const Main = () => {
    const searchParams  = useSearchParams();
    const isAdmin = searchParams.get('admin') === 'leehyogyu'

    useEffect(() => {
        Modal.setAppElement(document.body);
    }, []);

    const images = [
        '/images/tap-banner.jpg',
        // '/images/image2.jpg',
        // '/images/image3.jpg',
    ];

    return (
        // <ParallaxCompo />
         <Layout isAdmin={isAdmin}>
             {/*<MainBanner/>*/}
             <ImageSlider images={images}/>
             <Home/>
         </Layout>
    )
}

export default Main