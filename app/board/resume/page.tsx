'use client'
import Layout from "@/components/layout";
import React, {useEffect, useState} from 'react';
import boardCss from "@/public/css/board.module.css"
import {getResumeData} from "@/app/api/call/portfolio";
import {ResumeDataType} from "@/types/apiResultType";
import LoadingSpinner from "@/components/loadingSpinner";

const ResumePage = () => {
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
        <Layout isAdmin={false}>
            <div style={{marginTop: '60px'}}>
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

                        {/* 자기소개 */}
                        <div className={'flex justify-between'}>
                            <div>{introData[0].headName}</div>
                        </div>
                        <div className={boardCss.post}>
                            {introData.map((item, index) => (
                                <div key={index} className={boardCss.postTitle}>
                                    {item.bodyTitle} |<div className={boardCss.postText} dangerouslySetInnerHTML={{ __html: item.bodyCont }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </Layout>
    )
}
export default ResumePage