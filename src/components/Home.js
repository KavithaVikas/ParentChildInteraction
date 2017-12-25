import React from "react";
import PropTypes from "prop-types";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "home"
        }
    }


    changeStatus(){
        this.props.updateStatus(this.state.status);
    }

    changeInput(event){
        this.setState({
            status:event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.status} onChange={(event)=>(this.changeInput(event))}/>
                <button onClick={this.changeStatus.bind(this)}>Home Button </button>
            </div>
        )
    }
}

Home.propTypes={
    updateStatus:PropTypes.func
}