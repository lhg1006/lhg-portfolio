"use client"
import React, { useRef, useState } from "react";
import Layout from "@/components/layout";
import boardCss from "@/public/css/board.module.css";
import { PrevImgList } from "@/types/photoType";
import { imageUpload } from "@/app/api/call/photo";
import { toast } from "react-toastify";

const Write = () => {
    interface ImageData {
        imagePath: string;
    }

    interface Content {
        title: string | undefined;
        images: ImageData[] | null;
        texts: string[];
    }

    // const MAX_FILE_COUNT = 5;
    const titleRef = useRef<HTMLInputElement | null>(null)
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

    const addPost = () => {
        // 이미지와 텍스트 값을 담을 배열 초기화
        const images: ImageData[] = [];
        const texts: string[] = [];

        // contentList를 순회하며 이미지와 텍스트를 추출
        contentList.forEach(content => {
            if (content.image) {
                images.push(content.image);
            }
            if (content.text) {
                texts.push(content.text);
            }
        });

        const postData : Content = {
            title: titleRef.current?.value,
            images: images,
            texts: texts,
        };

        console.log(postData)
    };

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
                                                <img src={process.env.NEXT_PUBLIC_PHOTO_URL + content.image.imagePath} alt={'prevImg'}/>
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
                    <button onClick={addPost} className={boardCss.submitButton}>작성하기</button>
                </div>
            </Layout>
        </>
    );
};
export default Write;
