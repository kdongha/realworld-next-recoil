import React, {useMemo} from 'react';
import Link from "next/link";
import NavBar from "../../atoms/NavBar";
import {useRouter} from "next/router";
import {useRecoilValue} from "recoil";
import user from "../../../state/atoms/user";

function Header() {
    const router = useRouter();
    const signedUser = useRecoilValue(user);
    const navList = useMemo(() =>
            signedUser ? signedList(signedUser.username) : unSignedList
        , [signedUser])
    console.log(signedUser)
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link href={'/'}>
                    <a className="navbar-brand">conduit</a>
                </Link>
                <NavBar navList={navList} activeHref={router.pathname}/>
            </div>
        </nav>
    );
}

const unSignedList = [
    {href: '/', text: 'Home'},
    {href: '/signin', text: 'Sign In'},
    {href: '/signup', text: 'Sign Up'},
]

const signedList = (username) => [
    {href: '/', text: 'Home'},
    {href: '/editor', text: 'New Article'},
    {href: '/settings', text: 'Settings'},
    {href: `/profile/${username}`, text: username},
];

export default Header;