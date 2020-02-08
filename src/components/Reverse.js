import React, {Component} from 'react';

function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}

class Reverse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: props.input
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    render() {
        return (
            <>
                <textarea rows="10" cols="50" value={reverseString(this.props.input)}></textarea>
            </>
        );
    }
}

export default Reverse;