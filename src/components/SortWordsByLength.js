import React, {useState} from 'react';

const wordSorter = (str, ascending) => {
    // split the string in chunks
    str = str.split(" ");
    console.log(ascending);

    // sorting
    str.sort(function (a, b) {
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        if (ascending === "1") {
            return a.length - b.length;
        } else {
            return b.length - a.length;
        }
    });
    return str.join(' ');
};

const SortLetters = (props) => {
    const [ascending, setAscending] = useState("0");
    const handleInputChange = (e) => setAscending(e.currentTarget.value);

    return (
        <>
            <div>
                Sort Words by length, order:&nbsp;
                <select onChange={handleInputChange} value={ascending}>
                    <option value={1}>Ascending</option>
                    <option value={0}>Descending</option>
                </select>
            </div>
            <textarea
                rows="10"
                cols="50"
                value={wordSorter(props.input, ascending)}
                className="passive_textarea"
            >
			</textarea>
        </>
    );
};

export default SortLetters;