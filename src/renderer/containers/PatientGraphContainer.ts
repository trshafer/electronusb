import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { PatientGraph } from '../components/PatientGraph';
import { RootState } from '../reducers';

const mapStateToProps = (state: RootState) => ({
    name: state.patient.name,
    weight: state.patient.weight
});

export const PatientGraphContainer = connect(mapStateToProps)(PatientGraph);
