import { combineReducers } from 'redux';

import { PatientState, patientReducer } from './patientReducer';

export interface RootState {
    patient: PatientState;
}

export const rootReducer = combineReducers<RootState | undefined>({
    patient: patientReducer
});
