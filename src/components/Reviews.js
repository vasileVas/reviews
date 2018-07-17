import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
    font-size: 18px;
`;

const ReviewForm = () => (
    <div>
        <div>avatar</div>
        <div>
            <h2>Rate and review</h2>
            <h3>Share your experience to help others</h3>
            <p>star reviews</p>
        </div>
    </div>
);

const Review = () => (
    <div>
        <div>Avatar</div>
        <div>
            <h3>Anonym</h3>
            <div>
                <div>stars</div>
                <div>12h ago - hitta.se</div>
            </div>
            <div>Liked it a lot .... !!</div>
        </div>
    </div>
);

const LatestReviews = () => (
    <div>
        <h2>Latest Reviews</h2>
        <Review />
    </div>
);

export default () => (
    <Fragment>
        <header>
            <h1>Reviews</h1>
            <div>4.1</div>
            <div>from 27 ratings</div>
            <Link to="/all-reviews">View all reviews</Link>
        </header>
        <ReviewForm />
        <LatestReviews />
        <footer>
            <Link to="/all-reviews">View all reviews</Link>
        </footer>
    </Fragment>
);
