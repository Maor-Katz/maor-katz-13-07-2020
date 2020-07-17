import React, {useState} from 'react';
import {Link, Redirect, useHistory} from "react-router-dom";
import {register} from "../../services/service";

const Register = () => {
    const history = useHistory();
    const registerUser = async (e: any) => {
        e.preventDefault();
        register(firstname, lastname, username, email, password, city, phone, history)
    };

    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <div className="Register">
            <h1 className="large text-primary">
                Sign Up
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i>
                Create your account
            </p>
            <form action="" className="formRegister">
                <div className="form-group">
                    <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="text" placeholder="first name" onChange={(e) => setFirstname(e.target.value)}/>

                    <input type="text" placeholder="last name" onChange={(e) => setLastname(e.target.value)}/>

                    <input type="text" placeholder="city" onChange={(e) => setCity(e.target.value)}/>
                    <input type="text" placeholder="phone" onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <input type="submit" value="Register" className="propItBtn" onClick={(e) => registerUser(e)}/>
            </form>
            <p className="my-1">
                Already have an account?
                <Link to="/login">Sign In</Link>
            </p>
        </div>
    )
}


export default Register;