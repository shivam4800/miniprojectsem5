import React,{useState} from 'react';
import './Header.css';
import Modal from 'react-modal';


const Header=()=>{
    const [header,setHeader]=useState(false);
    const [sign,setSign]=useState(false);
    

    const onOpenSign=()=>{
        setSign(true);
    }
    const onCloseSign=()=>{
        setSign(false);
    }

   
    
    
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
        
        <div className={header?'sizeheader active':'sizeheader'} >
            <div>
                The Game Changer!
            </div>
            <div className="right">
                <div  onClick={onOpenSign} className="headeritem" >
                    <i className="home icon"></i>
                    <a >Sign up</a>
                </div>
                <div  onClick={onOpenSign} className="headeritem" >
                    <i className="home icon"></i>
                    <a >Login</a>
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
                <div className="ui submit button" style={{width:'30%',marginLeft:'35%',backgroundColor:' darkcyan'}}>Sign up</div>
                

            </div>

            </Modal>
            
        </div>
        
    );

};

export default Header;