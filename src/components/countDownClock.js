import React, {useEffect,useState} from 'react';
import styles from './countDownClock.module.css';
function CountDownClock(props){
    const {initTime = 60} = props;

    const [seconds,setSeconds] = useState(initTime);
    
    useEffect(() => {
        let interval = setInterval( () => {
            setSeconds(seconds =>{
                if(seconds === 0){
                    clearInterval(interval);
                    return 0;
                } else return seconds-1;
            });
        }, 1000);
        //unmount
        return () =>{
            if(interval) clearInterval(interval);
        } 
    },[]);

    return (
        <div className={styles.textTimer}>
            <span className={styles.textTimer}>
                {seconds}
            </span>
            &nbsp;s
        </div>
    );
}

export default CountDownClock;
