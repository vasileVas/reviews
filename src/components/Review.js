import React from 'react';
import Rating from 'react-rating';
import styled from 'styled-components';
import { format, distanceInWords } from 'date-fns';
import { Avatar, StarEmpty, StarFull } from './icons';
import { GrayedSmallText, StyledLink } from '../styles';

const Review = ({ username, text, company, timestamp, score }) => {
    const reviewDateString = distanceInWords(+timestamp, new Date().getTime());
    return (
        <ReviewWrapper>
            <Avatar className="avatar" />
            <div>
                <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <h3>{username}</h3>
                    <a>...</a>
                </div>
                <ReviewerRating>
                    <Rating
                        initialRating={score}
                        emptySymbol={<StarFull size="small" fill="#BBB" />}
                        fullSymbol={<StarFull size="small" />}
                        readonly
                    />
                    <ReviewTimestamp>
                        {reviewDateString} - {company}
                    </ReviewTimestamp>
                </ReviewerRating>
                {!!text ? (
                    <Text>{text}</Text>
                ) : (
                    <StyledLink to="/add-review">
                        Describe your experience
                    </StyledLink>
                )}
            </div>
        </ReviewWrapper>
    );
};

export default Review;

const ReviewTimestamp = styled(GrayedSmallText)`
    margin-left: 10px;
`;

const Text = styled.div`
    margin-top: 5px;
    color: #444;
`;

const ReviewWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;

    svg.avatar {
        width: 32px;
    }
    & > div {
        margin-left: 10px;
        width: 100%;
    }
    h3 {
        margin: 0 0 3px 0;
        height: 13px;
        color: #333;
    }
`;

const ReviewerRating = styled.div`
    display: flex;
    justify-content: flex-start;
`;
