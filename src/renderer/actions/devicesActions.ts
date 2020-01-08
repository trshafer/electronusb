import { Action, ActionCreator } from 'redux';
import * as USB from 'usb';

export const UPDATE_DEVICES = 'UPDATE_DEVICES';

interface UpdateDevicesAction extends Action {
    readonly type: 'UPDATE_DEVICES';
    readonly devices: ReadonlyArray<Readonly<USB.Device>>;
}

function deviceSort(a: Readonly<USB.Device>, b: Readonly<USB.Device>): number {
    if (a.deviceAddress > b.deviceAddress) {
        return 1;
    }
    if (a.deviceAddress < b.deviceAddress) {
        return -1;
    }
    if (a.busNumber > b.busNumber) {
        return 1;
    }
    if (a.busNumber < b.busNumber) {
        return -1;
    }
    return 0;
}

function sortDevices(
    devices: ReadonlyArray<Readonly<USB.Device>>
): ReadonlyArray<Readonly<USB.Device>> {
    return [...devices].sort(deviceSort);
}

export const updateDevices: ActionCreator<UpdateDevicesAction> = (
    devices: ReadonlyArray<Readonly<USB.Device>>
) => ({
    devices: sortDevices(devices),
    type: UPDATE_DEVICES
});

export type DevicesAction = UpdateDevicesAction;
