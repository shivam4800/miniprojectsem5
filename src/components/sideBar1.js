import React from 'react';
import {Link} from'react-router-dom';
import Logo from '../images/logo2.png';
import SubMenu from './SubMenu';
import './sideBar1.css';
class sideBar extends React.Component{
    state={home:true,contact:false,about:false,category1:false,category2:false,category3:false,category4:false};
    onClickhome=()=>{
        this.setState({home:!this.state.home,about:false,contact:false,category1:false,category2:false,category3:false,category4:false});
        console.log(this.state.home);
    }
    onClickabout=()=>{
        this.setState({about:!this.state.about,home:false,contact:false,category1:false,category2:false,category3:false,category4:false});
    }
    onClickcontact=()=>{
        this.setState({contact:!this.state.contact,home:false,about:false,category1:false,category2:false,category3:false,category4:false});
    }
    render(){
        
        return(
            <div class="sidebar-div">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 nav ">
                            <label for="toggle">&#9776;</label>
                            <input type="checkbox" id="toggle"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    
    }
}
    

export default sideBar;