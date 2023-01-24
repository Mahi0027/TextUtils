import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text, setText] = useState('Enter text here');

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Converted to uppercase","success");
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Converted to lowercase","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const removeWhiteSpaces = () => {
        let newText = text.replace(/ /g, "");
        setText(newText);
        props.alert("Removed whitespace","success");
    }

    const copyTexy = () => {
        let copyText = document.getElementById('details');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.alert("text is copied","success");
    }

  return (
    <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>{ props.heading }</h1>
        <div className="mb-3">
            <textarea id="details" className="form-control" onChange={ handleOnChange } aria-label="With textarea" rows={10} value={ text } style={{ backgroundColor : props.mode === 'light'? '#f8f9fa' : '#182226', color: props.mode === 'light' ? 'black':'white' }}></textarea>
            <button disabled={text.length===0} className="btn btn-primary mt-3" onClick={ handleUpperCase }>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mt-3 mx-3" onClick={ handleLowerCase }>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mt-3 mx-3" onClick={ removeWhiteSpaces }>Remove Whitespaces</button>
            <button disabled={text.length===0} className="btn btn-primary mt-3 mx-3" onClick={ copyTexy }>Copy Clipboard</button>
        </div>
        <div className="container">
            <h1>Your Text Summery</h1>
            <p>{ text.split(/\s+/).filter((element)=>{return element.length !== 0}).length } words and { text.length } characters</p>
            <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length } minutes to read</p>
            <h2>Preview</h2>
            <p>{ text }</p>
        </div>
    </div>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'Heading'
}