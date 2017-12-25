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

    render() {
        return (
            <div>
                <button onClick={this.changeStatus.bind(this)}>Home Button </button>
            </div>
        )
    }
}

Home.propTypes={
    updateStatus:PropTypes.func
}