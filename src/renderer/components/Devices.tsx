import * as React from 'react';
import Table from 'react-bootstrap/Table';

import * as HID from 'node-hid';
import * as USB from 'usb';

export interface Props {}

const usbDevices = USB.getDeviceList();
const devices = HID.devices();

const createHIDDeviceRow: React.FunctionComponent<HID.Device> = (device, index) => (
    <tr key={index}>
        <td>{device.vendorId}</td>
        <td>{device.productId}</td>
        <td>{device.product}</td>
        <td>{device.manufacturer}</td>
        <td>{device.serialNumber}</td>
        <td>{device.path}</td>
    </tr>
);

const createUSBDeviceRow: React.FunctionComponent<USB.Device> = (device, index) => (
    <tr key={index}>
        <td>{device.busNumber}</td>
        <td>{device.deviceAddress}</td>
        <td>{device.portNumbers}</td>
        <td>{JSON.stringify(device.deviceDescriptor)}</td>
    </tr>
);

const USBDevices: React.FunctionComponent<Props> = () => (
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
            <tbody>{usbDevices.map(createUSBDeviceRow, this)}</tbody>
        </Table>
    </div>
);

const HIDDevices: React.FunctionComponent<Props> = () => (
    <div>
        <h2>HID Devices</h2>
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
            <tbody>{devices.map(createHIDDeviceRow, this)}</tbody>
        </Table>
    </div>
);

export const Devices: React.FunctionComponent<Props> = () => (
    <div>
        <HIDDevices />
        <USBDevices />
    </div>
);
