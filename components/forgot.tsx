import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {ChangePwInputs, ForgotInputs} from "@/types/loginDataType";
import {phoneNumberAutoFormat} from "@/util/utils";
import {changePassword, forgotPassword} from "@/api/call/auth";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";


const Forgot = () => {
  const router = useRouter()
  
  //유저정보확인
  const schema = yup.object().shape({
    email: yup.string().required(),
    phone: yup.string().required(),
  }).required()

  const methods = useForm<ForgotInputs>({
    resolver: yupResolver(schema)
  })
  
  const onSubmit = (data:ForgotInputs) => {
    forgotPassword(data).then((res)=>{
      if(res.data){
        toast.success("비밀번호를 변경해주세요.")
        setModalOpen(true);
      }else{
        toast.warning("일치하는 정보가 없습니다.")
      }
    })
  }

  //전화번호 오토하이픈
  const [value, setValue] = useState<string>("");
  const onChange = (e:any) => {
    const targetValue = phoneNumberAutoFormat(e.target.value);
    setValue(targetValue);
  };
  
  //비밀번호변경
  const changePwSchema = yup.object().shape({
    email: yup.string().required(),
    changePassword: yup.string().required().length(6),
    changeChkPassword:yup.string().required(),
  })
  
  const changePwMethods = useForm<ChangePwInputs>({
    resolver: yupResolver(changePwSchema)
  })
  
  const changePw = () => {
    if(changePwMethods.getValues("changePassword") === changePwMethods.getValues("changeChkPassword")){
      const param = {
        email: methods.getValues("email"),
        password: changePwMethods.getValues("changePassword")
      }
      changePassword(param).then((res)=>{
        if(res.data === 1){
          setModalOpen(false)
          toast.success("비밀번호가 변경되었습니다.")
          router.push("/")
        }
      })
    }else{
      toast.warning("비밀번호를 확인하세요.")
      return;
    }
  }

  //모달 이벤트
  const modalClose = () => {
    setModalOpen(false);
  };

  const [modalOpen, setModalOpen] = useState(false);

  return(
    <>
      <div className="auth-wrapper">
        <div className="auth-inner forgot-password-inner bg-white shadow-md p-6 w-96 mx-auto">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <h3 className="text-xl font-semibold mb-4">비밀번호 찾기</h3>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">이메일</label>
              <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="w-full px-3 py-2 border rounded-lg"
                  {...methods.register("email")}
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
                  {...methods.register("phone", { onChange: onChange })}
                  value={value}
              />
            </div>
            <div className="mb-4">
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Submit
              </button>
            </div>
            <p className="text-right text-sm">
              <a className="text-blue-500" href="/login">로그인으로</a>
            </p>
          </form>
          {/*비밀번호 변경 모달*/}
          {/*<Modal open={modalOpen} close={modalClose} header="Change Password">*/}
          {/*  <div className="mb-3">*/}
          {/*    <label>Password</label>*/}
          {/*    <input*/}
          {/*      type="password"*/}
          {/*      className="form-control"*/}
          {/*      placeholder="Enter password"*/}
          {/*      {...changePwMethods.register("changePassword")}*/}
          {/*    />*/}
          {/*    {changePwMethods.formState?.errors?.changePassword ? "※ 6자리 이상 입력해주세요" : ""}*/}
          {/*  </div>*/}
          {/*  <div className="mb-3">*/}
          {/*    <label>Password Confirm</label>*/}
          {/*    <input*/}
          {/*      type="password"*/}
          {/*      className="form-control"*/}
          {/*      placeholder="Enter password"*/}
          {/*      {...changePwMethods.register("changeChkPassword")}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div className="d-grid">*/}
          {/*    <button type="button" className="btn btn-primary" onClick={changePw}>*/}
          {/*      Submit*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</Modal>*/}
        </div>
      </div>
    </>
  )
}

export default Forgot;