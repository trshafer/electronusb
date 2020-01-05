import * as React from 'react';

require('./Counter.scss');

export interface Props {
    readonly name: string;
    readonly weight: number;

    readonly updateName: () => any;
    readonly updateWeight: () => any;
}

export const PatientForm: React.FunctionComponent<Props> = ({
    name,
    weight,
    updateName,
    updateWeight
}) => (
    <div className="patient-form">
        <p>Current name: {name}</p>
        <p>Current weight: {weight}</p>
        <p>
            <button onClick={updateName}>Increment</button>
            <button onClick={updateWeight}>Decrement</button>
        </p>
    </div>
);
