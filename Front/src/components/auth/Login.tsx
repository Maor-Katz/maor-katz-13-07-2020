import React, {useState} from 'react';
import {Link, Redirect, useHistory} from "react-router-dom";
import {login} from "../../services/service";

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const loginUser = (e: any) => {
        e.preventDefault();
        login(email, password, history);
    }

    return (
        <div className="Login">
            <h1 className="large text-primary">
                Sign In
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i>
                Sign into your account
            </p>
            <form action="" className="formLogin">
                <div className="form-group">
                    <input type="text" placeholder="Email Address"
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <input type="submit" value="Login" className="propItBtn" onClick={(e) => loginUser(e)}/>
            </form>
            <p className="my-1">
                Don't have an account?
                <Link to="/register">Sign Up</Link>
            </p>
        </div>
    )
}
export default Login;