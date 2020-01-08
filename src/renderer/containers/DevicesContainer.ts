import { connect } from 'react-redux';
import * as USB from 'usb';

import { Devices } from '../components/Devices';
import { RootState } from '../reducers';
import { DevicesAction, updateDevices } from '../actions/devicesActions';

const mapStateToProps = (state: RootState) => ({
    devices: state.usb.devices,
    hasFetched: state.usb.hasFetched
});

const mapDispatchToProps = (dispatch: Dispatch<DevicesAction>) => ({
    updateDevices: (devices: ReadonlyArray<Readonly<USB.Device>>) =>
        dispatch(updateDevices(devices))
});

export const DevicesContainer = connect(mapStateToProps, mapDispatchToProps)(Devices);
