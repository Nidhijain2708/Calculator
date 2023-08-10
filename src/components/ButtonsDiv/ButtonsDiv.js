import React from 'react';
// import CalcButton from '../CalcButton/CalcButton';

const ButtonsDiv = ({textPrint,appendedText,updateOutputAfterEval,evalTextInParent,calledAC}) => {
    const normBtnHandler=(ev)=>{
        // console.log(typeof(ev.target.className));
        textPrint(ev.target.className);
    }
    const evalulateExp=()=>{
        // console.log(appendedText);
        // let ans=eval(appendedText);
        // console.log(ans);
        // updateOutputAfterEval(ans);
        evalTextInParent();
    }

    const setTextAC=()=>{
        calledAC();
    }
    
    return (
    <div>
        <button onClick={normBtnHandler} className="(">(</button>
        <button onClick={normBtnHandler} className=")">)</button>
        <button onClick={normBtnHandler} className="%">%</button>
        <button onClick={setTextAC} className="">AC</button><br />
        <button onClick={normBtnHandler} className="7">7</button>
        <button onClick={normBtnHandler} className="8">8</button>
        <button onClick={normBtnHandler} className="9">9</button>
        <button onClick={normBtnHandler} className="/">/</button><br />
        <button onClick={normBtnHandler} className="4">4</button>
        <button onClick={normBtnHandler} className="5">5</button>
        <button onClick={normBtnHandler} className="6">6</button>
        <button onClick={normBtnHandler} className="*">*</button><br />
        <button onClick={normBtnHandler} className="1">1</button>
        <button onClick={normBtnHandler} className="2">2</button>
        <button onClick={normBtnHandler} className="3">3</button>
        <button onClick={normBtnHandler} className="-">-</button><br />
        <button onClick={normBtnHandler} className="0">0</button>
        <button onClick={normBtnHandler} className=".">.</button>
        <button onClick={evalulateExp}>=</button>
        <button onClick={normBtnHandler} className="+">+</button><br />
    </div>
  )
}

export default ButtonsDiv