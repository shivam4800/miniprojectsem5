import React,{useState,useEffect} from 'react';
import './Header.css';
//import Modal from 'react-modal';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
//import Logo from '../images/logo2.png';

import Logo from '../images/logo12345.png';
import 'react-responsive-modal/styles.css';
import bgcon from '../images/gameconsole1.png';
import { Modal } from 'react-responsive-modal';
import { Url } from 'devextreme-react/chart';

export var isIn = localStorage.getItem('inside_bool');
export var exname = localStorage.getItem('uname')
export var snakeArr = [];
export var ticArr = [];
export var exmail = localStorage.getItem('umail');
export var uid = localStorage.getItem('u_id')
export var sessmail = localStorage.getItem("emailid");
export var sessname = 'Guest';
export var sessin = localStorage.getItem('inside');
const Header = (props) => {
    let history = useHistory();
    
    const user = () => {
        axios.get('http://localhost:5000/gamers/me', { headers: { 'token': localStorage.getItem('login_access_token') } })
            .then(function (response) {
                if (response.status === 200) {
                    console.log("response", response);
                    var ex_name = response.data.username;
                    localStorage.setItem('uname', ex_name);
                    
                    var u_id = response.data._id;
                    localStorage.setItem('u_id', u_id);
                    console.log("id is ", u_id); 
                    console.log("name is: ", ex_name);
                    var ex_mail = response.data.email;
                    localStorage.setItem('umail', ex_mail);
                    snakeArr = response.data.snakegame;
                    ticArr = response.data.tictactoe;
                    console.log("Array: ", snakeArr);
                    console.log('me');
                    renderLogout();
                    isIn = true;
                    onPageLogin();
                    
                    

                    console.log('isIn is', isIn);
                }
            })
            .catch(function (error) {
                redirectToLogin()
            });
    }

    const onPageLogin = () => {
        if (window.location.pathname === '/youarein') {
            console.log("sdgfrfgfg")
            setIsin(true);
            isIn = true;



        }
    } 
    function redirectToLogin() {
        history.push('/');
    }


    function renderLogout() {
        if (history.location.pathname === '/youarein') {
            
            console.log('logout pe hu bhai');
            
            return (
               
                <div className={header ? "headers" : "header-transparent"} >

                    <div className="headeritem2" style={{ background: "green", width: "50px" }} onClick={handleLogout} className="headeritem" >

                        <a style={{color: "red"}}>Logout</a>
                </div>
                        
                </div>
            )
        }
    }
    function handleLogout() {
        localStorage.removeItem('login_access_token');
        localStorage.removeItem('inside');
        localStorage.removeItem('inside_bool');
        localStorage.removeItem('uname');
        localStorage.removeItem('umail');
        localStorage.removeItem('u_id');
        setIsin(false);
        isIn = false;
        console.log(isIn);
        history.push('/');
        window.location.reload(false);
    }
    const [header, setHeader] = useState(false);
    const [header2, setHeader2] = useState(false);
    const [sign,setSign]=useState(false);
    const [login,setLogin]=useState(false);
    const [name,setName]=useState('');
    const [isin, setIsin] = useState(false);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');


    const inLogout = () => {
        setHeader(false);
        setHeader2(true);
    }
    const onOpenSign=()=>{
        setSign(true);
    };
    const onCloseSign=()=>{
        setSign(false);
    };
    const onOpenLogin=()=>{
        setLogin(true);
    };
    const onCloseLogin=()=>{
        setLogin(false);


    };

    const onNameChange=(e)=>{
        console.log(e.target.value);
        setName(e.target.value); 

    };

    const onEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);

    };
    
    const bg = {

        modal: {
            background: '#121212'
        },
        closeButton: {
            color: '#383838'
        }
    };


    const onPasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    };
   
    const changeBackground=()=>{
        if(window.scrollY>80){
            setHeader(true);
        }
        else{
            setHeader(false);
        }

    };
    window.addEventListener('scroll',changeBackground);

    const sendSignupDetailsToServer = () => {
        if (password.length > 7) {
            
            const payload = {
                "username": name,
                "email": email,
                "password": password,
            }
            axios.post('http://localhost:5000/gamers/signup', payload)
                .then(function (response) {
                    if (response.status === 200) {


                        
                        alert('Sucess!');
                        localStorage.setItem('login_access_token', response.data.token);
                        console.log(response.data.token);
                        //localStorage.setItem('inside', 'tru');

                        localStorage.setItem('inside_bool', true);
                        onCloseSign();
                        redirectToHome();
                        
                        user();
                        window.location.reload(false);
                        user();
                    }

                    else {
                        alert('No');
                        console.log(response.data.msg);
                    }

                    
                })
                .catch(function (error) {
                    console.log(error);
                    console.log(error.msg)

                    alert('User already Exists!');
                });
        } else {
            alert('Please enter valid username and password')
        }

    }

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        sendSignupDetailsToServer()
    }

    const redirectToHome = () => {
        setHeader(false);
        setHeader2(true);
        history.push('/youarein');
        
    }
    const handleLoginSubmitClick = (e) => {
        
        const payload = {
            "email": email,
            "password": password,
        }
        axios.post('http://localhost:5000/gamers/login', payload)
            .then(function (response) {
                if (response.status === 200) {
                    alert('Logged in successfully!');
                    onCloseLogin();
                    localStorage.setItem('login_access_token', response.data.token);
                    console.log(response.data.token);
                    redirectToHome();
                    localStorage.setItem("inside", "tru");
                    
                    localStorage.setItem("emailid", response.data.email);
                    localStorage.setItem('inside_bool', true);
                    //renderLogout();
                    user();
                    window.location.reload(false);
                    user();
                }
                else if (response.status === 204) {
                    alert("Email and password do not match");
                }
                else {
                    alert("Email does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
                alert('Invalid email or password!');
            });
    }
    /*localStorage.setItem("inside", "tru");
    localStorage.setItem("emailid", exmail);
    localStorage.setItem("uname", exname);
    sessmail = localStorage.getItem("emailid");
    sessname = localStorage.getItem("uname");
    sessin = localStorage.getItem("inside");
    console.log("Sessions: ", sessmail, " ", sessname, " ", sessin);*/
    //var inside_var = localStorage.getItem('inside_bool');
    return (


        <div className={header ? "headers" : "header-transparent"}>
            <div className="container">
                <div className="row text-center row-padding">
                    <div className="col-xs-1 col-sm-1 ">
                        <div className="sidebar-icon">
                            <i className=" sidebar icon" onClick={props.toggleMenu}></i>
                        </div>
                    </div>
                    <div className="col-xs-5 col-sm-6 col-md-6 fonts">
                        <img src={Logo} width="250px" height="50px"/>
                    </div>
                    {isIn ?
                        <div className="col-xs-6 col-sm-5 col-md-5" style={{ textAlign: 'right' }}>
                            <div className="header-welcome-div">
                                <a className="header-welcome">Welcome</a>
                            </div>
                            <div className="headeritem-login" onClick={handleLogout} style={{ width: '73px'}}>
                                <a className="header-fonts" >Logout</a>

                            </div>
                        </div>
                        :
                        <div className="col-xs-6 col-sm-5 col-md-5" style={{ textAlign: 'right' }}>
                            <div className="headeritem-signin" onClick={onOpenSign}>
                                <a className="header-fonts" >Signin</a>
                            </div>
                            <div className="headeritem-login" onClick={onOpenLogin}>
                                <a className="header-fonts" >Login</a>

                            </div>
                        </div>
                    }

                </div>
                <div className="row text-center">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 icon-social" >
                        <div class="ui icon align-social blue-tooltip" data-toggle="tooltip" data-placement="top" title="Youtube" >
                            <a href="https://youtu.be/rUvB2JIwwl4" target="_blank"><i className="youtube icon " ></i></a>
                        </div>
                        <div class="ui icon align-social blue-tooltip" data-toggle="tooltip" data-placement="top" title="Google" >
                            <i className="envelope icon " ></i>
                        </div>
                        <div class="ui icon align-social blue-tooltip" data-toggle="tooltip" data-placement="top" title="Linkedin" >
                            <i className="linkedin icon " ></i>
                        </div>

                    </div>
                </div>
            </div>

            <Modal open={sign} onClose={onCloseSign} styles={bg}>
                <div className="modal-body">
                    <div className="header-modal-signin-1" >
                        <img src={bgcon} width="50%" height="100%" />
                    </div>
                    <div className="header-modal-signin-2">
                        <h3>Signup</h3>

                        <form className="contact-form form-validate3" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control header-input " type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true" onChange={onNameChange} value={name} />
                            </div>
                            <div className="form-group">
                                <input className="form-control header-input" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" onChange={onEmailChange} value={email} />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control header-input" placeholder="Password" required="" autocomplete="off" aria-required="true" onChange={onPasswordChange} value={password} />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control header-input" placeholder="  Re-Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-info btn-center" id="sign_up" type="button" value="Sign Up" onClick={handleSignupSubmit} />

                        </form>
                    </div>
                </div>
            </Modal>
            <Modal open={login} onClose={onCloseLogin} styles={bg}>
                <div className="modal-body">
                    <div className="header-modal-signin-1" >
                        <img src={bgcon} width="50%" height="100%" />
                    </div>
                    <div className="header-modal-signin-2">
                        <h3>Login</h3>

                        <form className="contact-form form-validate3" novalidate="novalidate">

                            <div className="form-group">
                                <input className="form-control header-input" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" onChange={onEmailChange} value={email} />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control header-input" placeholder="Password" required="" autocomplete="off" aria-required="true" onChange={onPasswordChange} value={password} />
                            </div>

                            <input className="btn btn-md btn-info btn-center" id="sign_up" type="button" value="Login" onClick={handleLoginSubmitClick} />
                            <div class="ui horizontal divider">
                                Or
                            </div>
                            <div>
                                <h3>Login with Google</h3>
                            </div>

                        </form>
                    </div>
                </div>
            </Modal>


        </div>

    );

};

export default Header;