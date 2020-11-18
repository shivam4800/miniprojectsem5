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

import { exname, snakeArr, isIn } from './Header';


const SnakePage = () => {

    console.log("Name on SnakePage: ", exname);
    console.log("Array on Snakepage: ", snakeArr);
    let val = snakeArr.length;
    console.log("Length is: ")
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

                <h1>The Serpent Quest </h1>
                <br />
                <br />
                <br/> 
                    <Link to='/snake-game-online' className='navlink' > <h2> Click here to play!</h2> </Link>
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
                                        val: snakeArr[val - 5]
                                    }, {
                                        arg: 'Old',
                                        val: snakeArr[val - 4]
                                    }, {
                                        arg: 'New',
                                        val: snakeArr[val - 3]
                                    }, {
                                        arg: 'Newer',
                                        val: snakeArr[val - 2]
                                    }, {
                                        arg: 'Newest',
                                        val: snakeArr[val - 1]
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

export default SnakePage;