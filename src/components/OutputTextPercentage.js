import React, {useState} from 'react';
import {getXPercent} from "../helpers/Helpers";
import OutputText from "./OutputText";

const OutputTextPercentage = (props) => {
    const [percentage, setPercentage] = useState(props.percentage);
    const handleInputChange = (e) => setPercentage(e.currentTarget.value);

    return (
        <>
            <OutputText
                // output block title
                title={<>
                    {props.title0}&nbsp;
                    <input
                        type="number"
                        value={percentage}
                        onChange={handleInputChange}
                        className="repeat_letter_input"
                    />
                    % of {props.title1}
                    ({Math.round(getXPercent(props.input.split(" ").length, percentage))}
                    &nbsp;{props.title2})
                </>}
                // output text
                value={props.action(props.input, percentage)}
                // css class name construction
                name={props.name}
            />
        </>
    );
};

OutputTextPercentage.defaultProps = {
    percentage: 10,
};

export default OutputTextPercentage;