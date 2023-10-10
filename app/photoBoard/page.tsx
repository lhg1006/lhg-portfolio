'use client'

import Layout from "@/components/layout";
import React, {useState} from "react";
import PostList from "@/components/postList";
import Pagination from "@/components/pagenation";
import LinkBtn from "@/components/linkBtn";

const PhotoBoard = () =>{
    return <>
        <Layout>
            <PostList type={''}/>
        </Layout>
    </>
}

export default PhotoBoard