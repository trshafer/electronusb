import { Action, ActionCreator } from 'redux';

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_WEIGHT = 'UPDATE_WEIGHT';

export interface UpdateNameAction extends Action {
    readonly type: 'UPDATE_NAME';
    readonly name: string;
}
export interface UpdateWeightAction extends Action {
    readonly type: 'UPDATE_WEIGHT';
    readonly weight: number;
}

export const updateName: ActionCreator<UpdateNameAction> = (name: string) => ({
    name,
    type: UPDATE_NAME
});

export const updateWeight: ActionCreator<UpdateWeightAction> = (weight: number) => ({
    weight,
    type: UPDATE_WEIGHT
});

export type PatientAction = UpdateNameAction | UpdateWeightAction;
