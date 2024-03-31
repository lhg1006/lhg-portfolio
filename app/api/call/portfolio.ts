import axios from "axios";
import {
    CareerResType, ProjectDataCountResType, ProjectDataResType,
    ProjectUploadDataType,
    ResumeResType,
    SingleProjectResType
} from "@/types/apiResultType";
import {LoginInputs} from "@/types/loginDataType";

const instance = axios.create({
    baseURL: '/api/portfolio',
});
export const getResumeData = async () : Promise<ResumeResType> => {
    return await instance.get(`/resume`)
}

export const getCareerData = async () : Promise<CareerResType> => {
    return await instance.get(`/career`)
}

export const getProjectDataCount = async () : Promise<ProjectDataCountResType> => {
    return await instance.get(`/project/data/count`)
}

export const getProjectData = async (data : number) : Promise<ProjectDataResType> => {
    return await instance.get(`/project/data?pageNo=${data}`)
}

export const getSingleProjectData = async (data : string) : Promise<SingleProjectResType> => {
    return await instance.get(`/project/data/single?projectId=${data}`)
}

export const loginAuth = async (data: LoginInputs) => {
    return await instance.post(`/login/auth`, data)
}

export const projectUpload = async (data : ProjectUploadDataType) => {
    return await instance.post(`/project/upload`, data)
}