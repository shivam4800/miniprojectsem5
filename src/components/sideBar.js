import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarContent, SidebarHeader } from 'react-pro-sidebar'; //npm install react-pro-sidebar
import 'react-pro-sidebar/dist/css/styles.css';
import './sideBar.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class SideBar extends React.Component {
    state={sign:false};
    onOpenSign=()=>{
        this.setState({sign:true});
    }
    onCloseSign=()=>{
        this.setState({sign:false});
    }

    render() {
        const icon = <i className=" small home icon"></i>;
        const icon1 = <i className="  small clone icon"></i>;
        const arrow = <i className="  angle right icon"></i>;
        return (
            <div className="border">

                <ProSidebar>
                    <SidebarHeader>
                        <h3 style={{marginTop:'25px',marginLeft:'20px',marginBottom:'20px'}}>The Game Changer!</h3>
                    </SidebarHeader><br/>
                    <SidebarContent>
                    <Menu iconShape="circle">
                        
                        <MenuItem>
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..." className="margin" style={{ width: '30%',height:'35px'}} />
                                <i className="search icon"></i>
                            </div>
                        </MenuItem>
                        <br />

                        <MenuItem icon={icon} >Home</MenuItem>
                        <br />
                        <SubMenu title="Categories" icon={icon1}>

                            <MenuItem icon={arrow}>Memory Walkthrough..<Link to="/create" className="nav-link" /></MenuItem>
                            <MenuItem icon={arrow}>Knowledge is Power!</MenuItem>
                            <MenuItem icon={arrow}>Ah! That's Hot!</MenuItem>
                            <MenuItem icon={arrow}>Act-React ;) </MenuItem>
                        </SubMenu>

                        <br />
                        <MenuItem icon={icon} >About</MenuItem>
                        <br />
                        <MenuItem icon={icon} >Contact Us</MenuItem>
                        <br />

                    </Menu>
                    </SidebarContent>
                    
                    <SidebarFooter style={{ marginBottom:'1.5px' }}>
                    <div className="marginadj" onClick={this.onOpenSign} >
                        <div className="backborder" >
                        <i className=" clr  home icon"></i>
                        Sign up
                        </div>
                    </div>
                    </SidebarFooter>

                </ProSidebar>
                <Modal isOpen={this.state.sign} onRequestClose={this.onCloseSign} style={{overlay:{zIndex:'99',backgroundColor:'#b3b3b49f'},content:{marginLeft:'35%',width:'30%',height:'75%'}}} >
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
    }

}

export default SideBar;