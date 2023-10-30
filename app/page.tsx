'use client'
import ImageSlider from "@/components/imageSlider";
import Layout from "@/components/layout";
import Home from "@/components/home";
import Modal from 'react-modal';
import {useEffect} from "react";
import { useSearchParams } from "next/navigation";
const Main = () => {
    const searchParams  = useSearchParams();
    const isAdmin = searchParams.get('admin') === 'asd'

    useEffect(() => {
        Modal.setAppElement(document.body);
    }, []);

    const images = [
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg',
    ];

    return (
        <Layout isAdmin={isAdmin}>
            {/*<div className="banner-container">*/}
            {/*    <img className="banner" src="/images/image1.jpg" alt="Banner"/>*/}
            {/*</div>*/}

            <ImageSlider images={images}/>
            <Home isAdmin={isAdmin}/>
        </Layout>
    )
}

export default Main