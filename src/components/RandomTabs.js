import React from 'react';
import {getXPercent} from "../helpers/Helpers";
import OutputTextPercentage from "./OutputTextPercentage";

const randomTabulator = (string, tabPercentage) => {
    let wordArray = string.trim().split(" ");
    let percent = getXPercent(tabPercentage, wordArray.length);

    for (let i = 0; i < Math.round(percent); i++) {
        let randomIndex = Math.floor(Math.random() * wordArray.length);
        wordArray.splice(randomIndex, 0, "\t");
    }

    return wordArray.join(" ");
};

const RandomTabs = (props) => {

    return (
        <>
            <OutputTextPercentage
                name="random_tabs"
                action={randomTabulator}
                input={props.input}
                title0="Add"
                title1="of Randomly Placed Tabs"
                title2="tabs"
            />
        </>
    );
};

export default RandomTabs;