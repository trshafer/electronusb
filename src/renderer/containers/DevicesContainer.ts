import { connect } from 'react-redux';
import * as USB from 'usb';
import { Dispatch } from 'redux';

import { Devices } from '../components/Devices';
import { RootState } from '../reducers';
import { DevicesAction, updateDevices } from '../actions/devicesActions';

const mapStateToProps = (state: RootState) => ({
    hasFetched: state.usb.hasFetched
});

const mapDispatchToProps = (dispatch: Dispatch<DevicesAction>) => ({
    updateDevices: (devices: ReadonlyArray<Readonly<USB.Device>>) =>
        dispatch(updateDevices(devices))
});

export const DevicesContainer = connect(mapStateToProps, mapDispatchToProps)(Devices);
