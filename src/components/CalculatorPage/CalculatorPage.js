import React,{useState} from 'react';
import OutputDiv from '../OutputDiv/OutputDiv';
import ButtonsDiv from '../ButtonsDiv/ButtonsDiv';

const CalculatorPage = () => {
  const [text,setText]=useState("");

  const updateOutputAfterEval=(ans)=>{
    setText(ans);
    ans="";
  }

  const textPrint=(incomingText)=>{
    // console.log(incomingText);
    let newText1="";
    newText1=text;
    newText1+=incomingText;
    setText(newText1);
    // console.log(newText);
  }

  const updateOutputBar=(writtenText)=>{
    let newText="";
    newText=text;
    newText+=writtenText;
    setText(newText);
  }

  const evalTextInParent=()=>{
    let ans=eval(text).toString();
    updateOutputAfterEval(ans);
  }

  const calledAC=()=>{
    setText("");
  }

  const backedTextCall=(backedText)=>{
    setText(backedText);
  }
  return (
    <div>
        <OutputDiv backedTextCall={backedTextCall} evalTextInParent={evalTextInParent} updateOutputBar={updateOutputBar} text={text}/>
        <ButtonsDiv calledAC={calledAC} evalTextInParent={evalTextInParent} updateOutputAfterEval={updateOutputAfterEval} appendedText={text} textPrint={textPrint}/>
    </div>
  )
}

export default CalculatorPage