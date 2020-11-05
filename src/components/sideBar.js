import React from 'react';
import {Link} from'react-router-dom';
import Logo from '../images/logo2.png';
import SubMenu from './SubMenu';
import './sideBar.css';
import cn from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';



class sideBar extends React.Component{
    state={home:false,contact:false,about:false,category1:false,category2:false,category3:false,category4:false,search:false};
    
    onClickhome=()=>{
        this.setState({home:!this.state.home,about:false,contact:false,category1:false,category2:false,category3:false,category4:false,search:false});
        console.log(this.state.home);
    }
    onClickabout=()=>{
        this.setState({about:!this.state.about,home:false,contact:false,category1:false,category2:false,category3:false,category4:false,search:false});
    }
    onClickcontact=()=>{
        this.setState({contact:!this.state.contact,home:false,about:false,category1:false,category2:false,category3:false,category4:false,search:false});
    }
    onClicksearch=()=>{
        this.setState({search:!this.state.search,home:false,about:false,category1:false,category2:false,category3:false,category4:false,contact:false});
    }
    
    
    render(){
        const classes = cn(
            'ui','sidebar', 'overlay','right','vertical','menu', 'animating',
            {'visible' : this.props.toggle}
        );
        const onPageLoad=()=>{
            if(this.props.onRefresh ==='/about'){
                this.setState({about:true,home:false,contact:false,search:false});
            } 
            if(this.props.onRefresh ==='/contact'){
                this.setState({contact:true,about:false,home:false,search:false});
            } 
            if(this.props.onRefresh ==='/search'){
                this.setState({search:true,home:false,about:false,contact:false});
            } 
            if(this.props.onRefresh ==='/'){
                this.setState({home:true});
            } 

        }
        window.addEventListener('load',onPageLoad);
        
        return(
            <div>
                <OutsideClickHandler onOutsideClick={this.props.onOutsideClose}>
                <div className="disappear">
                    <div className={classes}>
                        <div className="col-xs-12 col-sm-12 close">
                            <i className="close icon "  onClick={this.props.onClose}></i>
                        </div>
                        <div className="col-xs-12 col-sm-12 ">
                            <ul>
                                <Link to="/"><li className={this.state.home?'active item ':'item'}  onClick={this.onClickhome}><i className="teal home icon"></i> Home</li></Link>
                                <Link to="/about"><li className={this.state.about?'active item':'item'} onClick={this.onClickabout}><i className="teal info icon"></i>About</li></Link>
                                <Link to="/contact" ><li className={this.state.contact?'active item':'item'} onClick={this.onClickcontact}><i className="teal phone icon"></i>Contacts</li></Link>
                                <Link to="/search" ><li className={this.state.search?'active item':'item'} onClick={this.onClicksearch}><i className="teal search icon"></i>Search</li></Link>
                                <div class="ui pointing dropdown link item">
    <span class="text">Shopping</span>
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="header">Categories</div>
      <div class="item">
        <i class="dropdown icon"></i>
        <span class="text">Clothing</span>
        <div class="menu">
          <div class="header">Mens</div>
          <div class="item">Shirts</div>
          <div class="item">Pants</div>
          <div class="item">Jeans</div>
          <div class="item">Shoes</div>
          <div class="divider"></div>
          <div class="header">Womens</div>
          <div class="item">Dresses</div>
          <div class="item">Shoes</div>
          <div class="item">Bags</div>
        </div>
      </div>
      <div class="item">Home Goods</div>
      <div class="item">Bedroom</div>
      <div class="divider"></div>
      <div class="header">Order</div>
      <div class="item">Status</div>
      <div class="item">Cancellations</div>
    </div>
  </div>
                            </ul>
                        </div>
                       
                    </div>
                </div>
                </OutsideClickHandler>
                <div className="sidebar-div">
                <div className="ui  secondary pointing inverted vertical icon menu" style={{marginTop:'180px'}}>
                    <Link to="/"><a className={this.state.home?'active item clr':'item clr1'} style={{marginBottom:'20px'}}  onClick={this.onClickhome}>
                        <div class="ui icon " data-tooltip="Home"  data-position="right center">
                            <i class="home icon"></i>
                        </div>
                        
                    </a></Link>
                    <Link to="/about"><a className={this.state.about?'active item clr':'item clr1'} style={{marginBottom:'20px'}} onClick={this.onClickabout}>
                        <div class="ui icon " data-tooltip="About"  data-position="right center">
                            <i class=" user icon " ></i>
                        </div>
                        
                    </a></Link>
                    <Link to="/contact"><a className={this.state.contact?'active item clr':'item clr1'} style={{marginBottom:'20px'}} onClick={this.onClickcontact}>
                        <div class="ui icon " data-tooltip="Contact"  data-position="right center">
                            <i class=" phone icon " ></i>
                        </div>
                        
                    </a></Link>
                    <Link to="/search" className={this.state.search?'active item clr':'item clr1'} style={{marginBottom:'20px'}} onClick={this.onClicksearch}><a>
                        <div class="ui icon " data-tooltip="Search"  data-position="right center">
                            <i className="search icon"></i>
                        </div>
                    </a></Link>
                    {/*<a >
                        <SubMenu/>
                    </a>*/} 
                </div>
                </div>    
            </div>
        );
    }
}
    

export default sideBar;