import React, {useCallback, useState} from 'react';
import axios from "axios";
import {useSetRecoilState} from "recoil";
import user from "../../../state/atoms/user";
import {useRouter} from "next/router";

function SignUpForm() {
    const setUser = useSetRecoilState(user);
    const router = useRouter();
    const [username, setUsername] = useState<string>('');
    const handleChangeUserName = useCallback(({target: {value}}) => setUsername(value), []);
    const [email, setEmail] = useState<string>('');
    const handleChangeEmail = useCallback(({target: {value}}) => setEmail(value), []);
    const [password, setPassword] = useState<string>('');
    const handleChangePassword = useCallback(({target: {value}}) => setPassword(value), []);
    const [errors, setErrors] = useState<string[]>([]);
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post('/api/users', {
                user: {
                    username,
                    email,
                    password
                }
            });
            setUser(data.user);
            router.push('/');
        } catch (e) {
            const {data: {errors}, status} = e.response;
            if (status === 422) {
                const {email, password, username} = errors;
                const newErrors = [];
                username?.forEach(error => newErrors.push(`username ${error}`));
                email?.forEach(error => newErrors.push(`email ${error}`));
                password?.forEach(error => newErrors.push(`password ${error}`));
                setErrors(newErrors);
                return;
            }
        }
    }
    return (
        <form>
            <ul className="error-messages">
                {errors.map(error => <li>{error}</li>)}
            </ul>
            <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Your Name" value={username}
                       onChange={handleChangeUserName}/>
            </fieldset>
            <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Email" value={email}
                       onChange={handleChangeEmail}/>
            </fieldset>
            <fieldset className="form-group">
                <input className="form-control form-control-lg" type="password" placeholder="Password" value={password}
                       onChange={handleChangePassword}/>
            </fieldset>
            <button className="btn btn-lg btn-primary pull-xs-right" onClick={handleSignUp}>
                Sign up
            </button>
        </form>
    );
}

export default SignUpForm;