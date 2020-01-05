import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { PatientForm } from '../components/PatientForm';
import { RootState } from '../reducers';
import { PatientAction, updateName, updateWeight } from '../actions/patientActions';

const mapStateToProps = (state: RootState) => ({
    name: state.patient.name,
    weight: state.patient.weight
});

const mapDispatchToProps = (dispatch: Dispatch<PatientAction>) => ({
    updateName: () => dispatch(updateName()),
    updateWeight: () => dispatch(updateWeight())
});

export const PatientContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientForm);
