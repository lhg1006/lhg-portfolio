export type ResumeDataType = {
    autoNo : number
    headName : string
    headCode : string
    bodyTitle : string
    bodyCont : string
    orderNo : number
}

export type ResumeResType = {
    data:{
        a:ResumeDataType[],
        b:ResumeDataType[],
        c:ResumeDataType[],
        d:ResumeDataType[],
        e:ResumeDataType[],
        f:ResumeDataType[],
    }
}

export type CareerDataType = {
    autoNo : number
    orderNo : number
    projectName : string
    mainTasks : string
    companyName : string
    role : string
    techStack : string
    duration : string
}

export type CareerResType = {
    data:{
        careerData:CareerDataType[]
    }
}

export type ProjectUploadDataType = {
    title: string | undefined;
    images: string[] | null;
    texts: string[];
}
