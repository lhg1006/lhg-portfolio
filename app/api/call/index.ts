import axiosLib from 'axios'
const photoUrl = process.env.NEXT_PUBLIC_SERVER_URL
export const axiosFile = axiosLib.create({
    baseURL: photoUrl,
})

