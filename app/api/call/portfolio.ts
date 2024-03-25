import axios from "axios";
import {CareerResType, ResumeResType} from "@/types/apiResultType";
import {LoginInputs} from "@/types/loginDataType";

const instance = axios.create({
    baseURL: '/api',
});
export const getResumeData = async () : Promise<ResumeResType> => {
    return await instance.get(`/portfolio/resume`)
}

export const getCareerData = async () : Promise<CareerResType> => {
    return await instance.get(`/portfolio/career`)
}

export const loginAuth = async (data: LoginInputs) => {
    return await instance.post(`/portfolio/login/auth`, data)
}