import React from "react";
import "../App.css";

class ImgComponent extends React.Component{
    render(){
        return(
          <img src={this.props.src} alt={this.props.alt} className="img-size"/>
        )
    }
        
    
}
export default ImgComponent