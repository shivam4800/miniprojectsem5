import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarContent, SidebarHeader } from 'react-pro-sidebar'; //npm install react-pro-sidebar
import 'react-pro-sidebar/dist/css/styles.css';
import './sideBar.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Logo2 from '../images/logo2.png';


class SideBar extends React.Component {
    state={sign:false,home:false,contact:false,about:false,category1:false,category2:false,category3:false,category4:false,search:''};
    onOpenSign=()=>{
        this.setState({sign:true});
    }
    onCloseSign=()=>{
        this.setState({sign:false});
    }
    onClickhome=()=>{
        this.setState({home:!this.state.home,about:false,contact:false,category1:false,category2:false,category3:false,category4:false});
    }
    onClickabout=()=>{
        this.setState({about:!this.state.about,home:false,contact:false,category1:false,category2:false,category3:false,category4:false});
    }
    onClickcontact=()=>{
        this.setState({contact:!this.state.contact,home:false,about:false,category1:false,category2:false,category3:false,category4:false});
    }
    onClickcategory1=()=>{
        this.setState({category1:!this.state.category1,home:false,about:false,contact:false,category2:false,category3:false,category4:false});
    }
    onClickcategory2=()=>{
        this.setState({category2:!this.state.category2,home:false,about:false,contact:false,category1:false,category3:false,category4:false});
    }
    onClickcategory3=()=>{
        this.setState({category3:!this.state.category3,home:false,about:false,contact:false,category1:false,category2:false,category4:false});
    }
    onClickcategory4=()=>{
        this.setState({category4:!this.state.category4,home:false,about:false,contact:false,category1:false,category2:false,category3:false});
    }
    
    onInputChange=(e) => { //using arrow function instead of normal func for resolving the problem of this.
        
        this.setState({search:e.target.value})
        this.props.onSubmit(this.state.search); //for showing the value in input field by calling the function in parent App.js and giving back the value of the input field to app.js 
    }
    

    render() {
        const icon = <i className=" small home icon"></i>;
        const icon1 = <i className="  small clone icon"></i>;
        const arrow = <i className="  angle right icon"></i>;

        return (
            <div className="border">

                <ProSidebar>
                    <SidebarHeader >
                        <div style={{display:'inline-block'}}>
                        <img src={Logo2} width ="30%" height="55%" style={{marginLeft:'1px'}}/> 
                            The game changer
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                    <Menu iconShape="circle">
                        
                        <MenuItem>
                            <form className="ui form" onSubmit={(e)=>e.preventDefault()}>
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..." className="margin" style={{ width: '30%',height:'35px'}} value={this.state.search} onChange={(e)=>this.onInputChange(e)}/>
                                <i className="search icon"></i>
                            </div>
                            </form>
                        </MenuItem>
                        <br />

                        <MenuItem icon={icon} onClick={this.onClickhome} className={this.state.home?'homeactive':'homenotactive'}>Home<Link to="/"  /></MenuItem>
                        
                        <SubMenu title="Categories" icon={icon1} >

                            <MenuItem  onClick={this.onClickcategory1} className={this.state.category1?'category1active':'category1notactive'}>Memory Walkthrough..<Link to="/memory-walkthrough" /></MenuItem>
                            <MenuItem onClick={this.onClickcategory2} className={this.state.category2?'category2active':'category2notactive'}>Knowledge is Power!<Link to="/knowledge" /></MenuItem>
                            <MenuItem onClick={this.onClickcategory3} className={this.state.category3?'category3active':'category3notactive'}>Ah! That's Hot!<Link to="/hot-games" /></MenuItem>
                            <MenuItem onClick={this.onClickcategory4} className={this.state.category4?'category4active':'category4notactive'}>Act-React ;) <Link to="/reaction-games" /></MenuItem>
                        </SubMenu>

                        
                        <MenuItem icon={icon} onClick={this.onClickabout} className={this.state.about?'aboutactive':'aboutnotactive'} >About<Link to="/about"  /></MenuItem>
                        
                        <MenuItem icon={icon} onClick={this.onClickcontact} className={this.state.contact?'contactactive':'contactnotactive'}>Contact Us<Link to="/contact"  /></MenuItem>
                        

                    </Menu>
                    </SidebarContent>
                    
                    <SidebarFooter style={{ marginBottom:'1.5px' }}>
                    <div className="marginadj" onClick={this.onOpenSign} >
                        <div className="backborder" >
                        <i className=" clr  home icon"></i>
                        Feedback
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