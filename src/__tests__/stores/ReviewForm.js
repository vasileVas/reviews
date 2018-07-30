import { ReviewsStore, ReviewForm } from '../../stores';

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

const reviewsStore = new ReviewsStore(mockData);

describe('ReviewForm', () => {
    let reviewForm;
    beforeEach(() => {
        reviewForm = new ReviewForm(reviewsStore);
    });
    it('should update name, text and score', () => {
        reviewForm.updateName('test name');
        reviewForm.updateText('test text');
        reviewForm.updateScore(3);
        expect(reviewForm.name).toBe('test name');
        expect(reviewForm.text).toBe('test text');
        expect(reviewForm.score).toBe(3);
    });
    it('should compute allowEdit', () => {
        expect(reviewForm.allowEdit).toBeFalsy();
        reviewForm.updateText('test text');
        reviewForm.updateScore(3);
        expect(reviewForm.allowEdit).toBe(true);
    });
    it('should return correct score label', () => {
        expect(reviewForm.scoreLabel).toBe('');
        reviewForm.updateScore(5);
        expect(reviewForm.scoreLabel).toBe('I loved it!');
        reviewForm.updateScore(3);
        expect(reviewForm.scoreLabel).toBe('It was OK!');
        reviewForm.updateScore(1);
        expect(reviewForm.scoreLabel).toBe('I hated it!');
    });
});
