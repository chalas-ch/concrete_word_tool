import React, {useState} from 'react';

const getXPercent = (percentage, value) => {
    return (percentage / 100) * value;
};

const wordEraser = (string, wordPercentage) => {
    let wordArray = string.trim().split(" ");
    let percent = getXPercent(wordPercentage, wordArray.length);

    for (let i = 0; i < Math.round(percent); i++) {
        let randomIndex = Math.floor(Math.random()*wordArray.length);
        wordArray[randomIndex] = " ".repeat(wordArray[randomIndex].length);
    }

    return wordArray.join(" ");
};

const InvisibleWords = (props) => {
    const [wordPercentage, setWordPercentage] = useState(10);
    const handleInputChange = (e) => setWordPercentage(e.currentTarget.value);

    return (
        <>
            <div>
                Make&nbsp;
                <input
                    type="number"
                    value={wordPercentage}
                    onChange={handleInputChange}
                    className="repeat_letter_input"
                />
                % of Words Invisible ({Math.round(getXPercent(props.input.split(" ").length, wordPercentage))} words)
            </div>
            <textarea
                rows="10"
                cols="50"
                value={wordEraser(props.input, wordPercentage)}
                className="deleteWords_textarea passive_textarea"
            >
			</textarea>
        </>
    );
};

export default InvisibleWords;