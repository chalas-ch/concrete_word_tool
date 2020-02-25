import React from 'react';
import OutputText from "./OutputText";

let perm = (xs) => {
    let ret = [];

    for (let i = 0; i < xs.length; i = i + 1) {
        let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

        if (!rest.length) {
            ret.push([xs[i]])
        } else {
            for (let j = 0; j < rest.length; j = j + 1) {
                ret.push([xs[i]].concat(rest[j]))
            }
        }
    }
    return ret;
};

let permutator = (string) => {
    let wordArray = string.split(" ");

    if (wordArray.length < 2) {
        return [string];
    } else if (wordArray.length < 8) {
        let permutations = perm(wordArray);

        for (let i = 0; i < permutations.length; i++) {
            permutations[i] = permutations[i].join(" ");
        }

        return permutations;
    } else {
        return ["Input text too long"];
    }
};

const WordsPermutation = (props) => {
    return (
        <>
            <OutputText
                title="Words Permutations (Limit: 7 words)"
                value={permutator(props.input).join("\n")}
                name="words_permutations"
            />
        </>
    );
};

export default WordsPermutation;