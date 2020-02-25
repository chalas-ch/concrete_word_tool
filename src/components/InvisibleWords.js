import React from 'react';
import OutputTextPercentage from "./OutputTextPercentage";
import {getXPercent} from "../helpers/Helpers";

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

    return (
        <>
            <OutputTextPercentage
                name="invisible_words"
                action={wordEraser}
                input={props.input}
                title0="Make"
                title1="of Words Invisible"
                title2="words"
            />
        </>
    );
};

export default InvisibleWords;