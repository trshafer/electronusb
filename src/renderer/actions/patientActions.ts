import { Action, ActionCreator } from 'redux';

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_AGE = 'UPDATE_AGE';
export const UPDATE_WEIGHT = 'UPDATE_WEIGHT';

interface UpdateNameAction extends Action {
    readonly type: 'UPDATE_NAME';
    readonly name: string;
}
interface UpdateAgeAction extends Action {
    readonly type: 'UPDATE_AGE';
    readonly age: number;
}
interface UpdateWeightAction extends Action {
    readonly type: 'UPDATE_WEIGHT';
    readonly weight: number;
}

export const updateName: ActionCreator<UpdateNameAction> = (name: string) => ({
    name,
    type: UPDATE_NAME
});

export const updateAge: ActionCreator<UpdateAgeAction> = (age: number) => ({
    age,
    type: UPDATE_AGE
});

export const updateWeight: ActionCreator<UpdateWeightAction> = (weight: number) => ({
    weight,
    type: UPDATE_WEIGHT
});

export type PatientAction = UpdateNameAction | UpdateAgeAction | UpdateWeightAction;
