'use client'
import ImageSlider from "@/components/imageSlider";
import Layout from "@/components/layout";
import Home from "@/app/Home/page";

const Main = () => {
  const images = [
      '/images/image1.jpg',
      '/images/image2.jpg',
  ];

  return (
      <Layout>
        <ImageSlider images={images}/>
        <Home />
      </Layout>
  )
}

export default Main