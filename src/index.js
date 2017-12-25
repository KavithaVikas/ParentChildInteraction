import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import User from "./components/User";

export default class APP extends React.Component {
    constructor(props){
        super(props);
        this.state={
            status:"DefaultStatus"
        }
    }

    changeStatus(newName) {
        
        this.setState({
            status: newName
        })
    }
    
    
    render() {
        return (
            
            <div>
                Status: {this.state.status} 
                <Header page={this.state.status}/>
                <Home updateStatus={this.changeStatus.bind(this)}/>
                <User updateStatus={this.changeStatus.bind(this)}/>
            </div>
        )


    }
}

render(<APP />, document.getElementById("root"));
