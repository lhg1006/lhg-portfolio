// components/PostList.tsx
import React, {useEffect, useState} from 'react';
import {generatePosts, getCookie} from '@/util/utils';
import Link from "next/link";
import LinkBtn from "@/components/linkBtn";
import {usePathname} from "next/navigation";
import pPCss from "@/public/css/photoPost.module.css"
import Pagination from "@/components/pagenation";
import LoadingSpinner from "@/components/loadingSpinner";
import {getProjectData, getProjectDataCount} from "@/app/api/call/portfolio";
import {SingleProjectDataType} from "@/types/apiResultType";

const PostList = () => {
    const pathname = usePathname();
    const isHome = pathname === '/' || pathname === '/home'
    const isAdmin = getCookie("isAdmin")

    const posts = generatePosts();
    const typePost = isHome ? posts.slice(0, 9) : posts

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);
    const [totalCnt, setTotalCnt] = useState<number>(0);
    const [projectData, setProjectData] = useState<SingleProjectDataType[]>([])
    const [loading, setLoading] = useState(true);

    const photoUrl = process.env.NEXT_PUBLIC_PHOTO_URL

    useEffect(() => {
        getProjectDataCount().then((res)=>{
            console.log(res)
            setTotalCnt(res.data)
        })

        getProjectData(currentPage).then((res)=>{
            console.log(res)
            setLoading(false);
            setProjectData(res.data)
        })
    }, [currentPage])

    // 스크롤 이벤트 핸들러
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const paginate = (pageNumber : number) => {
        // 페이지 변경을 처리할 함수 호출
        setCurrentPage(pageNumber++)

        // 스크롤 이벤트 핸들러 호출
        scrollToTop();
    };

    return (
        <>
            <div className={pPCss.photoPostGridWrap}>
                {loading && <LoadingSpinner/>}

                {!loading &&
                    <>
                        {isHome ?
                            <LinkBtn link={'/board/project'}  title={'더보기'}/> :
                            (isAdmin && <LinkBtn link={`/write`} title={'등록하기'}/>)
                        }
                        <div className={`${pPCss.photoPostGrid}`}>
                            {projectData.map((data) => (
                                <div key={data.autoNo} className={`${pPCss.photoPost}`}>
                                    <Link href={`/board/project/view?projectId=${data.autoNo}`}>
                                        <div className={`${pPCss.photoBox} ${isHome ? pPCss.homePhotoBox : ''}`}>
                                            <img src={photoUrl+data.images[0]} alt={`Main Image`} />
                                        </div>
                                        <div className={pPCss.title}>{data.title}</div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </>}
            </div>
            {!isHome && <Pagination
                totalPosts={totalCnt} // 게시물 총 수
                postsPerPage={postsPerPage}
                currentPage={currentPage}
                paginate={paginate}
            />}
        </>
    );
};

export default PostList;
