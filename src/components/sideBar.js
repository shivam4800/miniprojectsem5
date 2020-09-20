import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarContent, SidebarHeader } from 'react-pro-sidebar'; //npm install react-pro-sidebar
import 'react-pro-sidebar/dist/css/styles.css';
import './sideBar.css';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

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
                    <div className="marginadj" >
                        <div className="backborder" >
                        <i className=" clr  home icon"></i>
                        Sign in
                        </div>
                    </div>
                    </SidebarFooter>

                </ProSidebar>

            </div>
        );
    }

}

export default SideBar;