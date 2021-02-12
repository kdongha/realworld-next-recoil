import React from 'react';
import NavItem from "../NavItem";

type NavBarProps = {
    navList: { href: string, text: string }[];
    activeHref: string;
}

function NavBar({navList, activeHref}: NavBarProps) {
    return (
        <ul className="nav navbar-nav pull-xs-right">
            {navList.map(({href, text}) => (
                <NavItem href={href} key={`nav-item-${text}`} active={href === activeHref}>
                    {text}
                </NavItem>)
            )}
        </ul>
    );
}

export default NavBar;