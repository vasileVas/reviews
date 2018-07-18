import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import RateReview from './RateReview';
import LatestReviews from './LatestReviews';

export default () => (
    <ReviewsPage>
        <Header>
            <h1>Reviews</h1>
            <div className="general-stats">
                <div>
                    <div>4.1</div>
                    <div>from 27 ratings</div>
                </div>

                <Link to="/all-reviews">View all reviews</Link>
            </div>
        </Header>
        <RateReview />
        <LatestReviews />
        <Footer>
            <Link to="/all-reviews">View all reviews</Link>
        </Footer>
    </ReviewsPage>
);

const ReviewsPage = styled.div`
    a {
        text-decoration: none;
    }
`;

const Header = styled.header`
    h1 {
        font-size: 15px;
    }
    div.general-stats {
        display: flex;
        justify-content: space-between;
        div {
            display: flex;
            justify-content: flex-start;
        }
    }
`;

const Footer = styled.footer`
    display: flex;
    justify-content: center;
`;
