import React from 'react';
import Rating from 'react-rating';
import styled from 'styled-components';
import { Avatar, StarEmpty, StarFull } from './icons';

const Review = () => (
    <ReviewWrapper>
        <Avatar />
        <div>
            <h3>Anonym</h3>
            <ReviewerRating>
                <Rating emptySymbol={<StarEmpty />} fullSymbol={<StarFull />} />
                <div>12h ago - hitta.se</div>
            </ReviewerRating>
            <div>Liked it a lot .... !!</div>
        </div>
    </ReviewWrapper>
);

export default Review;

const ReviewWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const ReviewerRating = styled.div`
    display: flex;
    justify-content: flex-start;
`;
