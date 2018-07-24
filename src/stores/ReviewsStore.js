import {
    observable,
    computed,
    decorate,
    action,
    toJS,
    isObservableObject
} from 'mobx';
import reviewsData from '../data/reviews.json';

class ReviewsStore {
    reviews = reviewsData;
    viewAllReviews = false;

    get totalReviews() {
        return this.reviews.length;
    }
    get totalScore() {
        const ratingsSum = this.reviews
            .map(r => r.score)
            .reduce((a, b) => a + b, 0);
        return parseFloat(ratingsSum / this.totalReviews).toFixed(1);
    }
    showAllReviews = () => {
        this.viewAllReviews = true;
    };
    showLatestReviews = () => {
        this.viewAllReviews = false;
    };
    addReview({ name, text, score }) {
        this.reviews[this.totalReviews] = {
            id: Date.now(),
            username: name,
            company: 'hitta.se',
            score,
            thumb: '',
            text,
            timestamp: Date.now()
        };
    }
}

decorate(ReviewsStore, {
    reviews: observable,
    viewAllReviews: observable,
    totalReviews: computed,
    showAllReviews: action,
    showLatestReviews: action,
    addReview: action
});

export { ReviewsStore };
