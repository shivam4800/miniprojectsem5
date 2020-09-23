import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from './sideBar';
import Spinner from './Spinner';
import SideBar1 from "./try";
import Main from './Main';
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






class App extends React.Component {
    render() {
        return (
            <Router>
            <div >
                    <SideBar />
                    <Route path="/" exact component={Header} />
                

                    <Route path="/snake-game-page" exact component={SnakePage} />
                    <Route path="/" exact component={Main} />
                    <Route path="/create" exact component={SideBar1} />
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