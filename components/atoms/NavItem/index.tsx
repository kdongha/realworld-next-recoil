import React from 'react';
import Link, {LinkProps} from "next/link";
import cx from "classnames";

type NavItemProps = LinkProps & {
    active?: boolean;
    children: string;
}

function NavItem({active = false, children, ...linkProps}: NavItemProps) {
    return (
        <li className="nav-item">
            <Link {...linkProps}>
                <a className={cx('nav-link', {active})}>{children}</a>
            </Link>
        </li>
    );
}

export default NavItem;