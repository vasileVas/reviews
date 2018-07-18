import React from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';

import { Avatar, StarEmpty, StarFull } from './icons';

const RateReview = () => (
    <RateReviewWrapper>
        <Avatar />
        <div>
            <h2>Rate and review</h2>
            <h3>Share your experience to help others</h3>
            <Rating emptySymbol={<StarEmpty />} fullSymbol={<StarFull />} />
        </div>
    </RateReviewWrapper>
);

export default RateReview;

const RateReviewWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;
