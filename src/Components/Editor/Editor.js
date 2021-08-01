import React,{useState} from 'react';
import '../Editor/EditorStyle.css';
import ReactMarkdown from 'react-markdown';
import ChangeColorComp from '../ChangeColorComp/ChangeColorComp';

function Editor() {

/*

markdowntext=>
backColor=>
fontColor=>
fontSize=>

*/  
    const localMarkdownText = localStorage.getItem('Markdowntext');
    const localbackColor = localStorage.getItem('backColor');
    const localfontColor = localStorage.getItem('fontColor');
    const localfontSize = localStorage.getItem('fontSize');

    const [markdown, setMarkdown] = useState(localMarkdownText ? localMarkdownText : '### write Your Markdown Code Here');
    const [showcolorDiv,setShowcolorDiv]=useState(false);
    const [editorbackcolor,setEditorbackcolor]=useState(localbackColor ? localbackColor : '#273746');
    const [editorfontcolor,setEditorfontcolor]=useState(localfontColor ? localfontColor : '#58d68d');
    const [editorfontsize,setEditorfontsize]=useState(localfontSize ? localfontSize : '25');

    const handelCloseColorDiv=()=>{
        setShowcolorDiv(!(showcolorDiv));
    }

    const handelMarkdownText=(e)=>{
        let text= e.target.value;
        setMarkdown(text);
        localStorage.setItem('Markdowntext',text);
    }

    const handelsettingschange=(backcolor,fontcolor,fontsize)=>{
        setEditorbackcolor(backcolor);
        localStorage.setItem('backColor',backcolor);
        setEditorfontcolor(fontcolor);
        localStorage.setItem('fontColor',fontcolor);
        setEditorfontsize(fontsize);
        localStorage.setItem('fontSize',fontsize);
    }

    const textAreaStyle={
        backgroundColor: editorbackcolor,
        color:editorfontcolor,
        fontSize:editorfontsize+'px'
    }

    return (

        <div className="editor">
            <div className="editorInput">
                <textarea style={textAreaStyle} value={markdown} onChange={handelMarkdownText} className="editorInputArea"></textarea>
                <div onClick={handelCloseColorDiv} className="colorSelectionDiv">
                    <span>🎡 Settings</span>
                </div>
                {showcolorDiv && <ChangeColorComp changeSettings={handelsettingschange} hidediv={handelCloseColorDiv}/> }
            </div>
            <div className="editorOutput">
                <p>
                    <ReactMarkdown>
                        {markdown}
                    </ReactMarkdown>
                   
                </p>
                <small className="outputSmall">Created by Ratul Maity</small>
            </div>

        </div>
    )
}

export default Editor;