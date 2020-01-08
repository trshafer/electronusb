import { Reducer } from 'redux';

import { UPDATE_DEVICES, DevicesAction } from '../actions/devicesActions';
import * as USB from 'usb';

export interface DevicesState {
    readonly devices: ReadonlyArray<Readonly<USB.Device>>;
    readonly hasFetched: boolean;
}

const defaultState: DevicesState = {
    devices: [],
    hasFetched: false
};

export const devicesReducer: Reducer<DevicesState> = (
    state = defaultState,
    action: DevicesAction
) => {
    switch (action.type) {
        case UPDATE_DEVICES:
            return {
                ...state,
                hasFetched: true,
                devices: action.devices
            };
        default:
            return state;
    }
};
