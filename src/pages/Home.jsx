import React from "react";
import '../App.css';
import Header from "../components/Header";
import Avantages from "../components/Avantages";
import LatestOffers from '../components/LatestOffers/LatestOffers'
import Process from "../components/Process/Process";


const Home = ({Objets}) => {
    return ( 
        <div className='Home'>
            <Header/>
            <Avantages/>
            <LatestOffers Objets={Objets}/>
            <Process/>
        </div>
     );
}
 
export default Home;