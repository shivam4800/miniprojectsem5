import React,{useState} from 'react';
import Typical from 'react-typical';
import './Search.css';
import {datas} from '../shared/datas';
import main from '../images/gameblur.jpg';
import gameconsole from '../images/console1.jpg';
import {Link} from 'react-router-dom';


const Search=()=>{
    const [search,setSearch]=useState('');
    const [result,setResult]=useState(false);
    const onInputChange=(e) => {
        setSearch(e.target.value);
        console.log(filtersearch.length);
        if(filtersearch.length==0){
            setResult(true);
        }
        else{
            setResult(false);
        }

    }
    const filtersearch=datas.filter((data)=>{
            return data.title.toLowerCase().indexOf(search.toLowerCase())!==-1;
            
    })
    
    
    const searchlist=filtersearch.map((filter)=>{
        return(
            <div className=" row text-center search-list-img">
                                        <Link to={filter.path}><div className="col-12 col-sm-12 col-md-6 col-lg-6" >
                                            <img src={filter.src} width="60%" height="300px" className="search-game-img"/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6" >
                                            <h2 className="search-game-title">{filter.title}</h2>
                                            <p className="search-game-description">{filter.description}</p>
                                            <h3 className="search-game-genre" >{filter.genre}</h3>
                                        </div></Link>
            </div>
        );
    });
    {/*const cardsclassic = filtersearch.slice(0,2).map((img) =>{
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
);*/}

    return(
        <div className="search-size">
            <div className="search-bg">
                <img src={gameconsole} width="100%" height="600px" />       
            </div>

            <div className="text-center search-padding">
                <h1 className="search-display search-find-fonts" >Find your &nbsp;</h1>
                <Typical className="search-text search-find-fonts"
                                steps={[ 'game!!', 5000,' Fun!!',5000]}
                                loop={Infinity}
                                wrapper="p"
                />
            
            </div>
            <div className="text-center">
                <input type="text" className="search-input" placeholder="Search.." onChange={(e)=>onInputChange(e)} />
                <div style={{textAlign:'right',width:'80%'}} className="search-input-result">
                    <i className="large tasks icon" style={{display:'inline-block'}}></i>
                    <h3 className="search-input-fonts">Displaying {filtersearch.length} results</h3>
                </div>
            </div>
            
        <div className="black search-black-padding">
        <div className="container">
            <div className="text-center " style={{margin:'20px'}}>
                {result?
                <div className="search-noresult">Sorry! No result</div>:
                searchlist}
                
            </div>
        </div>
    </div>
    
        
            
                
            
               
            <div>
                sderfghjkjhgfghjhgghjjhgfddfghjkl
            </div>
        </div>
    );
};

export default Search;