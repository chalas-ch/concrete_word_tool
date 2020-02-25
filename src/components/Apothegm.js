import React from "react";
import OutputText from "./OutputText";

let apothegmString = "";

const Apothegmify = (str) => {
    if (str === "") {
        apothegmString = "";
        return "";
    } else {
        for (let i = 0; i < str.length; i++) {
            apothegmString = apothegmString + str.slice(i);
        }
        return apothegmString;
    }
};

const Apothegm = (props) => {

    return (
        <>
            <OutputText
                title="Apothegm"
                value={Apothegmify(props.input)}
                name="apothegm"
            />
        </>
    );
};

export default Apothegm;
