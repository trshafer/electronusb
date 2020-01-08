import { connect } from 'react-redux';

import { PatientGraph } from '../components/PatientGraph';
import { RootState } from '../reducers';

const mapStateToProps = (state: RootState) => ({
    name: state.patient.name,
    age: state.patient.age,
    weight: state.patient.weight
});

export const PatientGraphContainer = connect(mapStateToProps)(PatientGraph);
