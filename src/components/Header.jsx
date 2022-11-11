import React from "react";
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import {Link } from "react-router-dom";


const Header = () => {
    return ( 
        <div className='Home'>
            <header className="header">
                <div className="headerContent">
                    <h1 style={{textAlign: 'center'}}>Pourquoi acheter quand on peut emprunter?</h1>
                    <div  className='searchbox'>
                        
                        <input type="search" placeholder="Qu'est-ce que vous recherchez?" name="" id="inputsearch" className="inputsearch"/>
                        <Link to="/recherche" className='searchBtn'>
                            
                                <SearchIcon sx={{color:'#262D44'}}/>
                        </Link>
                    </div>
                </div>
            </header>
            
        </div>
     );
}
 
export default Header;