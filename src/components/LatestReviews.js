import React from 'react';
import Review from './Review';
import styled from 'styled-components';

const LatestReviews = ({ reviews }) => {
    const latestReviews = reviews.slice(-3);
    return (
        <ReviewsWrapper>
            <h2>Latest Reviews</h2>
            {latestReviews.map(review => (
                <Review key={review.id} {...review} />
            ))}
        </ReviewsWrapper>
    );
};

const ReviewsWrapper = styled.div`
    h2 {
        font-size: 14px;
    }
`;

export default LatestReviews;
