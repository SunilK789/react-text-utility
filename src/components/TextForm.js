import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!", "success");
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!", "success");
  };
  const handleCopyTextClick = (event) => {
    let text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearText = (event) => {
    setText("");
  };

  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("String reversed!", "success");
  };

  const [text, setText] = useState("Enter text here");
  //const [btnDisabled, setBtnDisabled] = useState("disabled");

  return (
    <div>
      <div
        className="mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> {props.heading}</h1>
        <textarea
          onChange={handleOnChange}
          value={text}
          className="form-control"
          id="mybox"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <br></br>
        <button
          className={`btn btn-primary mx-1 ${
            text.length > 0 ? "" : "disabled"
          }`}
          onClick={handleUpClick}
        >
          Covert to Uppercase
        </button>
        <button
          className={`btn btn-primary mx-1 ${
            text.length > 0 ? "" : "disabled"
          }`}
          onClick={handleLowerClick}
        >
          Covert to Lowercase
        </button>
        <button
          className={`btn btn-primary mx-1 ${
            text.length > 0 ? "" : "disabled"
          }`}
          onClick={handleCopyTextClick}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-primary mx-1 ${
            text.length > 0 ? "" : "disabled"
          }`}
          onClick={handleReverseClick}
        >
          Reverse Text
        </button>
        <button
          className={`btn btn-primary mx-1 ${
            text.length > 0 ? "" : "disabled"
          }`}
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <h2>Your text summary</h2>
        <p>
          {text !== "" ? text.trim().split(" ").length : 0} words and{" "}
          {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Write something in the above textbox to preview here"}
        </p>
      </div>
    </div>
  );
}
