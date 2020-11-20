import React, { useState } from 'react';
import './Footer.css';
import consoleimg from '../images/gameconsole1.png';
import { Link, useLocation } from 'react-router-dom';
export var footisin = false;
const Footer = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (window.pageYOffset > 300) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            footisin = true;
            console.log(footisin)

        }

    };

    return (
        <div className="footer-main">
            <div className="ui center aligned container margin">

                <div className="ui stackable inverted divided grid">
                    <div className="five wide column">
                        <div className="ui inverted link list">

                            <div className="footer-first">The game changer</div>
                            <div className="footer-second">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat. Aliquam erat volutpat.
                           </div>

                        </div>

                    </div>
                    <div className="five wide column">
                        <div className="ui inverted link list ">
                            < img src={consoleimg} width="50%" height="50%" style={{ marginLeft: '30px' }} />
                        </div>
                    </div>
                    <div className="five wide column">
                        <div className="ui inverted link list " style={{ marginTop: '40px' }}>
                            <a className="link-color fonts-footer">Games</a>
                            <a className="link-color fonts-footer">Referneces</a>
                        </div>
                    </div>








                    {/*<div className="seven wide columns">
                        <h4 className="ui inverted header">fsh</h4>
                        <div>bjgr</div>
                    </div>*/}

                </div>
                <div className="text-center footer-copyright fonts-copyright" >@copyright | 2020</div>
                <div className="text-center padding-footer " >
                    <button class="ui circular facebook icon button" style={{ marginRight: '10px' }}>
                        <i class="facebook icon"></i>
                    </button>
                    <button class="ui circular twitter icon button" style={{ marginRight: '10px' }}>
                        <i class="twitter icon"></i>
                    </button>
                    <button class="ui circular linkedin icon button" style={{ marginRight: '10px' }}>
                        <i class="linkedin icon"></i>
                    </button>
                    <button class="ui circular google plus icon button" style={{ marginRight: '10px' }}>
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