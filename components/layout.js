// Layout.tsx
'use client'
import React, {useEffect, useState} from 'react';
import Head from "next/head";
import Link from "next/link";
import BackButton from "@/components/backButton";
import navCss from "@/public/css/nav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


function Layout({children}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return ( mounted &&
        <div>
            <Head>
                <title>반응형 웹사이트</title>
            </Head>
            <header>
                <nav className={`${navCss.gridContainer} ${navCss.navbar} ${isNavOpen ? navCss.active : ''}`}>
                    <div className={navCss.burger} onClick={toggleNav}>
                        <div className={navCss.line1}></div>
                        <div className={navCss.line2}></div>
                        <div className={navCss.line3}></div>
                    </div>

                    <div className={navCss.logo}>
                        <a>로고</a>
                    </div>

                    <BackButton/>

                    <ul className={`${navCss.navLinks} ${isNavOpen ? navCss.active : ''}`}>
                        <Link href={'/'}><li><div>홈</div></li></Link>
                        <Link href={'/service'}><li><div>서비스</div></li></Link>
                        <Link href={'/portfolio'}><li><div>포트폴리오</div></li></Link>
                        <Link href={'/blog'}><li><div>블로그</div></li></Link>
                        <Link href={'/call'}><li><div>연락하기</div></li></Link>

                        <Link href={'/calendar'}><li><div>일정</div></li></Link>
                    </ul>
                </nav>
            </header>

            <main>
                {/* 페이지 컨텐츠 */}
                {children}
            </main>

            <button
                className={`${isDarkMode ? 'moon' : 'sun'} darkModeButton`}
                onClick={toggleDarkMode}
            >
                {isDarkMode ? (
                    <FontAwesomeIcon icon={faMoon} />
                    ) : (
                    <FontAwesomeIcon icon={faSun} />
            )}
            </button>

            <footer>
                <p>&copy; {new Date().getFullYear()} 반응형 웹사이트</p>
            </footer>
        </div>
    );
}

export default Layout;
