import React from "react";
import "../App.css";

function ButtonComponent(props){
    return(
<div className="btn-container">
<button className="costum-btn">{props.text}</button>
</div>
    )
}
export default ButtonComponent