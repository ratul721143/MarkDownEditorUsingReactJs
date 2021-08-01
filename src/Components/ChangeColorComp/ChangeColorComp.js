import React,{useState} from 'react'
import './ChangeColorCompStyle.css'

function ChangeColorComp({changeSettings,hidediv}) {

    const localbackColor = localStorage.getItem('backColor');
    const localfontColor = localStorage.getItem('fontColor');
    const localfontSize = localStorage.getItem('fontSize');


    const [backcolor,setBackcolor]=useState(localbackColor ? localbackColor : '#273746');
    const [fontcolor,setFontcolor]=useState(localfontColor ? localfontColor : '#58d68d');
    const [fontsize,setFontsize]=useState(localfontSize ? localfontSize : '25');

    const handelChanges=()=>{
        hidediv();
        changeSettings(backcolor,fontcolor,fontsize);
    }

    const setAllDefault=()=>{
        localStorage.setItem('backColor','#273746');
        localStorage.setItem('fontColor','#58d68d');
        localStorage.setItem('fontSize','25');
        setBackcolor('#273746');
        setFontcolor('#58d68d');
        setFontsize('25');
    }

    return (
        <div className="modal">
            <div className="modal-main">
                <div className="modal_heading">Change settings <button onClick={hidediv} className="modalClose_button">❌</button></div>
                <div className="modal_part1">Editor Background Color <span><input value={backcolor} onChange={(e)=>setBackcolor(e.target.value)} type="color" /></span></div>
                <div className="modal_part2">Editor Font Color <span><input value={fontcolor} onChange={(e)=>setFontcolor(e.target.value)} type="color" /></span></div>
                <div className="modal_part3">Font Size <input value={fontsize} onChange={(e)=>setFontsize(e.target.value)} className="fontTextbox" placeholder="25px" type="text"/></div>
                
                <div className="button__div">
                    <button onClick={setAllDefault} className="apply__button">Default</button>
                    <button onClick={handelChanges} className="apply__button">Apply</button>
                </div>
                
            </div>
        </div>
    )
}

export default ChangeColorComp;
