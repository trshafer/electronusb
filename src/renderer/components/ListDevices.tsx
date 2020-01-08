import Table from 'react-bootstrap/Table';
import * as React from 'react';

import * as USB from 'usb';

interface ListProps {
    readonly devices: ReadonlyArray<Readonly<USB.Device>>;
}

const createUSBDeviceRow: React.FunctionComponent<USB.Device> = (device, index) => (
    <tr key={index}>
        <td>{device.busNumber}</td>
        <td>{device.deviceAddress}</td>
        <td>{device.portNumbers}</td>
        <td>{JSON.stringify(device.deviceDescriptor)}</td>
    </tr>
);

export const ListDevices: React.FunctionComponent<ListProps> = ({ devices }) => (
    <div>
        <h2>USB Devices</h2>
        <Table bordered={true} hover={true}>
            <thead>
                <tr>
                    <th>BusNumber</th>
                    <th>DeviceAddress</th>
                    <th>PortNumbers</th>
                    <th>DeviceDescriptor</th>
                </tr>
            </thead>
            <tbody>{devices.map(createUSBDeviceRow, this)}</tbody>
        </Table>
    </div>
);
