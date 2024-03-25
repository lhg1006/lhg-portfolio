// 예시: React 컴포넌트에서 게시판 컨테이너 추가
'use client'
import React, {useEffect, useState} from 'react';
import LinkBtn from "@/components/linkBtn";
import Link from "next/link";
import LoadingSpinner from "@/components/loadingSpinner";
import boardCss from "@/public/css/board.module.css"


const Board = () => {
    const [loading, setLoading] = useState(true);
    const isAdmin = true

    useEffect(() => {
        setLoading(false);
    }, [])

    return (
        <div className={boardCss.boardContainer}>
            {loading && <LoadingSpinner/>}

            {!loading && <>
                <div className={'flex justify-between'}>
                    <div>인적사항</div>
                </div>
                {/* 인적사항 */}
                <div className={boardCss.post}>
                    <Link href={'/board/resume'}>
                        <div className={boardCss.postTitle}>이름 |
                            < span className={boardCss.postText}> 이효규 / Hyogyu Lee</span>
                        </div>
                        <div className={boardCss.postTitle}>생년월일 |
                            < span className={boardCss.postText}> 1996/10/06</span>
                        </div>
                        <div className={boardCss.postTitle}>주소 |
                            < span className={boardCss.postText}> 광주광역시</span>
                        </div>
                        <div className={boardCss.postTitle}>MOBILE |
                            < span className={boardCss.postText}> 010-8649-9668</span>
                        </div>
                        <div className={boardCss.postTitle}>E-MAIL |
                            < span className={boardCss.postText}> lhg961006@gmail.com</span>
                        </div>
                    </Link>
                </div>

                <div className={'flex justify-between'}>
                    <div>학력</div>
                </div>
                {/* 학력 */}
                <div className={boardCss.post}>
                    <Link href={'/board/resume'}>
                        <div className={boardCss.postTitle}>전남 고등학교 |
                            < span className={boardCss.postText}> (2012.03-2015.02 졸업)</span>
                        </div>
                        <div className={boardCss.postTitle}>호남대학교(컴퓨터공학) |
                            < span className={boardCss.postText}> (2015.03-2022.02 졸업)</span>
                        </div>
                    </Link>
                </div>

                <div className={'flex justify-between'}>
                    <div>경력 (업무 경험 총 1년 8개월)</div>
                </div>
                {/* 경력 */}
                <div className={boardCss.post}>
                    <Link href={'/board/resume'}>
                        <div className={boardCss.postTitle}>(주)여보야/웹 개발자 |
                            < span className={boardCss.postText}> (2022.05-2023.12)</span>
                        </div>
                    </Link>
                </div>

                <div className={'flex justify-between'}>
                    <div>개발 언어</div>
                </div>
                {/* 개발 언어 */}
                <div className={boardCss.post}>
                    <Link href={'/board/resume'}>
                        <div className={boardCss.postTitle}>Back-end |
                            < span className={boardCss.postText}> Java, Spring boot, MySql, Node.js</span>
                        </div>
                        <div className={boardCss.postTitle}>Front-end |
                            < span className={boardCss.postText}> Next js, Type Script, React, HTML, CSS</span>
                        </div>
                        <div className={boardCss.postTitle}>Unity |
                            < span className={boardCss.postText}> C#</span>
                        </div>
                        <div className={boardCss.postTitle}>Python |
                            < span className={boardCss.postText}> Python</span>
                        </div>
                    </Link>
                </div>

                <div className={'flex justify-between'}>
                    <div>수상</div>
                </div>
                {/* 수상 */}
                <div className={boardCss.post}>
                    <Link href={'/board/resume'}>
                        <div className={boardCss.postTitle}>캡스톤디자인 경진대회 (호남대) |
                            < span className={boardCss.postText}> 장려상 수상 (2021.12)</span>
                        </div>
                    </Link>
                </div>

                <div className={'flex justify-between'}>
                    <div>자기소개</div>
                </div>
                {/* 자기소개 */}
                <div className={boardCss.post}>
                    <Link href={'/board/resume'}>
                        <div className={boardCss.postTitle}>이력서 페이지로</div>
                    </Link>
                </div>

            </>
            }
        </div>
    );
}

export default Board;