'use client'
import Layout from "@/components/layout";
import React, {useEffect, useState} from "react";
import {getSingleProjectData} from "@/app/api/call/portfolio";
import {SingleProjectDataType} from "@/types/apiResultType";

const ViewPage = () =>{
    const [singleData, setSingleData] = useState<SingleProjectDataType>({
        title: "",
        images: [],
        texts: []
    })

    useEffect(()=>{
        const projectId =  '7'
        getSingleProjectData(projectId).then((res)=>{
            console.log(res)
            const {title, images, texts} = res.data
            setSingleData({title, images, texts})
        })
    },[])


    return <>
        <Layout >
            <div>
                <h1>{singleData.title}</h1>
                <div>
                    {singleData.images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Image ${index + 1}`} />
                            <p>{singleData.texts[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    </>
}

export default ViewPage