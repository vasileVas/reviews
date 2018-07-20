import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, HashRouter } from 'react-router-dom';
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
const reviewForm = new ReviewForm();

class App extends Component {
    renderReviewPage() {
        return <Reviews reviewsStore={reviewsStore} reviewForm={reviewForm} />;
    }
    renderAddReviewPage() {
        return <AddReview reviewForm={reviewForm} />;
    }
    render() {
        return (
            <HashRouter>
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
            </HashRouter>
        );
    }
}

export default App;
