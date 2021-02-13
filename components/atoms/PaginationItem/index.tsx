import React from 'react';
import Link from "next/link";
import cx from 'classnames';

type PaginationItemProps = {
    isActive?: boolean;
    page: number;
    tag?: string;
}

function PaginationItem({page, isActive = false}: PaginationItemProps) {
    return (
        <li className={cx('page-item', {active: isActive})}>
            <Link href={`/?page=${page}`}>
                <a className="page-link">
                    {page}
                </a>
            </Link>
        </li>
    );
}

export default PaginationItem;