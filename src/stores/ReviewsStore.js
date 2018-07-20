import { observable, computed, decorate, action } from 'mobx';
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
}

decorate(ReviewsStore, {
    reviews: observable,
    viewAllReviews: observable,
    totalReviews: computed,
    showAllReviews: action,
    showLatestReviews: action
});

export { ReviewsStore };
