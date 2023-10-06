// 예시: React 컴포넌트에서 게시판 컨테이너 추가
'use client'
import React from 'react';
import Link from "next/link";


const Board = () =>{
    return (
        <div className="board-container">
            <div className={'flex justify-between'}>
                <div>게시판</div>
                <Link href={'/write'}><div>글쓰기</div></Link>
            </div>
            {/* 게시글 목록 */}
            <div className="post">
                <h3 className="post-title">게시글 제목 1</h3>
                <p className="post-content">게시글 내용 1</p>
            </div>
            <div className="post">
                <h3 className="post-title">게시글 제목 2</h3>
                <p className="post-content">게시글 내용 2</p>
            </div>
        </div>
    );
}

export default Board;