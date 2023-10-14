import React from "react";

const Paragraph = ({ h1,para}) => {
    return (
        <div>
            <h1>{h1}</h1>
            <p>{para}</p>
            <hr />
        </div>
    );
};

export default Paragraph;