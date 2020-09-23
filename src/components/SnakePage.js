import React, { Component } from 'react';
import './SnakePage.css';
import { Link } from 'react-router-dom';


export default class SnakePage extends Component {
    render() {

        return (
            <div className='snake'>
                <br/>
                <h1>The Serpent Quest </h1>
                <br />
                <br />
                <br/> 
                <Link to='/snake-game-online' className='navlink' > <h2> Click here to play!</h2> </Link>
            </div>
        );
    }
}