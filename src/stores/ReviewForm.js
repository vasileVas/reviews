import { observable, computed, decorate, action } from 'mobx';

class ReviewForm {
    name;
    text;
    score = 0;
    errorMessage = '';
    reviewsStore;

    constructor(reviewsStore) {
        this.reviewsStore = reviewsStore;
    }
    updateScore = score => {
        this.score = score;
        this.errorMessage = '';
    };
    updateName = name => {
        this.name = name;
    };
    updateText = text => {
        this.text = text;
    };
    get allowEdit() {
        const { text, score } = this;
        return text && score;
    }
    get scoreLabel() {
        switch (this.score) {
            case 5:
                return 'I loved it!';
            case 4:
                return 'I liked it!';
            case 3:
                return 'It was OK!';
            case 2:
                return 'I didn’t like it!';
            case 1:
                return 'I hated it!';
            default:
                return '';
        }
    }
    get isFormValid() {
        return !!this.score;
    }
    saveReview = () => {
        if (!this.isFormValid) {
            this.errorMessage = 'Please add your name and a comment!';
            return;
        }
        //save the review;
        // const { name, text, score } = this;
        // this.reviewsStore.addReview({ name, text, score });
    };
}

decorate(ReviewForm, {
    name: observable,
    text: observable,
    score: observable,
    errorMessage: observable,
    updateScore: action,
    updateName: action,
    updateText: action,
    allowEdit: computed,
    scoreLabel: computed,
    isFormValid: computed,
    saveReview: action
});

export { ReviewForm };
