import React from 'react';

let permutator = (string) => {
    if (string.length < 2) {
        return [string];
    } else if (string.length < 8) {
        let permutations = []; // This array will hold our permutations

        for (let i = 0; i < string.length; i++) {
            let char = string[i];

            // Cause we don't want any duplicates:
            if (string.indexOf(char) !== i) // if char was used already
                continue; // skip it this time

            let remainingString = string.slice(0, i)
                + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

            for (let subPermutation of permutator(remainingString))
                permutations.push(char + subPermutation)
        }

        return permutations;
    } else {
        return ["Input text too long"];
    }
};

const LettersPermutations = (props) => {
    return (
        <>
            <div>Letters Permutations (Limit: 7 characters)</div>
            <textarea
                rows="10"
                cols="50"
                value={permutator(props.input).join("\n")}
                className="reverse_textarea passive_textarea"
            >
			</textarea>
        </>
    );
};

export default LettersPermutations;