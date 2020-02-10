import React from "react";

const reverseString = (str) => {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
};

const ReverseFunction = (props) => {
    return (
        <>
            <div>Reverse</div>
			<textarea
                rows="10"
                cols="50"
                value={reverseString(props.input)}
                className="reverse_textarea"
            >
			</textarea>
        </>
    );
};

export default ReverseFunction;
