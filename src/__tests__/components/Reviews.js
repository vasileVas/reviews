import 'babel-polyfill';
import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Reviews from '../../components/Reviews';
import { ReviewForm, ReviewsStore } from '../../stores';

const mockData = [
    {
        id: 1,
        username: 'radu',
        company: 'hitta.se',
        score: 4,
        thumb: '',
        text: 'Ok, at first I was impressed by the ...',
        timestamp: '1532122812093'
    },
    {
        id: 2,
        username: 'diana',
        company: 'hitta.se',
        score: 5,
        thumb: '',
        text: 'Test review text for second comment ...',
        timestamp: '1532222812093'
    }
];

const getComponent = (reviewsStore, reviewForm, history = {}) => {
    return (
        <Reviews
            reviewForm={reviewForm}
            reviewsStore={reviewsStore}
            history={history}
        />
    );
};

describe('[Reviews]', () => {
    let reviewsStore;
    let reviewForm;
    beforeEach(() => {
        reviewsStore = new ReviewsStore(mockData);
        reviewForm = new ReviewForm(reviewsStore);
    });
    it('should render correctly', () => {
        const { container, unmount, getByText } = render(
            getComponent(reviewsStore, reviewForm)
        );
        expect(container).toBeTruthy();
        expect(getByText('Reviews')).toBeTruthy();
        expect(getByText('Rate and review')).toBeTruthy();
        unmount();
    });
    it('should toggle latest / all reviews', () => {
        const { getByTestId, unmount, debug, getByText } = render(
            getComponent(reviewsStore, reviewForm)
        );
        expect(getByText('View all reviews')).toBeTruthy();
        reviewsStore.showAllReviews();
        expect(getByText('View latest reviews')).toBeTruthy();
        unmount();
    });
    it('should display from total ratings', () => {
        const { getByTestId, unmount, debug, getByText } = render(
            getComponent(reviewsStore, reviewForm)
        );
        expect(getByText('from 2 ratings')).toBeTruthy();
    });
});
