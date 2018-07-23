import { observable, computed, decorate, action } from 'mobx';

class ReviewForm {
    name = '';
    text = '';
    score = 0;
    errorMessage = '';
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
        const { name, text, score } = this;
        if (score > 0 && text !== '' && name !== '') {
            return true;
        }
        return false;
    }
    saveReview = () => {
        console.log('aaaaa');
        if (!this.isFormValid) {
            this.errorMessage = 'Please add your name and a comment!';
            console.log('bbbbb', this.errorMessage);
            return;
        }
        console.log('OK');
        //save the review;
    };
}

decorate(ReviewForm, {
    name: observable,
    text: observable,
    score: observable,
    errorMessage: observable,
    updateScore: action,
    scoreLabel: computed,
    isFormValid: computed,
    saveReview: action
});

export { ReviewForm };
