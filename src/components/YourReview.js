import React, { Fragment } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import Review from './Review';

export default ({
    reviewForm: {
        name = 'Anonym',
        text,
        company = 'hitta.se',
        score,
        timestamp = new Date().getTime()
    }
}) => (
    <Fragment>
        <YourReviewTitle>Your Review</YourReviewTitle>
        <Review
            username={name}
            text={text}
            company={company}
            timestamp={timestamp}
            score={score}
        />
    </Fragment>
);

const YourReviewTitle = styled.h3`
    margin: 15px 0 10px;
`;
