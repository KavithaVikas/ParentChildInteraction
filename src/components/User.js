import React from "react";

export default class User extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            status:"User"
        }
    }
    
    updateLink(){
        this.props.updateStatus(this.state.status);
    }
    render() {
        return (
            <div>
             <button onClick={this.updateLink.bind(this)}>User Button</button>
            </div>
        )
    }
}