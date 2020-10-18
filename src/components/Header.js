import React,{useState} from 'react';
import './Header.css';
import Modal from 'react-modal';
import Logo from '../images/logo2.png';


const Header=(props)=>{
    const [header,setHeader]=useState(false);
    const [sign,setSign]=useState(false);
    const [login,setLogin]=useState(false);
    const [firstname,setFirstname]=useState('');
    const [lastname,setlastname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

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
    const onFirstChange=(e)=>{
        console.log(e.target.value);
        setFirstname(e.target.value); 

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

    return(
        <div className={header?"headers":"header-transparent"}>
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
                    <div className="col-xs-5 col-sm-5 col-md-5" style={{textAlign:'right'}}>
                        <div className="headeritem">
                            <a>Signin</a>
                        </div>
                        <div className="headeritem" id="login">
                            <a>Login</a>
                        </div>
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

            
                    
                    
                    
            
            <Modal isOpen={sign} onRequestClose={onCloseSign} style={{overlay:{zIndex:'99',backgroundColor:'#b3b3b49f'},content:{marginLeft:'35%',width:'30%',height:'75%'}}} >
            <center><h1>Sign up</h1></center><br/>
            <button class="ui google plus button" style={{marginLeft:'35%'}}>
                <i class="google  icon"></i>
                    Google
            </button><br/><br/>
            <div class="ui horizontal divider">
                Or
            </div>
            <div className="ui form">
                <div className="inline fields">
                    <div className="nine wide field">
                        <label>Name</label>
                        <input type="text" placeholder="First Name" style={{marginLeft:'22px'}} onChange={onFirstChange} value={firstname} />
                    </div>
                    <div className="six wide field">
                        <input type="text" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="inline fields">
                    <div className="nine wide field">
                        <label>Email</label>
                        <input type="text" placeholder="Email" style={{marginLeft:'23px'}}/>
                    </div>
                </div>
                <div className="inline fields">
                    <div className="nine wide field">
                        <label>Password</label>
                        <input type="text" placeholder="Password"/>
                    </div>
                </div><br/>
                <div className="ui submit button" style={{width:'30%',marginLeft:'35%',backgroundColor:' darkcyan'}}>Sign up</div>
            </div>

            </Modal>

            <Modal isOpen={login} onRequestClose={onCloseLogin} style={{overlay:{zIndex:'99',backgroundColor:'#b3b3b49f'},
            content:{marginLeft:'35%',width:'30%',height:'75%'}}} >
            <center><h1>Login</h1></center><br/>
            <button class="ui google plus button" style={{marginLeft:'35%'}}>
                <i class="google  icon"></i>
                    Google
            </button><br/><br/>
            <div class="ui horizontal divider">
                Or
            </div>
            <div className="ui form">
                <div className="inline fields">
                    <div className="nine wide field">
                        <label>Name</label>
                        <input type="text" placeholder="First Name" style={{marginLeft:'22px'}}/>
                    </div>
    
                    <div className="six wide field">
                        <input type="text" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="inline fields">
                    <div className="nine wide field">
                        <label>Email</label>
                        <input type="text" placeholder="Email" style={{marginLeft:'23px'}}/>
                    </div>
                </div>
                <div className="inline fields">
                    <div className="nine wide field">
                        <label>Password</label>
                        <input type="text" placeholder="Password"/>
                    </div>
                </div><br/>
                <div className="ui submit button" style={{width:'30%',marginLeft:'35%',backgroundColor:' darkcyan'}}>Login</div>
                

            </div>

            </Modal>
            
        </div>
        
    );

};

export default Header;