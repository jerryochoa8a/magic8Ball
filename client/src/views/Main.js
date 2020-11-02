import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styles from '../views/Main.module.css';  

import { Router } from '@reach/router';
import Search from '../components/Search';
import BobaInfo from '../components/BobaInfo';
import Bar from '../components/Bar';
import BarInfo from '../components/BarInfo';
import Food from '../components/Food';
import FoodInfo from '../components/FoodInfo';
import Boba from '../components/Boba';


export default () => {

const [currentTab, setCurrentTab] = useState("Res");
   
    return (
        <div>
            <div>
                <div>
                    <a className={styles.home} href="/">Home</a>
                </div>
            </div>
            <h2 className={styles.glow}>The Magic <img className={styles.ochoball} src={require('../images/8ball2.png')}/> Ball</h2>
           <hr/>
            <Router>
                <Search path="/"/>
                
                <Food path="/8ball/food/zip/:Zip"/>
                <FoodInfo path="/8ball/food/:FoodId/:zip"/>
                
                <Bar path="/8ball/bar/zip/:Zip"/>
                <BarInfo path="/8ball/bar/:BarId/:zip"/>
                
                <Boba path="8ball/boba/zip/:Zip"/>
                <BobaInfo path="8ball/boba/:BobaId/:zip"/>
            </Router>
           
        </div>
    )
}