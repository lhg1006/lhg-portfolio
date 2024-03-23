import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"
import {login} from "@/app/api/call/auth";
import {LoginInputs} from "@/types/loginDataType";
import {toast} from "react-toastify";
import {addLocalStorageItem, delLocalStorageItem, getCookie, getLocalStorageItem} from "@/util/utils";
import {useRouter} from "next/navigation";

const Login = () => {
    const remember = getLocalStorageItem("rememberEmail")
    const isLogin = getCookie('isLogin')

    useEffect(() => {
        if (isLogin) {
            window.location.replace("/main")
        }

        if (remember != undefined) {
            methods.setValue("email", remember)
            methods.setValue("remember", true)
        }
    }, [])

    const router = useRouter()

    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required(),
        remember: yup.boolean()
    }).required()

    const methods = useForm<LoginInputs>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: LoginInputs) => {
        login(data).then((res) => {
            if (res.data === 1) {
                if (data.remember) {
                    addLocalStorageItem("rememberEmail", data.email)
                } else {
                    delLocalStorageItem("rememberEmail")
                }
                toast.success("인증 성공")
                router.push("/main")
            } else {
                toast.error("입력 정보를 확인하세요")
            }
        })
    };
    return (
        <>
            {!isLogin &&
                <div className="auth-wrapper">
                    <div className="auth-inner bg-white shadow-md p-6 w-96 mx-auto">
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <h3 className="text-2xl font-semibold mb-4">로그인</h3>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600">아이디</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Address@example.com"
                                    className="w-full px-3 py-2 border rounded-lg"
                                    {...methods.register("email", {pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-600">비밀번호</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-3 py-2 border rounded-lg"
                                    {...methods.register("password")}
                                />
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox text-blue-500"
                                        id="customCheck1"
                                        {...methods.register("remember")}
                                    />
                                    <label className="ml-2 text-gray-600" htmlFor="customCheck1">기억하기</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <button type="submit"
                                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                    Submit
                                </button>
                            </div>
                            <p className="text-right text-sm">
                                 <a className="text-blue-500" href="/auth/forgot">비밀번호찾기</a>
                                <br/><a className="text-blue-500" href="/auth/signUp">회원가입</a>
                            </p>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}
export default Login