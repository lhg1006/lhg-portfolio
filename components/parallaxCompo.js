import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import '../public/css/parallax.css';
import { useEffect, useState } from "react";

const ParallaxComponent = () => {
    // 스크롤 위치를 추적하는 커스텀 Hook
    const useScrollPosition = () => {
        const [scrollY, setScrollY] = useState(0);

        useEffect(() => {
            const handleScroll = () => {
                setScrollY(window.scrollY);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        return scrollY;
    };

    const scrollY = useScrollPosition();

    const parallaxStyle = {
        transform: `translateY(${scrollY * 0.5}px)`,
    };

    return (
        <ParallaxProvider>
            <div className="parallax-section" style={{ height: '100vh' }}>
                <Parallax y={[50, -50]}>
                    <div className="parallax-content" style={parallaxStyle}>
                        <h1>Parallax Scrolling</h1>
                        <p>This is a parallax scrolling example.</p>
                    </div>
                </Parallax>
            </div>

            <div className="parallax-section" style={{ height: '30vh' }}>
                <Parallax y={[30, -30]}>
                    <img
                        src="/images/imageA.jpg"
                        alt="Parallax Image"
                        className="parallax-image"
                    />
                </Parallax>
            </div>

            <div className="parallax-section" style={{ height: '100vh' }}>
                <Parallax y={[50, -50]}>
                    <div className="parallax-content" style={parallaxStyle}>
                        <h1>Parallax Scrolling</h1>
                        <p>This is a parallax scrolling example.</p>
                    </div>
                </Parallax>
            </div>

            <div className="parallax-section" style={{ height: '30vh' }}>
                <Parallax y={[30, -30]}>
                    <img
                        src="/images/imageA.jpg"
                        alt="Parallax Image"
                        className="parallax-image"
                    />
                </Parallax>
            </div>
        </ParallaxProvider>
    );
};

export default ParallaxComponent;
