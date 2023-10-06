// Layout.tsx
'use client'
import React, {useEffect, useState} from 'react';
import Head from "next/head";
import Link from "next/link";

function Layout({children}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return ( mounted &&
        <div>
            <Head>
                <title>반응형 웹사이트</title>
                <link rel="stylesheet" href="/styles/styles.css"/>
            </Head>
            <header>
                <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
                    <div className="logo">
                        <a href="#">로고</a>
                    </div>
                    <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
                        <Link href={'/home'}><li><a href="#">홈</a></li></Link>
                        <Link href={'/service'}><li><a href="#">서비스</a></li></Link>
                        <Link href={'/portfolio'}><li><a href="#">포트폴리오</a></li></Link>
                        <Link href={'/blog'}><li><a href="#">블로그</a></li></Link>
                        <Link href={'/call'}><li><a href="#">연락하기</a></li></Link>
                    </ul>
                    <div className="burger" onClick={toggleNav}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </header>

            <main>
                {/* 페이지 컨텐츠 */}
                {children}
            </main>

            <footer>
                <p>&copy; {new Date().getFullYear()} 반응형 웹사이트</p>
            </footer>
        </div>
    );
}

export default Layout;
