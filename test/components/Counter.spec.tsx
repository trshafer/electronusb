import * as React from 'react';
import * as renderer from 'react-test-renderer';

import PatientForm from '../../src/renderer/components/PatientForm';

describe('Counter component', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Counter value={1} incrementValue={jest.fn()} decrementValue={jest.fn()} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
