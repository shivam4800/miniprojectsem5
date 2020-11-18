import React,{useState,useEffect} from 'react';
import './Header.css';
//import Modal from 'react-modal';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import Logo from '../images/logo2.png';
import 'react-responsive-modal/styles.css';
import bgcon from '../images/gameconsole1.png';
import { Modal } from 'react-responsive-modal';
import { Url } from 'devextreme-react/chart';


export var isIn = false;
export var exname = "Guest";
export var snakeArr = [];
export var exmail = "Nothing yet, please login!";
const Header = (props) => {
    let history = useHistory();
    const [isin,setIsin]=useState(false);
    const [header, setHeader] = useState(false);
    const [header2, setHeader2] = useState(false);
    const [sign,setSign]=useState(false);
    const [login,setLogin]=useState(false);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [homeprop,setHomeprop]=useState(false);
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
                    onPageLogin();
                   
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


    const onPageLogin=()=> {
        if (window.location.pathname === '/youarein') {
            console.log("sdgfrfgfg")
            setIsin(true);
            isIn=true;
         

            
        }
    }
window.addEventListener('load', onPageLogin);
    function handleLogout(){             
        localStorage.removeItem('login_access_token')
        setIsin(false);
        isIn=false;
        console.log(isIn);
        history.push('/');
       
    }
    

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
        
        modal:{
            background:'#121212'
        },
        closeButton:{
            color:'#383838'
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
        sendSignupDetailsToServer();
    }

    const redirectToHome = () => {
        setHeader(false);
        setHeader2(true);
        isIn=true;
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
                    onPageLogin();
                    redirectToHome();
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
                    <div className="col-xs-1 col-sm-1 ">
                        <div className="sidebar-icon">
                            <i className="large sidebar icon" onClick={props.toggleMenu}></i>
                        </div>
                    </div>
                    <div className="col-xs-5 col-sm-6 col-md-6 fonts">
                        The game changer
                    </div>
                    
                    
                        {isin  ?  
                            <div className="col-xs-6 col-sm-5 col-md-5" style={{textAlign:'right'}}>
                            <div className="headeritem-signin">
                                <a className="header-fonts">Welcome</a>
                            </div>
                            <div className="headeritem-login" onClick={handleLogout} style={{width:'80px'}}>
                                <a  className="header-fonts" >Logout</a>
    
                            </div>
                        </div>
                            :
                            <div className="col-xs-6 col-sm-5 col-md-5" style={{textAlign:'right'}}>
                        <div className="headeritem-signin" onClick={onOpenSign}>
                            <a className="header-fonts" >Signin</a>
                        </div>
                        <div className="headeritem-login" onClick={onOpenLogin}>
                            <a  className="header-fonts" >Login</a>

                        </div>
                    </div>
                                                    }
                    
                </div>
                <div className="row text-center">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 icon-social" >
                        <div class="ui icon align-social blue-tooltip" data-toggle="tooltip" data-placement="top" title="World" >
                            <i className="world icon " ></i>
                        </div>
                        <div class="ui icon align-social blue-tooltip" data-toggle="tooltip" data-placement="top" title="Facebook" >
                            <i className=" facebook icon " ></i>
                        </div>
                        <div class="ui icon align-social blue-tooltip" data-toggle="tooltip" data-placement="top" title="Twitter" >
                            <i className="twitter icon " ></i>
                        </div>
                        <div class="ui icon align-social blue-tooltip" data-toggle="tooltip" data-placement="top" title="Instagram" >
                            <i className="instagram icon " ></i>
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
                        <div  className="header-modal-signin-2">
                        <h3>Signup</h3>
                        
                        <form className="contact-form form-validate3" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control header-input " type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true" onChange={onNameChange} value={name} />
                            </div>
                            <div className="form-group">
                                <input className="form-control header-input" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true"  onChange={onEmailChange} value={email} />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control header-input" placeholder="Password" required="" autocomplete="off" aria-required="true"  onChange={onPasswordChange} value={password}/>
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
                        <div  className="header-modal-signin-2">
                        <h3>Login</h3>
                        
                        <form className="contact-form form-validate3" novalidate="novalidate">
                            
                            <div className="form-group">
                                <input className="form-control header-input" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" onChange={onEmailChange} value={email} />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control header-input" placeholder="Password" required="" autocomplete="off" aria-required="true" onChange={onPasswordChange} value={password} />
                            </div>
                           
                            <input className="btn btn-md btn-info btn-center" id="sign_up" type="button" value="Login"  onClick={handleLoginSubmitClick}/>
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
