import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { PatientGraph } from '../../src/renderer/components/PatientGraph';

describe('PatientGraph component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<PatientGraph name={'test'} weight={100} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
