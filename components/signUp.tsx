import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {SignUpInputs} from "@/types/loginDataType";
import {confirmEmailDuplication, signUp} from "@/app/api/call/auth";
import {getCookie, phoneNumberAutoFormat} from "@/util/utils";
import {toast} from "react-toastify";
import {signUpSchema} from "@/schema/signUp";
import {useRouter} from "next/navigation";

const SignupPage = () => {
    const [emailOk, setEmailOk] = useState(false);
    const isLogin = getCookie('isLogin')
    const router = useRouter()

    const methods = useForm<SignUpInputs>({
        resolver: yupResolver(signUpSchema)
    });

    const onSignUp = (data: SignUpInputs) => {
        if (!emailOk) {
            window.alert("이메일 중복확인")
            return;
        }
        signUp(data).then((res) => {
            switch (res.data) {
                case 1 :
                    toast.success("회원가입 성공.")
                    router.push("/");
                    break;
                case -2:
                    toast.error("비밀번호를 확인하세요.")
                    break;
                default:
                    window.alert("System Error ...")
            }
        })
    }

    const emailChk = (data: string) => {
        if (!data.match(/\S+@\S+\.\S+/)) return;
        confirmEmailDuplication(data).then((res) => {
            if (res.data === 0) {
                setEmailOk(true)
                toast.success("사용가능한 이메일 입니다.")
            } else if (res.data === 1) {
                setEmailOk(false)
                toast.warning("이미 등록된 이메일 입니다.")
            }
        })
    }

    const [value, setValue] = useState<string>("");
    const onChange = (e: any) => {
        const targetValue = phoneNumberAutoFormat(e.target.value);
        setValue(targetValue);
    };

    useEffect(() => {
        if (isLogin) {
            window.location.replace('/main')
        }
    }, [])
    return (
        <>
            {!isLogin &&
                <div className="auth-wrapper">
                    <div className="auth-inner sign-up-inner bg-white shadow-md p-6 w-96 mx-auto">
                        <form onSubmit={methods.handleSubmit(onSignUp)}>
                            <h3 className="text-2xl font-semibold mb-4">회원가입</h3>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-600">이름</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-3 py-2 border rounded-lg"
                                    {...methods.register("name")}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-600">전화번호</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    maxLength={13}
                                    placeholder="Phone number"
                                    className="w-full px-3 py-2 border rounded-lg"
                                    {...methods.register("phone", {onChange: onChange})}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600">이메일</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-3 py-2 border rounded-lg"
                                    {...methods.register("email")}
                                />
                            </div>
                            <div className="mb-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        emailChk(methods.getValues("email"));
                                    }}
                                    className={`w-full py-2 rounded-lg ${
                                        !emailOk ? "bg-gray-300" : "bg-green-500 text-white hover:bg-green-600"
                                    }`}
                                >
                                    {!emailOk ? "이메일 확인" : "인증됨"}
                                </button>
                            </div>
                            <span className="form-error-message">
                            {methods.formState?.errors?.password?.message ? methods.formState?.errors?.password?.message : ""}
                            </span>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-600">비밀번호</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-3 py-2 border rounded-lg"
                                    {...methods.register("password")}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="chkPassword" className="block text-gray-600">비밀번호 확인</label>
                                <input
                                    id="chkPassword"
                                    type="password"
                                    placeholder="Password Confirm"
                                    className="w-full px-3 py-2 border rounded-lg"
                                    {...methods.register("chkPassword")}
                                />
                            </div>
                            <div className="mb-4">
                                <button type="submit"
                                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                    가입하기
                                </button>
                            </div>
                            <p className="text-right text-sm">
                                계정이 있으신가요? <a className="text-blue-500" href="/auth/login"> 로그인으로</a>
                            </p>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default SignupPage