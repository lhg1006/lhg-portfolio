import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {usePathname, useRouter} from "next/navigation";
import navCss from "@/public/css/nav.module.css";

const BackButton = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleBackClick = () => {
        router.back()
    };

    return (
        <>
            {pathname !== '/home' &&
                <button className={navCss.backButton} onClick={handleBackClick}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
            }
        </>
    );
};

export default BackButton;
