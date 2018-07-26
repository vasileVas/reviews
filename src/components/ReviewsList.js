import React from 'react';
import Review from './Review';
import styled from 'styled-components';

const LatestReviews = ({ reviews }) => {
    return (
        <ReviewsWrapper>
            <h2>Latest Reviews</h2>
            {reviews.map(review => <Review key={review.id} {...review} />)}
        </ReviewsWrapper>
    );
};

const ReviewsWrapper = styled.div`
    margin: 12px 0;
`;

export default LatestReviews;
