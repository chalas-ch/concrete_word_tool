import React, {useState} from 'react';

const getXPercent = (percentage, value) => {
    return (percentage / 100) * value;
};

const wordDeleter = (string, wordPercentage) => {
    let wordArray = string.trim().split(" ");
    let percent = getXPercent(wordPercentage, wordArray.length);

    for (let i = 0; i < Math.round(percent); i++) {
        wordArray.splice(Math.floor(Math.random()*wordArray.length), 1);
    }

    return wordArray.join(" ");
};

const DeleteWords = (props) => {
    const [wordPercentage, setWordPercentage] = useState(10);
    const handleInputChange = (e) => setWordPercentage(e.currentTarget.value);

    return (
        <>
            <div>
                Delete&nbsp;
                <input
                    type="number"
                    value={wordPercentage}
                    onChange={handleInputChange}
                    className="repeat_letter_input"
                />
                % of Words ({Math.round(getXPercent(props.input.split(" ").length, wordPercentage))} words)
            </div>
            <textarea
                rows="10"
                cols="50"
                value={wordDeleter(props.input, wordPercentage)}
                className="deleteWords_textarea passive_textarea"
            >
			</textarea>
        </>
    );
};

export default DeleteWords;