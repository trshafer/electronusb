import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import { PatientContainer } from '../containers/PatientContainer';

const Application = () => (
    <div>
        Hello World from Electron!
        <PatientContainer />
    </div>
);

export default hot(Application);
