import React,{useState} from 'react';
import Typical from 'react-typical';
import './Search.css';
import {datas} from '../shared/datas';
import main from '../images/gameblur.jpg';
import {Link} from 'react-router-dom';


const Search=()=>{
    const [search,setSearch]=useState('');
    const onInputChange=(e) => {
        setSearch(e.target.value);
    }
    const filtersearch=datas.filter((data)=>{
        return data.title.toLowerCase().indexOf(search.toLowerCase())!==-1;
            
    })
    const cardsclassic = filtersearch.slice(0,2).map((img) =>{
        return (
            <div class="ui link cards" style={{ display: 'inline-block',marginLeft:'10%'}}>
                <div class="card" style={{  marginLeft: '60px',maxWidth:'65%',zIndex:'1'}}>
                    <div class="image" >
                        <img src={img.src}/>
                    </div>
                    <div class="content">
                    <Link to={img.path}><div class="header">{img.title}</div></Link>
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
            <div class="ui link cards" style={{ display: 'inline-block',marginLeft:'10%'}}>
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
    return(
        <div >
            <div className="text-center search-padding">
                <p className="search-display" >finf dsdj   &nbsp;</p>
                <Typical className="search-text"
                                steps={[ 'game!!', 5000,' entaiyedsu 6!!',5000]}
                                loop={Infinity}
                                wrapper="p"
                />
            
            </div>
            <div className="text-center">
                <input type="text" className="search-input" placeholder="Search.." onChange={(e)=>onInputChange(e)} />
            </div>
        
            <div>
            <div >

            <div id="division">  
                
                <h1>Back To The Classics! </h1>
            </div>
            
                
            <div>
                <h1>Action games</h1>
            </div>
                {cardsclassic}
                {cardsaction}
            </div>
            </div>
        </div>
    );
};

export default Search;