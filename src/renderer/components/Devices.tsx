import * as React from 'react';

import * as USB from 'usb';
import { ListDevicesContainer } from '../containers/ListDevicesContainer';

interface Props {
    readonly hasFetched: boolean;
    readonly updateDevices: (devices: ReadonlyArray<Readonly<USB.Device>>) => void;
}

export class Devices extends React.Component<Props> {
    private readonly updateUSB = () => {
        this.props.updateDevices(USB.getDeviceList());
    };

    componentDidMount() {
        if (!this.props.hasFetched) {
            console.log('fetching devices');
            this.updateUSB();
            USB.on('attach', this.updateUSB);
            USB.on('detach', this.updateUSB);
        }
    }

    componentWillUnmount() {
        USB.removeListener('attach', this.updateUSB);
        USB.removeListener('detach', this.updateUSB);
    }

    render() {
        return (
            <div>
                <ListDevicesContainer />
            </div>
        );
    }
}

// export const Devices: React.FunctionComponent<Props> = ({ devices, updateDevices }) => (
// );
