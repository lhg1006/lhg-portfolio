// Layout.tsx
'use client'
import React, {useEffect, useState} from 'react';
import Head from "next/head";
import Link from "next/link";
import BackButton from "@/components/backButton";
import navCss from "@/public/css/nav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const Layout = ({children, isAdmin} : {children: any; isAdmin: any}) =>{
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
                <title>이효규 포트폴리오</title>
            </Head>
            <header>
                <nav className={`${navCss.gridContainer} ${navCss.navbar} ${isNavOpen ? navCss.active : ''}`}>
                    <div className={navCss.burger} onClick={toggleNav}>
                        <div className={navCss.line1}></div>
                        <div className={navCss.line2}></div>
                        <div className={navCss.line3}></div>
                    </div>

                    <div className={navCss.logo}>
                        <Link href={'/'}><img src='/images/pflogo.png' className={navCss.logoIco}></img></Link>
                    </div>

                    <BackButton/>

                    <ul className={`${navCss.navLinks} ${isNavOpen ? navCss.active : ''}`}>
                        <Link href={'/'}><li><div>홈</div></li></Link>
                        <Link href={'/board/resume'}><li><div>이력서</div></li></Link>
                        <Link href={'/board/project'}><li><div>프로젝트</div></li></Link>
                        <Link href={'/board/career'}><li><div>경력기술서</div></li></Link>
                        {/*<Link href={'/nav/calendar'}><li><div>일정</div></li></Link>*/}
                        {isAdmin && <Link href={'/auth/login'}><li><div>로그인</div></li></Link>}
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
                <p>이효규 포트폴리오</p>
                <p>H.P 010-8649-9668</p>
                <p>EMAIL lhg961006@gmail.com</p>
                <p>&copy; {new Date().getFullYear()} design by lhg1006</p>
            </footer>
        </div>
    );
}

export default Layout;
