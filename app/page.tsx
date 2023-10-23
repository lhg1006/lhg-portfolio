'use client'
import ImageSlider from "@/components/imageSlider";
import Layout from "@/components/layout";
import Home from "@/app/home/page";
import Modal from 'react-modal';
import {useEffect} from "react";

const Main = () => {
    useEffect(() => {
        Modal.setAppElement(document.body);
    }, []);

    const images = [
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg',
    ];

    return (
        <Layout>
            {/*<div className="banner-container">*/}
            {/*    <img className="banner" src="/images/image1.jpg" alt="Banner"/>*/}
            {/*</div>*/}

            <ImageSlider images={images}/>
            <Home/>
        </Layout>
    )
}

export default Main