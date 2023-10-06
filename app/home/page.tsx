'use client'

import ImageSlider from "@/components/imageSlider";
import Board from "@/components/borad";
import Layout from "@/components/layout";
import PostList from "@/components/postList"
import Pagination from "@/components/pagenation"
import React, {useEffect, useState} from "react";
import Link from "next/link";

const Home = () =>{
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const images = [
        '/images/imageA.jpg',
        '/images/imageC.jpg',
        '/images/imageA.jpg',
        '/images/imageC.jpg',
    ];

    return (mounted && <>
        <Layout>
            <ImageSlider images={images} />
            <Board />
            <Link href={'/photoBoard'}><h1>더보기</h1></Link>
            <PostList type={'main'}/>

            {/*<section className="content">*/}
            {/*    <h2>우리의 서비스</h2>*/}
            {/*    <p>우리는 최고의 서비스를 제공합니다.</p>*/}
            {/*</section>*/}

            {/*<section className="content">*/}
            {/*    <h2>포트폴리오</h2>*/}
            {/*    <p>우리의 작업을 확인하세요.</p>*/}
            {/*</section>*/}
        </Layout>
    </>)
}

export default Home