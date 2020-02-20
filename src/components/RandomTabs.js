import React, {useState} from 'react';

const getXPercent = (percentage, value) => {
    return (percentage / 100) * value;
};

const randomTabulator = (string, tabPercentage) => {
    let wordArray = string.trim().split(" ");
    let percent = getXPercent(tabPercentage, wordArray.length);

    for (let i = 0; i < Math.round(percent); i++) {
        let randomIndex = Math.floor(Math.random()*wordArray.length);
        wordArray.splice(randomIndex, 0, "\t");
    }

    return wordArray.join(" ");
};

const RandomTabs = (props) => {
    const [tabPercentage, setTabPercentage] = useState(10);
    const handleInputChange = (e) => setTabPercentage(e.currentTarget.value);

    return (
        <>
            <div>
                Add&nbsp;
                <input
                    type="number"
                    value={tabPercentage}
                    onChange={handleInputChange}
                    className="repeat_letter_input"
                />
                % of Randomly Placed Tabs ({Math.round(getXPercent(props.input.split(" ").length, tabPercentage))} tabs)
            </div>
            <textarea
                rows="10"
                cols="50"
                value={randomTabulator(props.input, tabPercentage)}
                className="reverse_textarea passive_textarea"
            >
			</textarea>
        </>
    );
};

export default RandomTabs;