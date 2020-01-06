import { connect } from 'react-redux';

import { Devices } from '../components/Devices';
import { RootState } from '../reducers';

const mapStateToProps = (state: RootState) => ({});

export const DevicesContainer = connect(mapStateToProps)(Devices);
