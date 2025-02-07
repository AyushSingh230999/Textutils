import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log ("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted to uppercase", "success");
    }
    const handleLoClick =()=>{
        console.log ("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text converted to lowercase", "success");
    }
    const handleClearClick =()=>{
        console.log ("Clear Text was clicked");
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared", "success");
    }
    const handleCopy =()=>{
        console.log ("Copy Text was clicked");
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", "success");
    }
    const handleOnChange =(event)=>{
        console.log ("On Change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="mx-2 btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="mx-2 btn btn-primary" onClick={handleClearClick}>Clear Text</button>
            <button className="mx-2 btn btn-primary" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.lenght>0?text:"Enter Text"}</p>

        </div>
        </>
  )
}
