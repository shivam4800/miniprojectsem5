import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';


const Main = () => {
    const imgsrc = [{ src: 'https://image.dosgamesarchive.com/screenshots/snake2.gif', title: 'The Serpent Quest', description:'The Classic Snake Game from your Keypad devices is finally making  debut to the browser!' }, { src: 'https://s3.amazonaws.com/tetris-www/assets/article/2017/06/14/tetris-lingo-feature_feature.jpg',title:'Tetris',description:'The best memories of childhood are finally coming to you, but with a twist! Let the showdown begin!'}
    ];
    const imgarr = imgsrc.map((img) => {
        return (

            <div class="ui card " style={{ display: 'inline-block', marginLeft: '60px', marginRight: '30px', maxWidth: '20%' }}>
                <div class="image">
                    <img src={img.src} />
                </div>
                <div class="content">
                    <Link to="/snake-game-page" className="nav-link" >
                        <div> <b> {img.title} </b> </div>
                    </Link>

                    <div class="description">
                        {img.description}
            </div>
                </div>
                <div class="extra content">
                    fun games
            </div>

            </div>


        );
    }
    );

    return (
        <div className="size">
            <div>
                <h1>Back To The Classics! </h1>
            </div>
            <div style={{ marginTop: '20px' }}>
                {imgarr}
            </div><br /><hr />
            <div>
                <h1>Action games</h1>
            </div>
            <div style={{ marginTop: '20px' }}>
                {imgarr}
            </div><br /><hr />

            <div>
                <h1>Hotflix </h1>
            </div>
            <div style={{ marginTop: '20px' }}>
                {imgarr}
            </div><br /><hr />
            <div>
                <h1>Action games</h1>
            </div>
            <div style={{ marginTop: '20px' }}>
                {imgarr}
            </div><br /><hr />


        </div>
    );



};

export default Main;