import React,{useState,useEffect} from 'react';
import './Header.css';
import Modal from 'react-modal';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import Logo from '../images/logo2.png';


export var isIn = false;
export var exname = "Guest";
export var snakeArr = [];
export var exmail = "Nothing yet, please login!";
const Header = (props) => {
    let history = useHistory();
    
    const user = () => {
        axios.get('http://localhost:5000/gamers/me', { headers: { 'token': localStorage.getItem('login_access_token') } })
            .then(function (response) {
                if (response.status === 200) {
                    console.log("response", response);
                    exname = response.data.username;
                    console.log("name is: ", exname);
                    exmail = response.data.email;
                    snakeArr = response.data.snakegame;
                    console.log("Array: ", snakeArr);
                    console.log('me');
                    renderLogout();
                    isIn = true;
                    console.log('isIn is', isIn);
                }
            })
            .catch(function (error) {
                redirectToLogin()
            });
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
        localStorage.removeItem('login_access_token')
        isIn = false;
        console.log(isIn);
        history.push('/')
    }
    const [header, setHeader] = useState(false);
    const [header2, setHeader2] = useState(false);
    const [sign,setSign]=useState(false);
    const [login,setLogin]=useState(false);
    const [name,setName]=useState('');
    
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
                        onCloseSign();
                        redirectToHome();
                        
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
                    redirectToHome();
                    renderLogout();
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

    return(

        
        <div className={header ? "headers" : "header-transparent"}>
            <div className="container">
                <div className="row text-center row-padding">
                    <div className="col-xs-2 col-sm-2 ">
                        <div className="sidebar-icon">
                            <i className="large sidebar icon" onClick={props.toggleMenu}></i>
                        </div>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 fonts">
                        The game changer
                    </div>
                    
                    <div className="col-xs-5 col-sm-5 col-md-5" style={{ textAlign: 'right' }}>
                        {isIn ?
                            <div>
                                <div className="headeritem" id="signup">
                                    <a>Welcome!</a>
                                </div>
                                <div className="headeritem" id="login" onClick={handleLogout}>
                                    <a>Logout</a>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="headeritem" id="signup" onClick={onOpenSign} >
                                    <a>Signin</a>
                                </div>
                                <div className="headeritem" id="login" onClick={onOpenLogin}>
                                    <a>Login</a>
                                </div>
                            </div>
                                                    }
                    </div>
                   
                </div>
                <div className="row text-center">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 icon-social" >
                        <div class="ui icon align-social" data-tooltip="Add users" data-inverted="">
                            <i className="world icon " ></i>
                        </div>
                        <div class="ui icon align-social" data-tooltip="Facebook" data-inverted="">
                            <i className=" facebook icon " ></i>
                        </div>
                        <div class="ui icon align-social" data-tooltip="Twitter" data-inverted="">
                            <i className="twitter icon " ></i>
                        </div>
                        <div class="ui icon align-social" data-tooltip="Instagram" data-inverted="">
                            <i className="instagram icon " ></i>
                        </div>
                        <div class="ui icon align-social " data-tooltip="Linkedin" data-inverted="">
                            <i className="linkedin icon " ></i>
                        </div>

                    </div>
                </div>
            </div>

            
            <Modal isOpen={sign} onRequestClose={onCloseSign} style={{ overlay: { zIndex: '99', backgroundColor: '#b3b3b49f' }, content: { marginLeft: '35%', width: '30%', height: '75%' } }} >
                <center><h1>Sign up</h1></center><br />
                <button class="ui google plus button" style={{ marginLeft: '35%' }}>
                    <i class="google  icon"></i>
                    Google
            </button><br /><br />
                <div class="ui horizontal divider">
                    Or
            </div>
                <div className="ui form">
                    <div className="inline fields">
                        <div className="nine wide field">
                            <label>Name</label>
                            <input type="text" placeholder="First Name" style={{ marginLeft: '22px' }} onChange={onNameChange} value={name} />
                        </div>
                        
                    </div>
                    <div className="inline fields">
                        <div className="nine wide field">
                            <label>Email</label>
                            <input type="text" placeholder="Email" style={{ marginLeft: '23px' }} onChange={onEmailChange} value={email} />
                        </div>
                    </div>
                    <div className="inline fields">
                        <div className="nine wide field">
                            <label>Password</label>
                            <input type="text" placeholder="Password" onChange={onPasswordChange} value={password} />
                        </div>
                    </div><br />
                    <div className="ui submit button" style={{ width: '30%', marginLeft: '35%', backgroundColor: ' darkcyan' }} onClick={handleSignupSubmit} >Sign up</div>
                </div>

            </Modal>

            <Modal isOpen={login} onRequestClose={onCloseLogin} style={{
                overlay: { zIndex: '99', backgroundColor: '#b3b3b49f' },
                content: { marginLeft: '35%', width: '30%', height: '75%' }
            }} >
                <center><h1>Login</h1></center><br />
                <button class="ui google plus button" style={{ marginLeft: '35%' }}>
                    <i class="google  icon"></i>
                    Google
            </button><br /><br />
                <div class="ui horizontal divider">
                    Or
            </div>
                <div className="ui form">
        
                    <div className="inline fields">
                        <div className="nine wide field">
                            <label>Email</label>
                            <input type="text" placeholder="Email" style={{ marginLeft: '23px' }} onChange={onEmailChange} value={email} />
                        </div>
                    </div>
                    <div className="inline fields">
                        <div className="nine wide field">
                            <label>Password</label>
                            <input type="text" placeholder="Password" onChange={onPasswordChange} value={password} />
                        </div>
                    </div><br />
                    <div className="ui submit button" style={{ width: '30%', marginLeft: '35%', backgroundColor: ' darkcyan' }} onClick={handleLoginSubmitClick}>Login</div>


                </div>

            </Modal>
            
        </div>
        
    );

};

export default Header;
