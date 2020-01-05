import { Reducer } from 'redux';

import { UPDATE_NAME, UPDATE_WEIGHT, PatientAction } from '../actions/patientActions';

export interface PatientState {
    readonly name: string;
    readonly weight: number;
}

const defaultState: PatientState = {
    name: '',
    weight: 0
};

export const patientReducer: Reducer<PatientState> = (
    state = defaultState,
    action: PatientAction
) => {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.name
            };
        case UPDATE_WEIGHT:
            return {
                ...state,
                weight: action.weight
            };
        default:
            return state;
    }
};
