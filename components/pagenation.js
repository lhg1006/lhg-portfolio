import React from 'react';
const Pagination = ({ totalPosts, postsPerPage, currentPage, paginate }) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    const renderPageNumbers = () => {
        if (totalPages <= 1) return null;

        const maxPageNumbers = 5; // 한 번에 표시할 페이지 수
        const middlePage = Math.ceil(maxPageNumbers / 2);
        const startPage =
            currentPage > middlePage ? currentPage - middlePage : 1;
        const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);

        return (
            <ul className="pagination">
                <li
                    onClick={() => paginate(1)}
                    className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    <a className="page-link">&lt;&lt;</a>
                </li>
                {pageNumbers.slice(startPage - 1, endPage).map((number) => (
                    <li
                        key={number}
                        onClick={() => paginate(number)}
                        className={`page-item ${number === currentPage ? 'active' : ''}`}
                    >
                        <a className="page-link">{number}</a>
                    </li>
                ))}
                <li
                    onClick={() => paginate(totalPages)}
                    className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
                >
                    <a className="page-link">&gt;&gt;</a>
                </li>
            </ul>
        );
    };

    return <nav>{renderPageNumbers()}</nav>;
};

export default Pagination;
