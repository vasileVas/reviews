import React, { Fragment } from 'react';
import styled from 'styled-components';
import Review from './Review';

export default ({
    reviewForm: {
        name,
        text,
        company = 'hitta.se',
        score,
        allowEdit,
        timestamp = new Date().getTime()
    }
}) => (
    <Fragment>
        <YourReviewTitle>Your Review</YourReviewTitle>
        <Review
            username={name || 'Anonymous'}
            text={text}
            company={company}
            timestamp={timestamp}
            score={score}
            allowEdit={allowEdit}
        />
    </Fragment>
);

const YourReviewTitle = styled.h3`
    margin: 15px 0 10px;
`;
