import React from 'react';
import OutputTextNumbered from "./OutputTextNumbered";

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

const RepeatWords = (props) => {

    return (
        <>
            <OutputTextNumbered
                name="repeat_words"
                input={props.input}
                action={repeater}
                title0="Repeat Words"
                title1="Times"
            />
        </>
    );
};

export default RepeatWords;