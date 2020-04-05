import React from 'react';

import './CounterOutput.scss';

const counterOutput = (props:any) => (
    <div className="CounterOutput">
        Current Counter: {props.value}
    </div>
);

export default counterOutput;