import React from "react";

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <h4>{this.props.page}</h4>
               
            </div>
        )
    }
}