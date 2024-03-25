"use client"
import React, { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout";
import boardCss from "@/public/css/board.module.css";
import { PrevImgList } from "@/types/photoType";
import { imageUpload } from "@/app/api/call/photo";
import { toast } from "react-toastify";

const Write = () => {
    const MAX_FILE_COUNT = 5;
    const photoBaseUrl = process.env.REACT_APP_PHOTO_URL;
    const [contentList, setContentList] = useState<
        Array<{ image: PrevImgList | null; text: string }>
    >([{ image: null, text: "" }]);

    // 파일 선택 및 이미지 변경 이벤트 핸들러
    const handleChangeFile = (e: any, index: number) => {
        if (e.target.files.length > 0) {
            onPhotoUpload(e.target.files[0], index);
        }
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

    const addContent = () => {
        setContentList((prevList) => [
            ...prevList,
            { image: null, text: "" },
        ]);
    };

    const addPost = () => {

    }

    useEffect(() => {
        console.log(contentList);
    }, [contentList]);

    return (
        <>
            <Layout>
                <div className={boardCss.boardContainer}>
                    <div className={boardCss.postForm}>
                        <h3 className={"mb-5 text-xl"}>작성</h3>
                        <input type="text" placeholder="제목" />
                        {contentList.map((content, index) => (
                            <div key={index} className="post">
                                <div className={"mb-5"}>
                                    <label className={boardCss.fileInputButton}>
                                        파일 선택
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
                                            <div
                                                className={boardCss.postPhotoBox}
                                                style={{
                                                    backgroundImage: `url(${
                                                        process.env.NEXT_PUBLIC_PHOTO_URL +
                                                        content.image.imagePath
                                                    })`,
                                                }}
                                            />
                                            <div className={boardCss.cancelButton}>X</div>
                                        </div>
                                    )}
                                    <textarea
                                        style={{
                                            width: "calc(100% - 20px)",
                                            height: "100px",
                                            border: "1px solid #ccc",
                                        }}
                                        placeholder="내용을 입력하세요..."
                                    ></textarea>
                                </div>
                            </div>
                        ))}
                        <button onClick={addContent}>추가하기</button>
                    </div>
                    <button onClick={addPost} className={boardCss.submitButton}>작성하기</button>
                </div>
            </Layout>
        </>
    );
};
export default Write;
