// components/PostList.js
import React, {useEffect, useState} from 'react';
import {generatePosts} from '@/util/utils';
import Link from "next/link";
import LinkBtn from "@/components/linkBtn";
import {usePathname} from "next/navigation";
import pPCss from "@/public/css/photoPost.module.css"
import Pagination from "@/components/pagenation";
import LoadingSpinner from "@/components/loadingSpinner";

const PostList = ({type}) => {
    const pathname = usePathname();
    const posts = generatePosts();
    const typePost = type === 'main' ? posts.slice(0, 9) : posts
    const isHome = pathname === '/' || pathname === '/home'

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        },2000)
    }, [])

    // 스크롤 이벤트 핸들러
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const paginate = (pageNumber) => {
        // 페이지 변경을 처리할 함수 호출
        setCurrentPage(pageNumber)

        // 스크롤 이벤트 핸들러 호출
        scrollToTop();
    };

    return (
        <>
            <div className={pPCss.photoPostGridWrap}>
                {loading && <LoadingSpinner/>}

                {!loading &&
                    <>
                        <LinkBtn link={isHome ? '/photoBoard' : 'photoBoardPost'} title={isHome ? '앨범 더보기' : '사진 올리기'}/>
                        <div className={pPCss.photoPostGrid}>
                            {typePost.map((post) => (
                                <div key={post.id} className={pPCss.photoPost}>
                                    <Link href={'/photoBoardView'}>
                                        <img src={post.image} alt={`게시물 ${post.id}`}/>
                                        <h2>{post.title}</h2>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {!isHome && <Pagination
                            totalPosts={120} // 게시물 총 수
                            postsPerPage={postsPerPage}
                            currentPage={currentPage}
                            paginate={paginate}
                        />}
                    </>}
            </div>
        </>
    );
};

export default PostList;
