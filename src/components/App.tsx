import { useState } from "react";
import * as classes from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import png from '@/assets/png.png';
import jpg from '@/assets/jpg.jpg';
import Svg from '@/assets/svg.svg';

function TODO(){
    TODO2();
}

function TODO2(){
    throw new Error();
}

export const App = () => {
    const [lucky, setLucky] = useState<string>('Испытай удачу');

    const [balance, setBalance] = useState<number>(1000);

    const [multiply, setMultiply] = useState<number>(1);
    const [all, setAll] = useState<boolean>(false);

    // const fortuneRing = (num : number)  =>{
    //     const randomNum : number = Math.round(Math.random());
    //     const choice : string = num === 0 ? 'Вы выбрали красное' : 'Вы выбрали черное';
    //     const fortune:  string = randomNum === 0 ? 'Выпало красное' : 'Выпало черное';
    //     const result :  string = randomNum === num ? 'Вы выиграли! Повторите свой успех!' : 'Вы проиграли! попробуйте снова!';
    //     setLucky(choice + ' ' + fortune + ' ' + result);
    //     const summ : number = all ? balance : (100 * multiply);
    //     if(randomNum === num){
    //         setBalance(prev => prev + summ);
    //     }
    //     else{
    //         setBalance(prev => prev - summ);
    //     }
    //     // return;
    //     setMultiply(1);
    //     setAll(false);
        
    // }

    const fortuneRing = (num: any) => {
        console.log(num);
        TODO();
    }

    return(
    <>
    { balance > 0 &&
    <div data-test-id={'App.DataTestId'}  className={classes.container}>
        <h1 data-test-id={'Platform'}>PLATFORM={__PLATFORM__}</h1>
        <img width={400} src={png} alt="png" />
        <div className={classes.value}>{lucky}</div>
        <p>Ваш баланс: {balance}</p>
        <div className="">
        <button className={classes.red_button} onClick={(e: any) => fortuneRing(0)}>Красное</button>
        <button className={classes.black_button} onClick={(e: any) => fortuneRing(1)}>Черное</button>
   
        </div>
        <button className={classes.black_button} onClick={(e: any) => setMultiply(2)}>Удвоить ставку</button>
        <button className={classes.black_button} onClick={(e: any) => setAll(true)}>Ва банк</button>
      
       {/* <img width={100} src={jpg} alt="jpg" />
        <Svg width={150} height={150} className={classes.icon}/> */}
    </div>
    }
    {
        
      balance <= 0  && 
      <>
       <h1>Вы проиграли!</h1> 
      <button onClick={(e: any) => location.reload()}>Попробовать снова</button>
      </>
     
    }
    {/* <Link to={'/about'}>about33</Link>
    <br />
    <Link to={'/shop'}>shop</Link> */}
    {/* <h1>hohoh</h1> */}
   
    <Outlet/>
    </>

    );
}
