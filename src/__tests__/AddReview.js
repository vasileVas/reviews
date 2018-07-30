import 'babel-polyfill';
import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import AddReview from '../components/AddReview';

const getComponent = (props = {}) => {
    const reviewForm = {
        name: 'name',
        text: 'text',
        score: 3,
        scoreLabel: 'scoreLabel',
        updateScore: jest.fn(),
        saveReview: jest.fn(),
        errorMessage: 'errorMessage',
        ...props
    };
    return <AddReview reviewForm={reviewForm} />;
};

describe('[AddReview] component', () => {
    it('renders correctly', () => {
        const { unmount, container, getByText } = render(getComponent());
        expect(getByText('Close')).toBeTruthy();
        expect(getByText('Save')).toBeTruthy();
        expect(getByText('errorMessage')).toBeTruthy();
        expect(container).toBeTruthy();
        unmount();
    });
    it('should call onSave nad onClose', () => {
        const saveReviewMock = jest.fn();
        const { unmount, getByTestId } = render(
            getComponent({ saveReview: saveReviewMock })
        );
        fireEvent(
            getByTestId('save-btn'),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true
            })
        );
        expect(saveReviewMock).toHaveBeenCalled();
        unmount();
    });
});
