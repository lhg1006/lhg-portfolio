'use client'

import Layout from "@/components/layout";
import React from "react";
import PostList from "@/components/postList";

const ProjectPage = () =>{
    return <>
        <Layout isAdmin={false}>
            <div style={{marginTop:"50px"}}>
                <PostList isAdmin={false}/>
            </div>
        </Layout>
    </>
}

export default ProjectPage