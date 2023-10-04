// Layout.tsx
import React from 'react';
import Head from "next/head";

function Layout({children}) {
    return (
        <div>
            <Head>
                <title>반응형 웹사이트</title>
                <link rel="stylesheet" href="/styles/styles.css"/>
            </Head>
            <header>
                <h1>responsiveWebsite</h1>
                <nav>
                    <ul>
                        <li><a href="#">홈</a></li>
                        <li><a href="#">서비스</a></li>
                        <li><a href="#">서비스2</a></li>
                        <li><a href="#">연락하기</a></li>
                    </ul>
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
