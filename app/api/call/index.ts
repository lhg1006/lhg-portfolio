import axiosLib from 'axios'
const photoUrl = process.env.NEXT_PUBLIC_PHOTO_URL
export const axiosFile = axiosLib.create({
    baseURL: photoUrl,
})

