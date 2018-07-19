import React, { Component, Provider } from 'react';
import { observable, observe, computed, decorate } from 'mobx';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Reviews from './components/Reviews';
import AddReview from './components/AddReview';
import reviewsData from './data/reviews.json';
import styled from 'styled-components';

const AppWrapper = styled.div`
    border: 1px solid blue;
    margin: auto
    max-width: 300px;
    padding: 15px;
`;

class ReviewsStore {
    reviews = reviewsData;

    get totalReviews() {
        return this.reviews.length;
    }
    get totalScore() {
        const ratingsSum = this.reviews
            .map(r => r.score)
            .reduce((a, b) => a + b, 0);
        return parseFloat(ratingsSum / this.totalReviews).toFixed(1);
    }
}
decorate(ReviewsStore, {
    reviews: observable,
    totalReviews: computed
});

const store = new ReviewsStore();

console.log(store.reviews);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <AppWrapper>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={() => <Reviews store={store} />}
                        />
                        <Route path="/reviews" component={Reviews} />
                        <Route path="/add-review" component={AddReview} />
                    </Switch>
                </AppWrapper>
            </BrowserRouter>
        );
    }
}

export default App;
