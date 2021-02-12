import React from 'react';
import Link from "next/link";
import NavBar from "../../atoms/NavBar";
import {useRouter} from "next/router";

function Header() {
    const router = useRouter();

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link href={'/'}>
                    <a className="navbar-brand">conduit</a>
                </Link>
                <NavBar navList={unSignedList} activeHref={router.pathname}/>
            </div>
        </nav>
    );
}

const unSignedList = [
    {href: '/', text: 'Home'},
    {href: '/signin', text: 'Sign In'},
    {href: '/signup', text: 'Sign Up'},
]

const signedList = [
    {href: '/', text: 'Home'},
    {href: '/editor', text: 'New Article'},
    {href: '/settings', text: 'Settings'},
    {href: '/', text: 'My page'},
];

export default Header;