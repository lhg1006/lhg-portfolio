'use client';

import React, {useRef, useState} from "react";
import Layout from "@/components/layout";
import boardCss from "@/public/css/board.module.css"

const Write = () => {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const imageDataUrl = reader.result as string;
                setUploadedImage(imageDataUrl);
            };
        }
    };

    return <>
        <Layout>
            <div className={boardCss.postForm}>
                <h3 className={'mb-5 text-xl'}>공지사항 작성</h3>
                <input type="text" placeholder="제목"/>
                <div className={'mb-5'}>
                    <label className={boardCss.fileInputButton}>
                        파일 선택
                        <input type="file" accept="image/*" onChange={handleImageChange}/>
                    </label>
                </div>
                {uploadedImage && (
                    <>
                        <div className={boardCss.imageContainer}>
                            <div className={boardCss.postPhotoBox}
                                 style={{backgroundImage: `url(${uploadedImage})`,}}
                            />
                            <div className={boardCss.cancelButton}>X</div>
                        </div>
                    </>
                )}
                <textarea
                    className={'text-xl'}
                    placeholder="내용"
                ></textarea>
                <button>작성하기</button>
            </div>
        </Layout>
    </>
}

export default Write