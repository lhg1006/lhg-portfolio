import {axiosFile} from "@/app/api/call/index";
import {ImageReturnType} from "@/types/photoType";

export const imageUpload = async (formData: any) => {
    return await axiosFile.post<ImageReturnType>('/api/photo/upload/file', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}