
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="size-contact">
            <div className="bg-contact">
                <div className="container" >
                    <div className="row text-center">
                        <div class="col-12 col-sm-8 col-md-8 col-lg-8 boxstyle-contact">
                            <h1 style={{ textAlign: 'left' }}>The Power of gaming </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center contact-section">
                        <div class="col-12 col-sm-4 col-md-4 col-lg-4 contact-margin">
                            <div className="contact-fonts" style={{textAlign:'left'}}>
                                <a class="mb-50 d-block"><img src="img/core-img/logo.png" alt=""/></a>
                                <p style={{lineHeight:'30px'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat.</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-4 col-md-4 col-lg-4 contact-margin">
                            <div className="contact-fonts" style={{textAlign:'left'}}>
                                <p  style={{lineHeight:'30px'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat. Aliquam erat volutpat. Sed efficitur diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque.</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-4 col-md-4 col-lg-4 contact-margin">
                            <div className="contact-fonts">
                                <div style={{textAlign:'left'}}>
                                    <div className="contact-title contact-title-btn">
                                        <p style={{lineHeight:'35px'}}>Address</p>
                                    </div>
                                    <div className="contact-title">
                                        <p>&nbsp;dfghvfgfhjfgh</p>
                                    </div>
                               </div><br/>
                               <div style={{textAlign:'left'}}>
                                    <div className="contact-title contact-title-btn">
                                        <p style={{lineHeight:'35px'}}>Phone No</p>
                                    </div>
                                    <div className="contact-title">
                                        <p>&nbsp;9819310466</p>
                                    </div>
                               </div><br/>
                               <div style={{textAlign:'left'}}>
                                    <div className="contact-title contact-title-btn">
                                        <p style={{lineHeight:'35px'}}>Email ID</p>
                                    </div>
                                    <div className="contact-title">
                                        <p>&nbsp;ammudilna2000@g</p>
                                    </div>
                               </div>
                               
                            </div>
                        </div>
                </div>
            </div>
            <div className="contact-black">
                <div className="container">
                    <div className="row text-center" style={{ margin:'30px'}}>
                        <div className="contact-form-heading">
                            <p>Get In Touch</p>
                        </div>
                        <div>
                            <form>
                                <div className="col-12 col-sm-6 col-md-5 col-lg-6" >
                                    <input placeholder="Name" className="contact-form-input"/>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6" >
                                    <input placeholder="Email" className="contact-form-input"/>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <input placeholder="Contact No" className="contact-form-input"/>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <input placeholder="Feedback" className="contact-form-input" id="contact-form-feedback"/>
                                </div>
                                <div>
                                    <button className="contact-form-btn" >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                

            </div>
            <div>
                    Map
            </div>
                        
                       
                   
                
        </div>
          
    );

};

export default Contact;