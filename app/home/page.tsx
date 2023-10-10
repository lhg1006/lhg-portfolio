'use client'
import ImageSlider from "@/components/imageSlider";
import Board from "@/components/borad";
import Layout from "@/components/layout";
import PostList from "@/components/postList"

const Home = () => {
    const images = [
        '/images/imageA.jpg',
        '/images/imageC.jpg',
        '/images/imageA.jpg',
        '/images/imageC.jpg',
    ];

    return (
        <Layout>
            <ImageSlider images={images}/>
            <Board/>
            <PostList type={'main'}/>
        </Layout>
    )
}

export default Home