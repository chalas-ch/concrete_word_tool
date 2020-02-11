import React, {Component} from "react";

// Information to reach API
const url = "https://api.datamuse.com/words";
const queryParams = "?sl=";

var myHeaders = new Headers();
var myInit = {
	method: "GET",
	headers: myHeaders,
	mode: "cors",
	cache: "default",
};

// AJAX function
const fetchWords = (wordQuery) => {
	const endpoint = `${url}${queryParams}${wordQuery}`;

	if (wordQuery !== "") {
		fetch(endpoint, myInit).then(response => {
			if (response.ok) {
				return response.json();
			}
			console.log("Request failed!");
		}, networkError => {
			console.log(networkError.message);
		}).then(jsonResponse => {
			console.log(JSON.stringify(jsonResponse));
			return JSON.stringify(jsonResponse);
		});
	}
};

class Datamuse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: props.input,
			content: "",
			time: Date.now()
		};

		//this.getSuggestions = this.getSuggestions.bind(this);
	}

	componentDidMount() {
		console.log(`component mounted ${this.state.time}`);
		//fetchWords(this.props.input);
		this.interval = setInterval(() => this.setState({content: fetchWords(this.props.input)}), 2000);
		console.log(`content : ${this.state.content}`);
	}

	componentWillUnmount() {
		console.log(`component unmounted ${this.state.time}`);
		clearInterval(this.interval);
	}

	render() {
		return (
			<>
				<div>Datamuse {this.state.time}</div>
				<textarea
					rows="10"
					cols="50"
					value={this.state.content}
					className="pyramid_textarea passive_textarea"
				>
			</textarea>
			</>
		);
	}
}


export default Datamuse;
