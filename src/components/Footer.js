import React from 'react';
import './Footer.css';
import consoleimg from '../images/gameconsole1.png';

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="ui center aligned container margin">


                <div className="ui stackable inverted divided grid">
                    <div className="five wide column">
                        <div className="ui inverted link list">
                            <a className="link-color fonts-footer">Home</a>
                            <a className="link-color fonts-footer">About</a>
                            <a className="link-color fonts-footer">Contacts</a>

                        </div>

                    </div>
                    <div className="five wide column">
                        <div className="ui inverted link list ">
                            < img src={consoleimg} width="50%" height="50%" style={{ marginLeft: '30px' }} />
                        </div>
                    </div>
                    <div className="six wide column">
                        <div className="ui inverted link list ">
                            <h3 className="footer-update" >Lets, stay in touch</h3>
                            <div class="ui action input" style={{ marginTop: '20px' }}>
                                <input type="text" />
                                <button class="ui teal right labeled icon button cc_pointer">
                                    <i className="arrow right icon"></i>
    Submit
  </button>
                            </div>
                            {/*<div className="text-center">  
                            FOR UPDATES
                            <input type="text" className="footer-input" placeholder="Email address.."  />
                            &nbsp;&nbsp;<a className="footer-button">&nbsp;&nbsp;&nbsp;Submit</a>
                            
                            &nbsp;&nbsp;<button class="ui inverted teal button ">Teal</button>
                        </div>*/}
                        </div>
                    </div>








                    {/*<div className="seven wide columns">
                        <h4 className="ui inverted header">fsh</h4>
                        <div>bjgr</div>
                    </div>*/}

                </div>
                <div className="text-center footer-copyright fonts-copyright" >@copyright | 2020</div>
                <div className="text-center padding-footer " >
                    <button class="ui circular facebook icon button">
                        <i class="facebook icon"></i>
                    </button>
                    <button class="ui circular twitter icon button">
                        <i class="twitter icon"></i>
                    </button>
                    <button class="ui circular linkedin icon button">
                        <i class="linkedin icon"></i>
                    </button>
                    <button class="ui circular google plus icon button">
                        <i class="google plus icon"></i>
                    </button>
                    {/*<i className="large facebook icon" style={{opacity:'0.4',marginRight:'20px'}}></i>
                            <i className=" large  twitter icon" style={{opacity:'0.4',marginRight:'20px'}}></i>
                            <i className=" large youtube  icon" style={{opacity:'0.4',marginRight:'20px'}}></i>
                <i className=" large linkedin icon" style={{opacity:'0.4'}}></i> */}
                    {/*< img src={consoleimg} width="20%" height="20%"   />*/}
                </div>



            </div>
        </div>
    );


};

export default Footer;