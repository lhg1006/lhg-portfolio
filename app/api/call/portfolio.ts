import axios from "axios";
import {CareerResType, ResumeResType} from "@/types/apiResultType";

const instance = axios.create({
    baseURL: '/api',
});
export const getResumeData = async () : Promise<ResumeResType> => {
    return await instance.get(`/portfolio/resume`)
}

export const getCareerData = async () : Promise<CareerResType> => {
    return await instance.get(`/portfolio/career`)
}