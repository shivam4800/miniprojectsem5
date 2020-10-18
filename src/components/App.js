import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import cx from 'classnames';

class App extends React.Component {
    state={search:'',toggle:false};
    onSearchSubmit=(search)=>{
        console.log(search);
        this.setState({search:search});

    };
    toggleMenu=() =>{
        this.setState({toggle:!this.state.toggle});
        console.log(this.state.toggle);
        
    }
    onClose=()=>{
        this.setState({toggle:false});
    }
    onOutsideClose=()=>{
        this.setState({toggle:false})
    }
    render() {
        const classes = cx(
            'pusher',
            'bottom',
            {'dimmed': this.state.toggle}
          );
        return (
            <Router>
            <div >
                    <Header toggleMenu={this.toggleMenu}/>
                    <div className={this.state.toggle?"ui page dimmer":""}></div>
                    <SideBar onSubmit={this.onSearchSubmit}  toggle={this.state.toggle} onClose={this.onClose} onOutsideClose={this.onOutsideClose} />
                    
                    <Route path="/" exact component={Main1}/>
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
                    <Footer/>
                    
                    
                    
          
            </div>
            </Router>

            
        );
    }
}

export default App;