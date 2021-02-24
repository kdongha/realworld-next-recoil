import React, {useCallback, useState} from 'react';
import axios from "axios";
import {useSetRecoilState} from "recoil";
import user from "../../../state/atoms/user";
import {useRouter} from "next/router";


function SignInForm() {
    const [email, setEmail] = useState<string>('');
    const handleChangeEmail = useCallback(({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setEmail(value), []);
    const [password, setPassword] = useState<string>('');
    const handleChangePassword = useCallback(({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setPassword(value), []);
    const [error, setError] = useState<boolean>(false);
    const setUser = useSetRecoilState(user);
    const router = useRouter();
    const handleSignIn = useCallback(async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const {data} = await axios.post(`https://conduit.productionready.io/api/users/login`, {
                user: {
                    email,
                    password
                }
            })
            setUser(data.user);
            router.push('/');
        }catch (e) {
            const { status} = e.response;
            if (status === 422) {
                setError(true);
            }
        }
    }, [email, password])
    return (
        <>
            <ul className="error-messages">
                {error && <li>email or password is invalid</li>}
            </ul>
            <form>
                <fieldset className="form-group">
                    <input className="form-control form-control-lg" type="text" placeholder="Email" value={email}
                           onChange={handleChangeEmail}/>
                </fieldset>
                <fieldset className="form-group">
                    <input className="form-control form-control-lg" type="password" placeholder="Password" value={password}
                           onChange={handleChangePassword}/>
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" onClick={handleSignIn}>
                    Sign in
                </button>
            </form>
        </>
    );
}

export default SignInForm;