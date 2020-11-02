//npm install axios
//npm install @reach/router
import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import styles from './Food.module.css';



const Food = props => { 
    const [choiceList, setChoiceList] = useState([]);
    const [randomPick, setRandomPick] = useState({})
    const [type, setType] = useState([])
    const [randomNum, setRandomNum] = useState(6)
    const [fadeTri, setFadeTri] =useState()
    const [btnName, setBtnName] = useState('Click')

    const [zip, setZip] =useState(props.Zip)
    const term = "food"

    
    // render() {
    //     const min = 0;
    //     const max = 20;
    //     const rand = min + Math.floor(Math.random() * (max - min));
    //     console.log(startNum);
    // }
    const click = e => {
        const min = 0;
        const max = 20;
        const rand = min + Math.floor(Math.random() * (max - min));
        console.log(randomNum);
        setRandomNum(rand)
        setBtnName('Next')
        setFadeTri (
                <>
                    <div className={styles.fade}>
                        <div className={styles.box}>
                            <h3><a href={"/8ball/food/" + randomNum + "/" + zip}>{randomPick.name}</a></h3>
                            <p>{randomPick.display_phone}</p>
                            <p>{type}</p>
                        </div>
                    </div>
                </>
            )
        }
    
    useEffect(() => {
        axios.get("http://localhost:8000/" + term + "/zip/" + zip)
            .then(response => {
                    setType(response.data.returned_data.businesses[randomNum].categories[0].title)
                    console.log(response.data.returned_data);
                    setRandomPick(response.data.returned_data.businesses[randomNum])
                    console.log(randomPick.categories[0].title)
                    setChoiceList(response.data.returned_data.businesses);  //  response.data.results
        })
        .catch(err => console.log(err)); 
    },[randomNum]);
    
    return(
        <>
            <div>
                <button className={styles.btn} onClick={click}> {btnName} </button>
            </div>

            <div>{fadeTri}</div> {/*this is the triangle*/}
        </>
    )
}

export default Food;