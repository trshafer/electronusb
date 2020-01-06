import * as React from 'react';
import Table from 'react-bootstrap/Table';
import * as HID from 'node-hid';

export interface Props {}

// const HID = require('node-hid');

const devices = HID.devices();
const createDeviceRow: React.FunctionComponent<HID.Device> = (device, index) => (
    <tr key={index}>
        <td>{device.vendorId}</td>
        <td>{device.productId}</td>
        <td>{device.product}</td>
        <td>{device.manufacturer}</td>
        <td>{device.serialNumber}</td>
        <td>{device.path}</td>
    </tr>
);

export const Devices: React.FunctionComponent<Props> = () => (
    <Table bordered={true} hover={true}>
        <thead>
            <tr>
                <th>VendorId</th>
                <th>ProductId</th>
                <th>Product</th>
                <th>Manufacturer</th>
                <th>SerialNumber</th>
                <th>Path</th>
            </tr>
        </thead>
        <tbody>{devices.map(createDeviceRow, this)}</tbody>
    </Table>
);
