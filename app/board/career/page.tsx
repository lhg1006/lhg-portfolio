"use client";

import Layout from "@/components/layout";
import boardCss from "@/public/css/board.module.css";
import React, {useEffect, useState} from "react";
import {getCareerData} from "@/app/api/call/portfolio";
import {CareerDataType} from "@/types/apiResultType";
import LoadingSpinner from "@/components/loadingSpinner";

const CareerPage = () =>{
    const [loading, setLoading] = useState<boolean>(true)
    const [careerData, setCareerData] = useState<CareerDataType[]>([])

    useEffect(() => {
        getCareerData().then((res)=>{
            setCareerData([...res.data.careerData])
            setLoading(false)
        })
    }, []);

    return <>
        <Layout>
            <div>
                {loading && <LoadingSpinner/>}
                {!loading && careerData.map((career, index) => (
                    <div key={index} style={{marginBottom:'40px'}}>
                        <div className={'flex justify-between'} style={{ fontSize: "x-large" }}>
                            <div>프로젝트명 : {career.projectName}</div>
                        </div>
                        <div className={boardCss.post}>
                            <div className={boardCss.postTitle}>관련 회사 |
                                <span className={boardCss.postText}> {career.companyName}</span>
                            </div>
                            <div className={boardCss.postTitle}>주요 업무 |
                                <span className={boardCss.postText}> {career.mainTasks}</span>
                            </div>
                            <div className={boardCss.postTitle}>담당 역할 |
                                <span className={boardCss.postText}> {career.role}</span>
                            </div>
                            <div className={boardCss.postTitle}>기술 스택 |
                                <span className={boardCss.postText}> {career.techStack}</span>
                            </div>
                            <div className={boardCss.postTitle}>업무 기간 |
                                <span className={boardCss.postText}> {career.duration}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    </>
}
export default CareerPage