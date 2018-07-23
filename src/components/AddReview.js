import React from 'react';
import { observer } from 'mobx-react';
import Rating from 'react-rating';
import styled from 'styled-components';
import { Avatar, StarEmpty, StarFull } from './icons';
import { GrayedSmallText } from '../styles';

export default observer(
    ({
        reviewForm: {
            score,
            scoreLabel,
            updateScore,
            saveReview,
            updateName,
            updateText,
            errorMessage
        },
        history
    }) => {
        return (
            <AddReviewWrapper>
                <Header>
                    <a onClick={() => history.push('/')}>Close</a>
                    <span>Review COMPANY</span>
                    <a onClick={saveReview}>Save</a>
                </Header>
                <Rating
                    initialRating={score}
                    emptySymbol={<StarEmpty />}
                    fullSymbol={<StarFull />}
                    onChange={updateScore}
                />
                <GrayedSmallText>{scoreLabel}</GrayedSmallText>
                {errorMessage && (
                    <GrayedSmallText>{errorMessage}</GrayedSmallText>
                )}
                <ReviewerName placeholder="Your Name" onChange={updateName} />
                <ReviewerText
                    placeholder="Add more details on your experience ..."
                    onChange={updateText}
                />
            </AddReviewWrapper>
        );
    }
);

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
