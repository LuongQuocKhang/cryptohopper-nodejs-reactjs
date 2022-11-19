import React, { useState } from 'react'
import AuthService from '../../services/auth.service';

function LoginComponent(props) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        AuthService.login(email,password);

        let access_token = localStorage.getItem("access_token");
        if(access_token && access_token.length > 0) {
            props.setToken(access_token);
        }
    }

    const onEmailChange = async (e) => {
        setEmail(e.target.value);
    }
    const onPasswordChange = async (e) => {
        setPassword(e.target.value);
    }
    return (
        <>
            <div className="accountbg" style={{
                background: "url('assets/images/login-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}></div>

            <div className="wrapper-page account-page-full">

                <div className="card">
                    <div className="card-block">

                        <div className="account-box">

                            <div className="card-box p-5">
                                <h2 className="text-uppercase text-center pb-4">
                                    <a href="index.html" className="text-success">
                                        <span><img src="assets/images/logo.png" alt="" height="26" /></span>
                                    </a>
                                </h2>

                                <form className="" action="#">

                                    <div className="form-group m-b-20 row">
                                        <div className="col-12">
                                            <label for="emailaddress">Email address</label>
                                            <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" 
                                                onChange={(e) => onEmailChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row m-b-20">
                                        <div className="col-12">
                                            <a href="page-recoverpw.html" className="text-muted float-right"><small>Forgot your password?</small></a>
                                            <label for="password">Password</label>
                                            <input className="form-control" type="password" required="" id="password" placeholder="Enter your password" 
                                                onChange={(e) => onPasswordChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row m-b-20">
                                        <div className="col-12">

                                            <div className="checkbox checkbox-custom">
                                                <input id="remember" type="checkbox" checked="" />
                                                <label for="remember">
                                                    Remember me
                                                </label>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="form-group row text-center m-t-10">
                                        <div className="col-12">
                                            <button className="btn btn-block btn-custom waves-effect waves-light" type="submit"
                                                onClick={() => login()}>Sign In</button>
                                        </div>
                                    </div>

                                </form>

                                <div className="row m-t-50">
                                    <div className="col-sm-12 text-center">
                                        <p className="text-muted">Don't have an account? <a href="page-register.html" className="text-dark m-l-5"><b>Sign Up</b></a></p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="m-t-40 text-center">
                    <p className="account-copyright">2018 © Highdmin. - Coderthemes.com</p>
                </div>

            </div>
        </>
    )

}

export default LoginComponent