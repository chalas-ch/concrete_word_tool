import React, {Component} from "react";
import Reverse from "./Reverse";
import Pyramid from "./Pyramid";
import Apothegm from "./Apothegm";
import ReversePyramid from "./InvertedPyramid";
import Datamuse from "./Datamuse";

//import PropTypes from 'prop-types';

class WordSmasher extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: ""
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
			<div>
				<br/>
				<textarea rows="10" cols="50"
                          value={this.state.input}
                          onChange={this.handleChange}
                          className="input_textarea"
						  placeholder="type here"
				/>
				<br/>
				<Reverse input={this.state.input}/>
				<Pyramid input={this.state.input}/>
				<ReversePyramid input={this.state.input}/>
                <Apothegm input={this.state.input}/>
                <Datamuse input={this.state.input}/>
			</div>
		);
	}
}

//WordSmasher.propTypes = {};

export default WordSmasher;