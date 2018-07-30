import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Reviews from './components/Reviews';
import AddReview from './components/AddReview';

import styled from 'styled-components';

import { ReviewsStore, ReviewForm } from './stores';

import reviewsData from './data/reviews.json';
const reviewsStore = new ReviewsStore(reviewsData);
const reviewForm = new ReviewForm(reviewsStore);

class App extends Component {
    renderReviewPage({ history }) {
        return (
            <Reviews
                reviewsStore={reviewsStore}
                reviewForm={reviewForm}
                history={history}
            />
        );
    }
    renderAddReviewPage({ history }) {
        return <AddReview reviewForm={reviewForm} history={history} />;
    }
    render() {
        return (
            <BrowserRouter>
                <AppWrapper>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={this.renderReviewPage}
                        />
                        <Route
                            path="/reviews"
                            component={this.renderReviewPage}
                        />
                        <Route
                            path="/add-review"
                            component={this.renderAddReviewPage}
                        />
                    </Switch>
                </AppWrapper>
            </BrowserRouter>
        );
    }
}

export default App;

const AppWrapper = styled.div`
    margin: auto;
    padding: 20px;
    h3,
    h2,
    div {
        font-size: 13px;
    }
    @media screen and (max-width: 320px) {
        width: 300px;
    }
    @media screen and (min-width: 500px) {
        max-width: 500px;
    }
`;
