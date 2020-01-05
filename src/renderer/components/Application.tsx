import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import { PatientFormContainer } from '../containers/PatientFormContainer';
import { PatientGraphContainer } from '../containers/PatientGraphContainer';

require('./Application.scss');

const Application = () => (
    <div>
        Patient Form
        <div className="patient-details">
            <PatientFormContainer />
            <PatientGraphContainer />
        </div>
    </div>
);

export default hot(Application);
