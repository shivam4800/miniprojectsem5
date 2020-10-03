import React from 'react';
import './Main.css';
import main from '../images/main.jpg';
import {datas} from '../shared/datas';

const Main = (props) => {
    const filtersearch=datas.filter((data)=>{
        return data.title.toLowerCase().indexOf(props.search.toLowerCase())!==-1;
    })
    
    const cardsclassic = filtersearch.slice(0,2).map((img) => {
        return (

            <div class="ui link cards" style={{ display: 'inline-block'}}>
                <div class="card" style={{  marginLeft: '60px',maxWidth:'65%',zIndex:'1'}}>
                    <div class="image" >
                        <img src={img.src}/>
                    </div>
                    <div class="content">
                        <div class="header">{img.title}</div>
                        <div class="description">
                        {img.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    );

    
    const cardsaction = filtersearch.slice(2,4).map((img) => {
        return (
            <div class="ui link cards" style={{ display: 'inline-block'}}>
                <div class="card" style={{  marginLeft: '60px',maxWidth:'65%',zIndex:'1'}}>
                    <div class="image" >
                        <img src={img.src}/>
                    </div>
                    <div class="content">
                        <div class="header">{img.title}</div>
                        <div class="description">
                        {img.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    );

    return (
        <div className="size">
            
            <div>
            <img src={main} width="80%" height="45%" style={{borderRadius:'20px',marginLeft:'10%',marginTop:'13%'}} />
            </div>

            
            <div>
                
                <h1>Back To The Classics! </h1>
            </div>
            <div style={{ marginTop: '20px' }}>
                {cardsclassic}
            </div><br />
            <div>
                <h1>Action games</h1>
            </div>
            <div style={{ marginTop: '20px' }}>
                {cardsaction}
            </div><br />

            
        </div>
    );



};

export default Main;