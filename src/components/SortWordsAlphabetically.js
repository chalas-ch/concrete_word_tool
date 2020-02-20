import React, {useState} from 'react';

function case_insensitive_Asc(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
}
function case_insensitive_Desc(strA, strB) {
    return strB.toLowerCase().localeCompare(strA.toLowerCase());
}

const wordSorter = (str, ascending) => {
    // split the string in chunks
    str = str.split(" ");
    // sorting
    str = str.sort();
    if (ascending === "1") {
        str = str.sort(case_insensitive_Asc);
    }
    else {
        str = str.sort(case_insensitive_Desc);
    }
    return str.join(' ');
};

const SortLetters = (props) => {
    const [ascending, setAscending] = useState("1");
    const handleInputChange = (e) => setAscending(e.currentTarget.value);

    return (
        <>
            <div>
                Sort Words Alphabetically, order:&nbsp;
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