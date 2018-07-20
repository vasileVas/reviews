import { observable, computed, decorate, action } from 'mobx';

class ReviewForm {
    name = '';
    text = '';
    score = 1;
    createReview = score => {
        this.score = score;
        // window.location.pathname = '/add-review';
        window.history.pushState(null, null, '#/add-review');
    };
}

decorate(ReviewForm, {
    name: observable,
    text: observable,
    score: observable,
    createReview: action
});

export { ReviewForm };
