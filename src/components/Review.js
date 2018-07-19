import React from 'react';
import Rating from 'react-rating';
import styled from 'styled-components';
import { Avatar, StarEmpty, StarFull } from './icons';
import { GrayedSmallText } from '../styles';

const Review = ({
    username,
    initialRating,
    text,
    company,
    timestamp,
    score
}) => (
    <ReviewWrapper>
        <Avatar className="avatar" />
        <div>
            <h3>{username}</h3>
            <ReviewerRating>
                <Rating
                    initialRating={score}
                    emptySymbol={<StarFull size="small" fill="#BBB" />}
                    fullSymbol={<StarFull size="small" />}
                />
                <ReviewTimestamp>
                    {timestamp} - {company}
                </ReviewTimestamp>
            </ReviewerRating>
            <Text>{text}</Text>
        </div>
    </ReviewWrapper>
);

export default Review;

const ReviewTimestamp = styled(GrayedSmallText)`
    margin-left: 10px;
`;

const Text = styled.div`
    margin-top: 10px;
    font-size: 14px;
    color: #444;
`;

const ReviewWrapper = styled.div`
    svg.avatar {
        width: 32px;
    }
    & > div {
        margin-left: 10px;
    }
    h3 {
        font-size: 13px;
        margin: 3px 0 0 0;
        height: 13px;
        color: #333;
    }

    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
`;

const ReviewerRating = styled.div`
    display: flex;
    justify-content: flex-start;
`;
