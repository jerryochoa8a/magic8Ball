//npm install axios
//npm install @reach/router
import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import styles from './Search.module.css';



const Search = props => { 
    const [keyWord, setKeyWord] = useState('')
    const [zip, setZip] = useState('')

    const [error, setError] = useState('')
    
    
    const food = (e) => { 
        if (/[a-z]/i.test(zip)==true) { //checks if there is a letter in the string
            setError('Invalid Zip. Numbers only Please.');
            navigate('/')
        }
        else if (zip.length < 5){
            setError('Invalid Zip');
            navigate('/');
        }
        else{
            navigate('/8ball/food/zip/' + zip);
        }
    }


    const bar = (e) => {
        if (/[a-z]/i.test(zip)==true) { //checks if there is a letter in the string
            setError('Invalid Zip. Numbers only Please.');
            navigate('/')
        }
        else if(zip.length < 5){
            setError('Invalid Zip');
            navigate('/');
        }
        else{
            navigate('/8ball/bar/zip/' + zip);
        }
    }


    const boba =(e) => {
        if (/[a-z]/i.test(zip)==true) { //checks if there is a letter in the string
            setError('Invalid Zip. Numbers only Please.');
            navigate('/')
        }
        else if(zip.length < 5){
            setError('Invalid Zip');
            navigate('/');
        }
        else{
            navigate('/8ball/boba/zip/' + zip)
        }
    }
    
    return(
        <>
            <div>
                <h2>Hello! Welcome to the Magic 8 Ball.</h2>
                <h3 className={styles.desc} > Have you ever felt 
                    indecisive about what to eat? 
                    Not to worry, The Magic 8 ball will help you decide.
                    pick from the following buttons to help with your decision and Zip:</h3> 
            </div>

            <h3 className={styles.QuickSearch}><u>Quick Search</u></h3>

            <div>
                <button className={styles.btn} onClick={food}>Food</button>
                <button className={styles.btn} onClick={bar}>Bars</button>
                <button className={styles.btn} onClick={boba}>Boba</button>
            </div>

            <h4 style={{color:'red'}}>{error}</h4>

            <input type={"text"} onChange={(e)=>setZip(e.target.value)} maxLength={5} placeholder={'zip'}/>
            
            
        </>
    )
}

export default Search;