import React,{ Component } from "react";

class Button extends Component{
    constructor(){
        super();
        this.state={};
    }
    render(){
        return (
            <input type="submit" className="btn3" value={this.props.buttonName} />
        );
    }
}
export default Button;