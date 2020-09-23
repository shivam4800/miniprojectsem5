import React, { Component } from 'react';
import './SnakePage.css';
import { Link } from 'react-router-dom';


export default class SnakePage extends Component {
    render() {

        return (
<<<<<<< HEAD
            <div className='snake'>
                <br/>
=======
            <div className='snake' >
                <img src="https://cdn.pixabay.com/photo/2018/06/07/16/49/vr-3460451_960_720.jpg" width="120%"/>
>>>>>>> 85fbf99d41c4f61eb62c3aa73954ff591eead93e
                <h1>The Serpent Quest </h1>
                <br />
                <br />
                <br/> 
                <Link to='/snake-game-online' className='navlink' > <h2> Click here to play!</h2> </Link>
            </div>
        );
    }
}