import React from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';

import { Avatar, StarEmpty, StarFull } from './icons';
import { GrayedSmallText } from '../styles';

const RateReview = ({ updateScore }) => (
    <RateReviewWrapper>
        <Avatar className="avatar" />
        <div>
            <h2>Rate and review</h2>
            <GrayedSmallText>
                Share your experience to help others
            </GrayedSmallText>
            <Rating
                onChange={updateScore}
                className="rating"
                emptySymbol={<StarEmpty />}
                fullSymbol={<StarFull />}
            />
        </div>
    </RateReviewWrapper>
);

export default RateReview;

const RateReviewWrapper = styled.div`
    svg.avatar {
        width: 56px;
    }
    div {
        margin-left: 10px;
    }
    h2 {
        font-size: 14px;
        margin: 4px 0 0 0;
        height: 12px;
    }
    .rating {
        margin-top: 12px;
    }
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #eee;
    padding-bottom: 12px;
`;
