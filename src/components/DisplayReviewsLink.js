import React from 'react';
import { StyledAnchor } from '../styles';

export default ({ viewAllReviews, showLatestReviews, showAllReviews }) => {
    const linkAction = viewAllReviews ? showLatestReviews : showAllReviews;
    const linkText = viewAllReviews
        ? 'View latest reviews'
        : 'View all reviews';
    return <StyledAnchor onClick={linkAction}>{linkText}</StyledAnchor>;
};
