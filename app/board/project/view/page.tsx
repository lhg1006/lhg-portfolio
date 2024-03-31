'use client'
import Layout from "@/components/layout";
import React, {useEffect, useState} from "react";
import {getSingleProjectData} from "@/app/api/call/portfolio";
import {SingleProjectDataType} from "@/types/apiResultType";
import projectCss from "@/public/css/project.module.css";
import {useSearchParams} from "next/navigation";

const ViewPage = () =>{
    const photoUrl = process.env.NEXT_PUBLIC_PHOTO_URL
    const searchParams  = useSearchParams();
    const projectId = searchParams.get('projectId') as string

    const [singleData, setSingleData] = useState<SingleProjectDataType>({
        autoNo: 0,
        title: "",
        images: [],
        texts: []
    })

    useEffect(()=>{
        getSingleProjectData(projectId).then((res)=>{
            console.log(res)
            const {autoNo, title, images, texts} = res.data
            setSingleData({autoNo, title, images, texts})
        })
    },[])


    return <>
        <Layout >
            <div className={projectCss.mainWrapper}>
                <div className={projectCss.titleWrapper}>
                    <div className={projectCss.title}>{singleData.title}</div>
                </div>
                <div className={projectCss.contentWrapper}>
                    {singleData.images.map((image, index) => (
                        <div key={index} className={projectCss.imageWrapper}>
                            <div className={projectCss.imageContainer}>
                                <img src={photoUrl+image} alt={`Image ${index + 1}`} className={projectCss.image} />
                            </div>
                            <p className={projectCss.content}>
                                {singleData.texts[index]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    </>
}

export default ViewPage