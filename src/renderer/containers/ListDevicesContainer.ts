import { connect } from 'react-redux';

import { ListDevices } from '../components/ListDevices';
import { RootState } from '../reducers';

const mapStateToProps = (state: RootState) => ({
    devices: state.usb.devices
});

export const ListDevicesContainer = connect(mapStateToProps)(ListDevices);
