import React,{useState} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SideBar from './sideBar';
import Spinner from './Spinner';
import Try from './try';
import Main1 from './Main1';
import SnakePage from './SnakePage';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Category from './Category';
import Memory from './gamespage/Memory';
import Knowledge from './gamespage/Knowledge';
import HotGames from './gamespage/HotGames';
import ReactionGames from './gamespage/ReactionGames';
import Search from './Search';
import cx from 'classnames';


 const App=()=> {
    const [search,setSearch]=useState('');
    const [toggle,setToggle]=useState(false);
    const pathname = window.location.pathname;
    console.log(pathname);
    {/*const onSearchSubmit=(search)=>{
        console.log(search);
        this.setState({search:search});

    };*/}
    const toggleMenu=() =>{
        setToggle(!toggle);
        
        console.log(toggle);
        
    }
    const onClose=()=>{
        setToggle(false);
       
    }
    const onOutsideClose=()=>{
        setToggle(false);
        
    }
    
    const classes = cx(
            'pusher',
            'bottom',
            {'dimmed': toggle}
          );
    
    return (
            <Router>
            <div >
                    <Header toggleMenu={toggleMenu}/>
                    <div className={toggle?"ui page dimmer":""}></div>
                    <SideBar  toggle={toggle} onClose={onClose} onOutsideClose={onOutsideClose} onRefresh={pathname}/>
                    <Route path="/" exact component={Main1}  />
                    <Route path="/snake-game-page" exact component={SnakePage} />
                    <Route path="/create" exact component={Try} />
                    <Route path="/snake-game-online" exact component={Menu} />
                    <Route path="/categories" exact component={Category} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/memory-walkthrough" exact component={Memory} />
                    <Route path="/knowledge" exact component={Knowledge} />
                    <Route path="/hot-games" exact component={HotGames} />
                    <Route path="/reaction-games" exact component={ReactionGames} />
                    <Route path="/search" exact component={Search} />
                    <Footer/>

            </div>
            </Router>  
        );
}

export default App;