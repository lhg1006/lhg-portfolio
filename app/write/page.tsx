import React from "react";
import Layout from "@/components/layout";
import boardCss from "@/public/css/board.module.css"

const Write = () =>{
    return <>
        <Layout>
            <div className={boardCss.boardContainer}>
                {/*<div className={'flex justify-between'}>*/}
                {/*    <div>게시물 작성</div>*/}
                {/*</div>*/}

                {/* 게시글 작성 폼 */}
                <div className={boardCss.postForm}>
                    <h3>게시글 작성</h3>
                    <input type="text" placeholder="제목" />
                    <textarea placeholder="내용" ></textarea>
                    <button>작성하기</button>
                </div>
            </div>
        </Layout>
    </>
}

export default Write