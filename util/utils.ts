// utils.ts
export function generatePosts() {
    const posts = [];
    for (let i = 1; i <= 15; i++) {
        posts.push({
            id: i,
            title: `제목 ${i}`,
            image: `https://via.placeholder.com/150?text=이미지${i}`,
        });
    }
    return posts;
}


export const phoneNumberAutoFormat = (phoneNumber: string): string => {
    const number = phoneNumber.trim().replace(/[^0-9]/g, "");

    if (number.length < 4) return number;
    if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
    if (number.length < 11) return number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
    return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
};


export const getCookie = (cName : string) => {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
}

export const addLocalStorageItem = (iName : string, iValue : string) => {
    window.localStorage.setItem(iName, iValue)
}
export const delLocalStorageItem = (iName : string) => {
    window.localStorage.removeItem(iName)
}
export const getLocalStorageItem = (iName : string) => {
    return window.localStorage.getItem(iName)
}

// 이미지가 정사각형인지를 비동기적으로 확인하는 유틸리티 함수 *미사용 .. 우선 만들어 둠
export const isImageSquare = async (imageUrl : string) =>{
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = imageUrl;

        img.onload = () => {
            const width = img.width;
            const height = img.height;

            const isSquare = width === height;

            resolve(isSquare);
        };

        img.onerror = (error) => {
            reject(error);
        };
    });
}