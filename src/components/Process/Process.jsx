import React from "react";
import './Process.css';
import video from '../../assets/spot.mp4'

const Process = () => {
    return ( 
        <div className="process">
            <h2>Comment ca marche?</h2>
            <div className="video">
                <video height='100%' controls>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
        </div>
     );
}
 
export default Process;