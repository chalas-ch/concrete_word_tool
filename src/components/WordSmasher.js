import React, {Component} from 'react';
import Reverse from "./Reverse";

//import PropTypes from 'prop-types';

class WordSmasher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            submit: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            submit: this.state.input
        });
    }

    render() {
        return (
            <div>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <textarea  rows="10" cols="50"
                        value={this.state.input}
                        onChange={this.handleChange} />
                </form>
                <br/>
                {/*<textarea rows="10" cols="50" value={reverseString(this.state.input)}></textarea>*/}
                <Reverse input={this.state.input}/>
            </div>
        );
    }
}

//WordSmasher.propTypes = {};

export default WordSmasher;