'use client'

import Layout from "@/components/layout";
import React, {useState} from "react";
import PostList from "@/components/postList";
import Pagination from "@/components/pagenation";

const PhotoBoard = () =>{
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    const paginate = (pageNumber : number) => {
        setCurrentPage(pageNumber);
    };
    return <>
        <Layout>
            <PostList />
            <Pagination
                totalPosts={30} // 게시물 총 수
                postsPerPage={postsPerPage}
                paginate={paginate}
            />
        </Layout>
    </>
}

export default PhotoBoard