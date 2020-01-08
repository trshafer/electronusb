import { combineReducers } from 'redux';

import { PatientState, patientReducer } from './patientReducer';
import { DevicesState, devicesReducer } from './devicesReducer';

export interface RootState {
    readonly patient: PatientState;
    readonly usb: DevicesState;
}

export const rootReducer = combineReducers<RootState | undefined>({
    patient: patientReducer,
    usb: devicesReducer
});
