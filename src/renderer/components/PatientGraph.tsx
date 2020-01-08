import * as React from 'react';

require('./PatientGraph.scss');

export interface Props {
    readonly name: string;
    readonly age: number;
    readonly weight: number;
}

export const PatientGraph: React.FunctionComponent<Props> = ({ name, age, weight }) => (
    <div className="patient-graph">
        <div>This is where the graph would go.</div>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Weight: {weight}</div>
    </div>
);
