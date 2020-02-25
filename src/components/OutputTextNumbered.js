import React, {useState} from 'react';
import OutputText from "./OutputText";

const OutputTextNumbered = (props) => {
    const [counter, setCounter] = useState(props.counter);
    const handleInputChange = (e) => setCounter(e.currentTarget.value);

    return (
        <>
            <OutputText
                // output block title
                title={<>
                    {props.title0}&nbsp;
                    <input
                        type="number"
                        value={counter}
                        onChange={handleInputChange}
                        className="repeat_letter_input"/>
                    &nbsp;{props.title1}
                </>}
                // output text
                value={props.action(props.input, counter)}
                // css class name construction
                name={props.name}
            />
        </>
    );
};

OutputTextNumbered.defaultProps = {
    counter: 2,
};

export default OutputTextNumbered;