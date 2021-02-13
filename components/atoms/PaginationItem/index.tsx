import React from 'react';
import Link from "next/link";
import cx from 'classnames';

type PaginationItemProps = {
    isActive?: boolean;
    page: number;
    tag?: string;
}

function PaginationItem({page, isActive = false, tag}: PaginationItemProps) {
    return (
        <li className={cx('page-item', {active: isActive})}>
            <Link href={`/?page=${page}${tag ? `&tag=${tag}` : ''}`}>
                <a className="page-link">
                    {page}
                </a>
            </Link>
        </li>
    );
}

export default PaginationItem;