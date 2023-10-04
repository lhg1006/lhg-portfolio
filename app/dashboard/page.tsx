import Head from "next/head";
import ImageSlider from "@/components/ImageSlider";
import Board from "@/components/Borad";
import Layout from "@/components/Layout";
import React from "react";

const Dashboard = () =>{
    const images = [
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg',
    ];

    return <>
        <Layout>
            <ImageSlider images={images} />
            <Board />
            <section className="content">
                <h2>우리의 서비스</h2>
                <p>우리는 최고의 서비스를 제공합니다.</p>
            </section>

            <section className="content">
                <h2>포트폴리오</h2>
                <p>우리의 작업을 확인하세요.</p>
            </section>
        </Layout>
    </>
}

export default Dashboard