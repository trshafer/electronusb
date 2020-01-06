import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { PatientFormContainer } from '../containers/PatientFormContainer';
import { PatientGraphContainer } from '../containers/PatientGraphContainer';
import { DevicesContainer } from '../containers/DevicesContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

const Application = () => (
    <Container>
        <Row>Patient Form and USB Devices</Row>
        <Row>
            <Col>
                <PatientFormContainer />
            </Col>
            <Col>
                <PatientGraphContainer />
            </Col>
        </Row>
        <Row>
            <DevicesContainer />
        </Row>
    </Container>
);

export default hot(Application);
