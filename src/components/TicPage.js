import React, { Component } from 'react';
import './SnakePage.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { SnakeChart } from './SnakeChart.js';
import Chart, {
    ArgumentAxis,
    Label,
    Legend,
    Series,
} from 'devextreme-react/chart';

import { exname, ticArr, exmail, isIn, uid } from './Header';
import axios from 'axios';

var ticArr2 = [];
var exname2 = 'Guest';

const TicPage = () => {

    const params = { username: 'log1' };

    const usert = () => {
        axios.get('http://localhost:5000/gamers/fetch3/' + uid)
            .then(function (response) {
                if (response.status === 200) {
                    console.log("response on ticpage", response.data);
                    //if ()
                    exname2 = response.data.username;
                    console.log("name on ticpage is: ", exname2);
                    //var exmail2 = response.data.email;
                    //snakeArr = response.data.snakegame;
                    ticArr2 = response.data.tictactoe;
                    console.log("New Tic Array: ", ticArr2);
                    console.log('me');
                    //renderLogout();
                    
                   
                }
            })
            .catch(function (error) {
                console.log("error");
            });
    }

    usert();
    console.log("Name on TicPage: ", exname);
    console.log("Array on Ticepage: ", ticArr2);
    let val = ticArr2.length;
    console.log("Length is: ", val);
    //let val2 = ticArr2.length;
    //console.log("Main length is: ", val2);
    const [login, setLogin] = useState(false);
    const onCloseLogin = () => {
        setLogin(false);
    };
    const onOpenLogin = () => {
        setLogin(true);
    };
    
     
        return (
            <div className='snake'>
                <br/>

            <div className='snake' >
                <img src="https://cdn.pixabay.com/photo/2018/06/07/16/49/vr-3460451_960_720.jpg" width="120%"/>

                <h1> Tic Tac Toe </h1>
                <br />
                <br />
                <br/> 
                    <Link to='/tictactoe' className='navlink' > <h2> Click here to play!</h2> </Link>
                    <br />
                    <br />
                    <br />
                    <div onClick={onOpenLogin} className="navlink" >
                        <i className="snake icon"></i>
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
                                        val: ticArr2[val - 5]
                                    }, {
                                            arg: 'Old',
                                            val: ticArr2[val - 4]
                                    }, {
                                            arg: 'New',
                                            val: ticArr2[val- 3]
                                    }, {
                                            arg: 'Newer',
                                            val: ticArr2[val - 2]
                                    }, {
                                            arg: 'Newest',
                                            val: ticArr2[val - 1]
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
            </div>
        );
    
}

export default TicPage;