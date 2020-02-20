import React, { useState } from 'react';

const repeater = (str, repetitions) => {
    let newString = "";

    if (str === "")
        return "";
    else {
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < repetitions; j++) {
                newString = newString.concat(str[i]);
            }
        }
        return newString;
    }
};

const RepeatLetters = (props) => {
    const [repetitions, setRepetitions] = useState(2);
    const handleInputChange = (e) => setRepetitions(e.currentTarget.value);

    return (
        <>
            <div>Repeat Letters <input type="number" value={repetitions} onChange={handleInputChange} className="repeat_letter_input"/> Times</div>
            <textarea
                rows="10"
                cols="50"
                value={repeater(props.input, repetitions)}
                className="repeatLetters_textarea passive_textarea"
            >
			</textarea>
        </>
    );
};

export default RepeatLetters;