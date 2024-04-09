// 예시: React 컴포넌트에서 게시판 컨테이너 추가
'use client'
import React, {useEffect, useState} from 'react';
import LinkBtn from "@/components/linkBtn";
import Link from "next/link";
import LoadingSpinner from "@/components/loadingSpinner";
import boardCss from "@/public/css/board.module.css"
import {ResumeDataType} from "@/types/apiResultType";
import {getResumeData} from "@/app/api/call/portfolio";


const Board = () => {
    const [infoData, setInfoData] = useState<ResumeDataType[]>([])
    const [eduData, setEduData] = useState<ResumeDataType[]>([])
    const [careerData, setCareerData] = useState<ResumeDataType[]>([])
    const [devData, setDevData] = useState<ResumeDataType[]>([])
    const [awardData, setAwardData] = useState<ResumeDataType[]>([])
    const [introData, setIntroData] = useState<ResumeDataType[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getResumeData().then((res) => {
            const resData = res.data
            setInfoData(resData.a)
            setEduData(resData.b)
            setCareerData(resData.c)
            setDevData(resData.d)
            setAwardData(resData.e)
            setIntroData(resData.f)

            setLoading(false)
        })
    }, []);
    return (
        <div className={boardCss.boardContainer}>
            {loading && <LoadingSpinner/>}
            {!loading &&
                 <div id={"contents"}>
                    {/* 인적사항 */}
                    <div className={'flex justify-between'}>
                        <div>{infoData[0].headName}</div>
                    </div>
                    <div className={boardCss.post}>
                        {infoData.map((item, index) => (
                            <div key={index} className={boardCss.postTitle}>
                                {item.bodyTitle} |
                                <span className={boardCss.postText}> {item.bodyCont}</span>
                            </div>
                        ))}
                    </div>

                    {/* 학력 */}
                    <div className={'flex justify-between'}>
                        <div>{eduData[0].headName}</div>
                    </div>
                    <div className={boardCss.post}>
                        {eduData.map((item, index) => (
                            <div key={index} className={boardCss.postTitle}>
                                {item.bodyTitle} |
                                <span className={boardCss.postText}> {item.bodyCont}</span>
                            </div>
                        ))}
                    </div>

                    {/* 경력 */}
                    <div className={'flex justify-between'}>
                        <div>{careerData[0].headName}</div>
                    </div>
                    <div className={boardCss.post}>
                        {careerData.map((item, index) => (
                            <div key={index} className={boardCss.postTitle}>
                                {item.bodyTitle} |
                                <span className={boardCss.postText}> {item.bodyCont}</span>
                            </div>
                        ))}
                    </div>

                    {/* 개발 */}
                    <div className={'flex justify-between'}>
                        <div>{devData[0].headName}</div>
                    </div>
                    <div className={boardCss.post}>
                        {devData.map((item, index) => (
                            <div key={index} className={boardCss.postTitle}>
                                {item.bodyTitle} |
                                <span className={boardCss.postText}> {item.bodyCont}</span>
                            </div>
                        ))}
                    </div>

                    {/* 수상 */}
                    <div className={'flex justify-between'}>
                        <div>{awardData[0].headName}</div>
                    </div>
                    <div className={boardCss.post}>
                        {awardData.map((item, index) => (
                            <div key={index} className={boardCss.postTitle}>
                                {item.bodyTitle} |
                                <span className={boardCss.postText}> {item.bodyCont}</span>
                            </div>
                        ))}
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
                </div>
            }
        </div>
    );
}

export default Board;