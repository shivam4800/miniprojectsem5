import React, { Component } from 'react';
import './SnakePage.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { SnakeChart } from './SnakeChart.js';
import axios from 'axios';
import Chart, {
    ArgumentAxis,
    Label,
    Legend,
    Series,
} from 'devextreme-react/chart';

import { exname, snakeArr, isIn, uid} from './Header';

var snakeArr2 = [];
var exname2 = 'Guest';

const SnakePage = () => {
    const usersn = () => {
        axios.get('http://localhost:5000/gamers/fetch3/' + uid)
            .then(function (response) {
                if (response.status === 200) {
                    console.log("response on ticpage", response.data);
                    //if ()
                    exname2 = response.data.username;
                    console.log("name on ticpage is: ", exname2);
                    //var exmail2 = response.data.email;
                    //snakeArr = response.data.snakegame;
                    snakeArr2 = response.data.snakegame;
                    console.log("New Snake Array: ", snakeArr2);
                    console.log('me');
                    //renderLogout();


                }
            })
            .catch(function (error) {
                console.log("error");
            });
    }

    usersn();
    console.log("Name on SnakePage: ", exname);
    console.log("Array on Snakepage: ", snakeArr);
    let val = snakeArr2.length;
    console.log("Length is: ")
    const [login, setLogin] = useState(false);
    const onCloseLogin = () => {
        setLogin(false);
    };
    const onOpenLogin = () => {
        setLogin(true);
    };
    
     
        return (
            <div className='snake' >

                <div className="text-center snake-title">
                    <h1>The Serpent Quest </h1>
                </div>

                <br />
                <br />
                <br /> 
                

                    <div className="text-center">
                        <Link to='/snake-game-online' className='navlink' > <button className="snake-play"> Play</button> </Link>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div onClick={onOpenLogin} className=" text-center snake-track" >

                        <h1> <a >Track your Points! </a> </h1>
                    </div>

                    
                    <Modal isOpen={login} onRequestClose={onCloseLogin} style={{
                        overlay: { zIndex: '99', backgroundColor: '#b3b3b49f' },
                        content: { marginLeft: '35%', width: '30%', height: '75%' }
                    }} >
                        <center> <h1> Track Points, Keep Playing!</h1></center><br />
                        <br /><br />
                        <div>
                            {isIn ?
                                <Chart
                                    title="Data of Last 5 Games"
                                    dataSource={[{
                                        arg: 'Older',
                                        val: snakeArr2[val - 5]
                                    }, {
                                        arg: 'Old',
                                        val: snakeArr2[val - 4]
                                    }, {
                                        arg: 'New',
                                        val: snakeArr2[val - 3]
                                    }, {
                                        arg: 'Newer',
                                        val: snakeArr2[val - 2]
                                    }, {
                                        arg: 'Newest',
                                        val: snakeArr2[val - 1]
                                    }]}

                                    id="chart"
                                >

                                    <ArgumentAxis tickInterval={10}>
                                        <Label format="decimal" />
                                    </ArgumentAxis>

                                    <Series
                                        type="line"
                                    />

                                    <Legend
                                        visible={false}
                                    />

                                </Chart>
                                :
                                <div> Please login to see score! </div>}
                    </div>
                 </Modal>
                </div>
           
        );
    
}

export default SnakePage;