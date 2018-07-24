import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Reviews from './components/Reviews';
import AddReview from './components/AddReview';

import styled from 'styled-components';

import { ReviewsStore, ReviewForm } from './stores';

const AppWrapper = styled.div`
    border: 1px solid blue;
    margin: auto;
    max-width: 300px;
    padding: 15px;
`;

const reviewsStore = new ReviewsStore();
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
