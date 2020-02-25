import React from "react";
import OutputText from "./OutputText";


const pyramidify = (str) => {
    let pyramidString = "";
    if (str === "") {
        pyramidString = "";
        return "";
    } else {
        for (let i = 0; i < str.length; i++) {
            pyramidString = pyramidString + str.slice(i) + "\n";
        }
        return pyramidString;
    }
};

const InvertedPyramid = (props) => {

    return (
        <>
			<OutputText
				title="Inverted Pyramid"
				value={pyramidify(props.input)}
				name="inverted_pyramid"
			/>
        </>
    );
};

export default InvertedPyramid;
