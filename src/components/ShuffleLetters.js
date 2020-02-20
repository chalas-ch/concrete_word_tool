import React from 'react';

const shuffler = (str) => {
    var a = str.split(""),
        n = a.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};

const ShuffleLetters = (props) => {
    return (
        <>
            <div>
                Shuffle Letters
            </div>
            <textarea
                rows="10"
                cols="50"
                value={shuffler(props.input)}
                className="shuffleLetters_textarea passive_textarea"
            >
			</textarea>
        </>
    );
};

export default ShuffleLetters;