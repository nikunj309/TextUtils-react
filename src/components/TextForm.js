import React, { useState } from 'react'

export default function TextForm(props) {
  const handelUpClick = () => {
    // console.log("uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted in uppercase","success");
  }
  const handelLowClick = () => {

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted in lowercase","success");
  }
  const handelClearClick = () => {

    let newText = "";
    setText(newText);
    props.showAlert("cleared text","success");
  }
  const handelCopy = () => {

    let copyText = document.getElementById("myBox");


    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("copied text","success");
  }
  const handelOnChange = (event) => {
    // console.log("onChange");
    setText(event.target.value);
  }
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div className="container"style={ {color: props.mode === 'light' ? 'black' : 'white'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#080a50', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
            
          </div>
          <button className='btn btn-primary mx-1' onClick={handelUpClick}>convert To Uppercase</button>
          <button className='btn btn-primary mx-1' onClick={handelLowClick}>convert To Lowercase</button>
          <button className='btn btn-primary mx-1' onClick={handelClearClick}>Clear The Text</button>
          <button className='btn btn-primary mx-1' onClick={handelCopy}>CopyText</button>
        </div>

      </div>
      <div className='container my-3'style={ {color: props.mode === 'light' ? 'black' : 'white'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} Word And {text.length}Character</p>
        <p>{0.008 * text.split(" ").length}Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something to textbox above to seen preview"}</p>
      </div>
    </>
  )
}
