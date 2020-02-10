import React from "react";

let cukeString = "";

const Cukeify = (str) => {
	if (str === "") {
		cukeString = "";
		return "";
	} else {
		for (let i = 0; i < str.length; i++) {
			cukeString = cukeString + str.slice(i);
		}
		return cukeString;
	}
};

const Cuke = (props) => {
	return (
		<>
			<div>Cuke</div>
			<textarea
				rows="10"
				cols="50"
				value={Cukeify(props.input)}
				className="pyramid_textarea"
			>
			</textarea>
		</>
	);
};

export default Cuke;
