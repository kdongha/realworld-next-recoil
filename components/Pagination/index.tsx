import React, {useMemo} from 'react';
import PaginationItem from "./PaginationItem";

type PaginationProps = {
    currentPage: number;
    total: number;
    pageSize: number;
    tag?: string;
}

function Pagination({currentPage, total, pageSize, tag}: PaginationProps) {
    const {pageStart, pageCount} = paginationCalc({total, currentPage, pageSize})
    const pageList = useMemo(() => Array(pageCount).fill(0).map((_, index) => index + pageStart)
        , [pageStart, pageCount]);
    return (
        <nav>
            <ul className="pagination">
                {pageList.map(page => <PaginationItem isActive={page === currentPage}
                                                      key={`pagination-item-${page}`} page={page} tag={tag}/>)}
            </ul>
        </nav>
    );
}

const paginationCalc = ({
                            total,
                            currentPage,
                            pageSize = 20
                        }: { total: number, currentPage: number, pageSize: number }) => {
    const totalPages = Math.ceil(total / pageSize);
    const pageStart = Math.max(Math.min(currentPage - 4, totalPages - 9), 1) || 1;
    const pageCount = (pageStart + 10 > totalPages ? totalPages - pageStart + 1 : 10) || 1;
    return {pageStart, pageCount};
};

export default Pagination;