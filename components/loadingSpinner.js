// components/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                <style jsx>{`
                  .loader-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    text-align: center; /* 가운데 정렬을 추가합니다 */
                  }

                  .loader {
                    border: 4px solid rgba(255, 255, 255, 0.3);
                    border-top: 4px solid #3498db;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    animation: spin 1s linear infinite;
                  }

                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                `}</style>
            </div>
        </div>
    );
};

export default LoadingSpinner;
