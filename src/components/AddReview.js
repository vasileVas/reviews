import React from 'react';
import { observer } from 'mobx-react';
import Rating from 'react-rating';
import styled from 'styled-components';
import { Avatar, StarEmpty, StarFull } from './icons';
import { GrayedSmallText } from '../styles';

export default observer(({ reviewForm }) => {
    const score = reviewForm.score;
    console.log(reviewForm);
    return (
        <AddReviewWrapper>
            <Header>
                <a>Close</a>
                <span>Review COMPANY</span>
                <a>Save</a>
            </Header>
            <Rating
                initialRating={score}
                emptySymbol={<StarEmpty />}
                fullSymbol={<StarFull />}
            />
            <GrayedSmallText>I love it</GrayedSmallText>
            <ReviewerName placeholder="Your Name" />
            <ReviewerText placeholder="Add more details on your experience ..." />
        </AddReviewWrapper>
    );
});

const AddReviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ReviewerName = styled.input`
    border: none;
    width: 100%;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0px;
`;

const ReviewerText = styled.textarea`
    border: none;
    width: 100%;
    border-bottom: 1px solid #eee;
    height: 60px;
    font-size: 12px;
    padding: 10px 0px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;
