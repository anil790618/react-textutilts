import React,{useState} from 'react'

export default function TextArea(props) {
 const [text, settext] = useState("Enter Text Here")
  
 
  const handleOnchange=(event)=>{
    settext(event.target.value); 
  }
  const handleUpcase= ()=>{
    settext(text.toUpperCase());
    props.showAlert("Uppercase Converted","success");
  }
  const handlelocase= ()=>{
    settext(text.toLowerCase());
    props.showAlert("Lower Converted","success");
  }
const handleClcase=()=>{
  settext("")
  props.showAlert("Input box Cleared","success");
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  settext(newText.join(" "))
  props.showAlert("Extra Space Removed","success");
}
  return (
    <>
     <div className={`container my-5   text-${props.mode==="dark"?"light":"dark"}`}>
       <div className="row    ">
        <div className="col-10 m-auto       ">
             <div className="form-floating">
                <textarea   className={`form-control  text-${props.mode==="dark"?"light":"dark"}`} style={{height:'150px',backgroundColor:props.mode!=='light'?'grey':'white'}} onChange={handleOnchange}  id="inputTxt" value={text}></textarea> 
             </div>
        </div>
       </div>
       <div className="row  my-3">
        <div className="col-10 m-auto       ">
            <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary mx-2" type="button"  onClick={handleUpcase} disabled={text.length===0} >UpperCase</button>
                <button className="btn btn-success mx-2" type="button" onClick={handlelocase} disabled={text.length===0} >LoweCase</button> 
                <button className="btn btn-info mx-2" type="button"  disabled={text.length===0} >Copy</button>
                <button className="btn btn-secondary mx-2" type="button"  onClick={handleClcase} disabled={text.length===0} >Clear</button>
                <button className="btn btn-danger mx-2" type="button" onClick={handleExtraSpaces} disabled={text.length===0} >Remove WhiteSpace</button>
                {/* <button className="btn btn-primary mx-2" type="button">Remove ExtraDots</button> */}
            </div>
        </div>
       </div>
        <div className='row'>
          <h1>Preview</h1>
          <div className="d-flex  justify-content-between">
          <p>Total words: {text.length}</p>
          <p>Total characters: {text.split(" ").filter((element)=>{return element.length!=0}).length}</p>
          <p>Total time for Reading: {text.split(" ").filter((element)=>{return element.length!=0}).length*0.008}</p>
          </div>
 
          <textarea className="form-control"  style={{height:'150px'}}   value={text.length>0?text:"No Content to preview"}></textarea> 
        </div>

    </div>
    </>
  )
}
