import * as React from 'react';

require('./PatientForm.scss');

export interface Props {
    readonly name: string;
    readonly weight: number;

    readonly updateName: (name: string) => any;
    readonly updateWeight: (weight: number) => any;
}

export class PatientForm extends React.Component<Props> {
    readonly updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.updateName(event.target.value);
    };

    readonly updateWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.updateWeight(Number(event.target.value));
    };

    render() {
        return (
            <div className="patient-form">
                <div>Patient Form</div>
                <div>
                    <label>Name: </label>
                    <input type="text" value={this.props.name} onChange={this.updateName} />
                </div>
                <div>
                    <label>Weight: </label>
                    <input type="number" value={this.props.weight} onChange={this.updateWeight} />
                </div>
            </div>
        );
    }
}
