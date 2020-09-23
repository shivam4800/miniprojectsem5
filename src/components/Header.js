import React,{useState} from 'react';
import './Header.css';
import Modal from 'react-modal';


const Header=()=>{
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

<<<<<<< HEAD
=======
    
>>>>>>> 85fbf99d41c4f61eb62c3aa73954ff591eead93e
    
    return(
        
        <div className={header?'sizeheader active':'sizeheader'} >
            <div>
                The Game Changer!
            </div>
            <div className="right">
                <div  onClick={onOpenSign} className="headeritem" >
                    <i className="home icon"></i>
                    <a >Sign up</a>
                </div>
                <div  onClick={onOpenLogin} className="headeritem" >
                    <i className="home icon"></i>
                    <a >Login</a>
                </div>

            </div>
            
            <Modal isOpen={sign} onRequestClose={onCloseSign} style={{overlay:{zIndex:'99',backgroundColor:'#b3b3b49f'},content:{marginLeft:'35%',width:'30%',height:'75%'}}} >
            <center><h1>Sign up</h1></center><br/>
            <button class="ui google plus button" style={{marginLeft:'35%'}}>
<<<<<<< HEAD
                <i class="google icon"></i>
=======
                <i class="google  icon"></i>
>>>>>>> 85fbf99d41c4f61eb62c3aa73954ff591eead93e
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