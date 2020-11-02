//npm install axios
//npm install @reach/router
import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import styles from './BarInfo.module.css';


const BarInfo = props => { 
    const [bar, setBar] = useState({})
    const [loc, setLoc] = useState({})
    const [closed, setClosed] = useState()

    const term ="bar"
    const zip = props.zip
    
    
        useEffect(() => {
            axios.get("http://localhost:8000/" + term + "/zip/" + zip)
            .then(response => {
                    setBar(response.data.returned_data.businesses[props.BarId]) //  response.data.results
                    console.log(response.data.returned_data.businesses[props.BarId])
                    setLoc(response.data.returned_data.businesses[props.BarId].location)
                    setClosed(response.data.returned_data.businesses[props.BarId].is_closed)
        })
        .catch(err => console.log(err)); 
    },[]);

    const backImage = {
        backgroundImage: `url(${bar.image_url})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat'
    };
    
    if(closed===false){
        return(
            <> 
                <div style={backImage}>
                    <div className={styles.back}>
                        <a  href={'/8ball/bar/zip/' + zip}><b>back</b></a>
                    </div>
                    <div className={styles.form}>
                        <h1><u>{bar.name}</u></h1>
                        <h2>{loc.address1}</h2>
                        <h3 className={styles.gold}>Stars: {bar.rating}/5</h3>
                        <h3 style={{color: "lightgreen"}}>Open</h3>
                    </div>
                        
                    <div className={styles.ImgExtend}/>
                </div>
            </>
        )
    }
    else{
        return(
             <> 
                <div style={backImage}>
                    <div className={styles.back}>
                        <a  href={'/8ball/bar/zip/' + zip}><b>back</b></a>
                    </div>
                    <div className={styles.form}>
                        <h1><u>{bar.name}</u></h1>
                        <h2>{loc.address1}</h2>
                        <h3 className={styles.gold}>Stars: {bar.rating}/5</h3>
                        <h3 style={{color: "red"}}>Closed</h3>
                    </div>
                        
                    <div className={styles.ImgExtend}/>
                </div>
            </>
        )
    }
}

export default BarInfo;