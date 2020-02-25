import React from 'react';
import OutputTextPercentage from "./OutputTextPercentage";
import {getXPercent} from "../helpers/Helpers";

const wordDeleter = (string, wordPercentage) => {
    let wordArray = string.trim().split(" ");
    let percent = getXPercent(wordPercentage, wordArray.length);

    for (let i = 0; i < Math.round(percent); i++) {
        wordArray.splice(Math.floor(Math.random()*wordArray.length), 1);
    }

    return wordArray.join(" ");
};

const DeleteWords = (props) => {
    return (
        <>
            <OutputTextPercentage
                name="delete_words"
                action={wordDeleter}
                input={props.input}
                title0="Delete"
                title1="Words"
                title2="words"
            />
        </>
    );
};

export default DeleteWords;