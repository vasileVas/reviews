import 'babel-polyfill';
import * as React from 'react';
import { render, Simulate } from 'react-testing-library';
import Review from '../../components/Review';

const getComponent = (props = {}) => (
    <Review
        username="username"
        text="text"
        company="company"
        timestamp="timestamp"
        score={0}
        allowEdit={false}
        {...props}
    />
);

describe('[Review] component', () => {
    it('renders correctly', () => {
        const { unmount, container } = render(getComponent());
        expect(container).toBeTruthy();
        unmount();
    });
});
