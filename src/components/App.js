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


class App extends React.Component {
    render() {
        return (
            <Router>
            <div >
                    <SideBar />
                    <Header/>
                

                    <Route path="/snake-game-page" exact component={SnakePage} />
                    <Route path="/" exact component={Main} />
                    <Route path="/create" exact component={SideBar1} />
                    <Route path="/snake-game-online" exact component={Menu} />
                    <Footer/>

                    
                   
                    
            </div>
            </Router>

            
        );
    }
}

export default App;