"use client"
import React, { useRef, useState } from "react";
import Layout from "@/components/layout";
import boardCss from "@/public/css/board.module.css";
import { PrevImgList } from "@/types/photoType";
import { imageUpload } from "@/app/api/call/photo";
import { toast } from "react-toastify";
import {ProjectUploadDataType} from "@/types/apiResultType";
import {projectUpload} from "@/app/api/call/portfolio";
import ConfirmModal from "@/components/confirmModal";
import {useRouter} from "next/navigation";

const Write = () => {
    // const MAX_FILE_COUNT = 5;
    const router = useRouter();
    const titleRef = useRef<HTMLInputElement | null>(null)
    const photoBaseUrl = process.env.NEXT_PUBLIC_PHOTO_URL
    const [contentList, setContentList] = useState<
        Array<{ image: PrevImgList | null; text: string }>
    >([{ image: null, text: "" }]);
    const [projectParam, setProjectParam] = useState<ProjectUploadDataType>({
        title: "",
        images: [],
        texts: []
    })

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    // 파일 선택 및 이미지 변경 이벤트 핸들러
    const handleChangeFile = (e: any, index: number) => {
        if (e.target.files.length > 0) {
            onPhotoUpload(e.target.files[0], index);
        }
    };

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const newText = e.target.value;
        setContentList((prevList) => {
            const updatedList = [...prevList];
            updatedList[index].text = newText;
            return updatedList;
        });
    };

    // 이미지 업로드 및 에러 핸들러
    const onPhotoUpload = (file: any, index: number) => {
        const fd = new FormData();
        fd.append("file", file);

        imageUpload(fd)
            .then((res) => {
                const result = {
                    imagePath: res.data.imageData[0].imagePath,
                    imageUrl: photoBaseUrl + res.data.imageData[0].imageUrl,
                    fileName: res.data.imageData[0].imageName,
                };
                const updatedContentList = [...contentList];
                updatedContentList[index].image = result;
                setContentList(updatedContentList);
            })
            .catch((error) => {
                toast.error(
                    () => (
                        <div>
                            {error}
                            <br />
                            서버와의 통신이
                            <br />
                            원활하지 않습니다.
                            <br />
                            잠시 후 다시 시도해 주세요.
                        </div>
                    )
                );
            });
    };

    // 이미지 삭제 핸들러
    const handleDeleteImage = (index: number) => {
        setContentList((prevList) => {
            const updatedList = [...prevList];
            updatedList[index].image = null; // 해당 인덱스의 이미지를 삭제
            return updatedList;
        });
    };

    const addContent = () => {
        setContentList((prevList) => [
            ...prevList,
            { image: null, text: "" },
        ]);
    };

    const addPost = () => { // 실제 데이터 저장 실행
        projectUpload(projectParam).then((res)=>{
            const {data} = res

            if(data === 1){
                toast.success('성공 : 정상적으로 처리되었습니다.')
                router.push('/board/project');
            }else if(data === 99){
                toast.error('실패 : 입력 값을 확인해 주세요.')
            }else{
                toast.error('실패 : 서버와의 통신이 원활하지 않습니다.')
            }
        })
    };

    const handleConfirm = () => {
        addPost(); // 저장 실행
        setModalIsOpen(false); // 모달 닫기
        setProjectParam({title:"", images: [], texts: []})
    };

    const handleClose = () => {
        setModalIsOpen(false); // 모달 닫기
        setProjectParam({title:"", images: [], texts: []})
    };

    const handleAddPostButtonClick = () => {
        setModalIsOpen(true); // 모달 열기
    };


    const submitButton = () => {
        let available = false
        let errorText = ""

        const title = titleRef.current?.value

        // 이미지와 텍스트 값을 담을 배열 초기화
        const images: string[] = [];
        const texts: string[] = [];

        // contentList를 순회하며 이미지와 텍스트를 추출
        contentList.forEach(content => {
            if (content.image) {
                images.push(content.image.imagePath);
            }
            if (content.text) {
                texts.push(content.text);
            }
        });
        // set param
        setProjectParam({title:title, images: images, texts: texts})

        if(title !== "" && texts[0] !== undefined){
            available = true
        }

        if(title === ""){
            errorText = "제목을 입력해 주세요."
        }else if(texts[0] === undefined){
            errorText = "첫번째 항목의 내용은 필수 입니다."
        }
        
        if(available){
            handleAddPostButtonClick()
        }else{
            toast.error(errorText);
        }

    }

    return (
        <>
            <Layout>
                <div className={boardCss.formContainer}>
                    <div className={boardCss.postForm}>
                        <h3 className={"mb-5 text-xl"}>작성</h3>
                        <input ref={titleRef} type="text" placeholder="제목" />
                        {contentList.map((content, index) => (
                            <div key={index} className="post">
                                <div className={"mb-5"}>
                                    <label className={boardCss.fileInputButton}>
                                        이미지 추가
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleChangeFile(e, index)}
                                        />
                                    </label>
                                </div>
                                <div className={boardCss.postContent}>
                                    {content.image && (
                                        <div className={boardCss.imageContainer}>
                                            <div className={boardCss.prevPhotoBox}>
                                                <img src={content.image.imageUrl} alt={'prevImg'}/>
                                            </div>
                                            <div className={boardCss.cancelButton} onClick={() => handleDeleteImage(index)}>X</div>
                                        </div>
                                    )}
                                    <textarea
                                        style={{
                                            width: "calc(100% - 20px)",
                                            height: "100px",
                                            border: "1px solid #ccc",
                                        }}
                                        placeholder="내용을 입력하세요..."
                                        value={content.text}
                                        onChange={(e) => handleChangeText(e, index)}
                                    ></textarea>
                                </div>
                            </div>
                        ))}
                        <button onClick={addContent}>추가하기</button>
                    </div>
                    <button onClick={submitButton} className={boardCss.submitButton}>작성하기</button>
                    <ConfirmModal
                        isOpen={modalIsOpen}
                        onClose={handleClose}
                        onConfirm={handleConfirm}
                        message="포스트를 추가하시겠습니까?"
                    />
                </div>
            </Layout>
        </>
    );
};
export default Write;
