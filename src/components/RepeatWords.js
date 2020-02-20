import React, {useState} from 'react';

const repeater = (str, repetitions) => {
    let wordsArray = str.split(' ');
    let newArr = [];

    if (str === "")
        return "";
    else {
        for (let i = 0; i < wordsArray.length; i++) {
            for (let j = 0; j < repetitions; j++) {
                newArr.push(wordsArray[i]);
            }
        }
        return newArr.join(" ");
    }
};

const RepeatLetters = (props) => {
    const [repetitions, setRepetitions] = useState(2);
    const handleInputChange = (e) => setRepetitions(e.currentTarget.value);

    return (
        <>
            <div>Repeat Words <input type="number" value={repetitions} onChange={handleInputChange}
                                     className="repeat_letter_input"/> Times
            </div>
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