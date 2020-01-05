import * as React from 'react';

require('./PatientGraph.scss');

export interface Props {
    readonly name: string;
    readonly weight: number;
}

export const PatientGraph: React.FunctionComponent<Props> = ({ name, weight }) => (
    <div className="patient-graph">
        <div>This is where the graph would go.</div>
        <div>Name: {name}</div>
        <div>Weight: {weight}</div>
    </div>
);
