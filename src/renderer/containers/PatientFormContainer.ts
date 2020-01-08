import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { PatientForm } from '../components/PatientForm';
import { RootState } from '../reducers';
import { PatientAction, updateName, updateAge, updateWeight } from '../actions/patientActions';

const mapStateToProps = (state: RootState) => ({
    name: state.patient.name,
    age: state.patient.age,
    weight: state.patient.weight
});

const mapDispatchToProps = (dispatch: Dispatch<PatientAction>) => ({
    updateName: (name: string) => dispatch(updateName(name)),
    updateAge: (age: number) => dispatch(updateAge(age)),
    updateWeight: (weight: number) => dispatch(updateWeight(weight))
});

export const PatientFormContainer = connect(mapStateToProps, mapDispatchToProps)(PatientForm);
