'use client'
import ImageSlider from "@/components/imageSlider";
import Board from "@/components/borad";
import Layout from "@/components/layout";
import PostList from "@/components/postList"

const Home = () => {
  const images = [
    '/images/image1.jpg',
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