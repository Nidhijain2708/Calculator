import React,{useState} from 'react'

const OutputDiv = ({text,updateOutputBar,evalTextInParent,backedTextCall}) => {
    const keyPressed=(ev)=>{
        // console.log(ev.key);
        if(ev.key=="Enter" || ev.key=="="){
            evalTextInParent();
        }
        else if(ev.key=="Shift"){
            text+="";
        }
        else if(ev.key=="Backspace"){
            let backedText="";
            if(text==""){}
            else{
                for(let i=0;i<text.length-1;i++){
                    backedText+=text[i];
                }
            }
            // console.log(backedText);
            backedTextCall(backedText);
        }
        else{
            updateOutputBar(ev.key);
        }
    }
    return (
      <div>
          <input onKeyDown={keyPressed} className="outputBar" value={text}></input>
      </div>
    )
}

export default OutputDiv