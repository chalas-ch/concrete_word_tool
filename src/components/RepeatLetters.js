import React from 'react';
import OutputTextNumbered from "./OutputTextNumbered";

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

    return (
        <>
            <OutputTextNumbered
                name="repeat_letters"
                input={props.input}
                action={repeater}
                title0="Repeat Letters"
                title1="Times"
            />
        </>
    );
};

export default RepeatLetters;