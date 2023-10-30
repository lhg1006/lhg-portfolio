// 예시: React 컴포넌트에서 게시판 컨테이너 추가
'use client'
import React, {useEffect, useState} from 'react';
import LinkBtn from "@/components/linkBtn";
import Link from "next/link";
import LoadingSpinner from "@/components/loadingSpinner";
import boardCss from "@/public/css/board.module.css"


const Board = ({isAdmin} : {isAdmin:boolean}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        },1750)
    }, [])

    return (
        <div className={boardCss.boardContainer}>
            {loading && <LoadingSpinner/>}

            {!loading && <>
                <div className={'flex justify-between'}>
                    <div>공지사항</div>
                    {isAdmin && <LinkBtn link={'write'} title={'글쓰기'}></LinkBtn>}
                </div>
                {/* 게시글 목록 */}
                <div className={boardCss.post}>
                    <Link href={'/postView'}>
                        <div className={boardCss.postTitle}>공지사항 1</div>
                    </Link>
                </div>
                <div className={boardCss.post}>
                    <div className={boardCss.postTitle}>공지사항 2</div>
                </div>
            </>
            }
        </div>
    );
}

export default Board;