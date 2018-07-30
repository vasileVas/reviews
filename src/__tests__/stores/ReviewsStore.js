import { ReviewsStore } from '../../stores';

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
    },
    {
        id: 3,
        username: 'alex',
        company: 'hitta.se',
        score: 5,
        thumb: '',
        text: 'Test review text for second comment ...',
        timestamp: '1532322812093'
    },
    {
        id: 4,
        username: 'happy56',
        company: 'yelp.com',
        score: 2,
        thumb: '',
        text: 'Super good! Love the food!',
        timestamp: '1532412812093'
    }
];

describe('ReviewsStore', () => {
    let reviewsStore;
    beforeEach(() => {
        reviewsStore = new ReviewsStore(mockData);
    });
    it('should revert reviewsToDisplay', () => {
        const reviewsToDisplay = reviewsStore.reviewsToDisplay;
        expect(reviewsToDisplay[0].username).toBe('happy56');
    });
    it('should show latest reviews', () => {
        reviewsStore.showLatestReviews();
        const reviewsToDisplay = reviewsStore.reviewsToDisplay;
        expect(reviewsToDisplay.length).toBe(3);
    });
    it('should show all reviews', () => {
        reviewsStore.showAllReviews();
        const reviewsToDisplay = reviewsStore.reviewsToDisplay;
        expect(reviewsToDisplay.length).toBe(reviewsStore.totalReviews);
    });
    it('should compute totalScore', () => {
        expect(reviewsStore.totalScore).toBe('4.0');
        reviewsStore.reviews[0].score = 1;
        expect(reviewsStore.totalScore).toBe('3.3');
    });
});
