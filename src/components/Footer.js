import React from 'react';
import './Footer.css';
import consoleimg from '../images/gameconsole1.png';

const Footer=()=>{
    return(
        <div className="footer-main">
            <div className="ui center aligned container margin">
                

                <div className="ui stackable inverted divided grid">
                    <div className="five wide column">
                        <div className="ui inverted link list">
                            <a className="link-color">Home</a>
                            <a className="link-color">About</a>
                            <a className="link-color">Contacts</a>
                   
                        </div>

                    </div>
                    <div className="five wide column">
                        <div className="ui inverted link list">
                        <h5>Our Address</h5>
                    <address>
                    Mith Bunder Road, Near Sadguru Garden<br/>
                    +91 22 2532 6085 / 7100 / 6496 / 6062 / 6088<br/>
                    9594477844<br/>
                    9594477844<br/>
		            Email: <a href="mailto:info@kccemsr.edu.in">info@kccemsr.edu.in</a>
		           </address>
                        </div>

                    </div>
                    <div className="five wide column">
                        <div className="ui inverted link list ">
                            
                            <div class="ui action input">
                                <input type="text" placeholder="Sign me up" style={{backgroundColor:'#b4d3d300',color:'white'}}/>
                                <button class="ui button footer-clr" >Sign me up</button>
                            </div>
                        </div>
                    </div>
                    

            
                    
                    
                    {/*<div className="seven wide columns">
                        <h4 className="ui inverted header">fsh</h4>
                        <div>bjgr</div>
                    </div>*/}
                    
                </div>
                <div className="text-center" style={{paddingTop:'30px'}}>@copyright | 2020</div>
                <div className="text-center padding-footer " >
                            <i className="large facebook icon" style={{opacity:'0.5',marginRight:'20px'}}></i>
                            <i className=" large  twitter icon" style={{opacity:'0.5',marginRight:'20px'}}></i>
                            <i className=" large youtube  icon" style={{opacity:'0.5',marginRight:'20px'}}></i>
                            <i className=" large linkedin icon" style={{opacity:'0.5'}}></i> 
                            {/*< img src={consoleimg} width="20%" height="20%"   />*/}
                </div>
                
               
            </div>
        </div>
    );


};

export default Footer;