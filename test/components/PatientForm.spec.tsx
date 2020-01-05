import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { PatientForm } from '../../src/renderer/components/PatientForm';

describe('PatientForm component', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <PatientForm
                    name={'test'}
                    weight={100}
                    updateName={jest.fn()}
                    updateWeight={jest.fn()}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
