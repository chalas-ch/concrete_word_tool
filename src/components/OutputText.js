import React from 'react';

const OutputText = (props) => {
    return (
        <>
            <div>
                {props.title}
            </div>
            <textarea
                rows="10"
                cols="50"
                value={props.value}
                className={`${props.name}_textarea passive_textarea`}
            >
			</textarea>
        </>
    );
};

export default OutputText;