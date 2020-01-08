import { combineReducers } from 'redux';

import { PatientState, patientReducer } from './patientReducer';

export interface RootState {
    readonly patient: PatientState;
}

export const rootReducer = combineReducers<RootState | undefined>({
    patient: patientReducer
});
