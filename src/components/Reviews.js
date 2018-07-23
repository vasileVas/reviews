import React, { Fragment, Component } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import RateReview from './RateReview';
import ReviewsList from './ReviewsList';
import DisplayReviewsLink from './DisplayReviewsLink';
import { ColoredBox, StyledAnchor, GrayedSmallText } from '../styles';

const ReviewPage = observer(
    ({
        reviewsStore: {
            reviews,
            totalReviews,
            totalScore,
            viewAllReviews,
            showAllReviews,
            showLatestReviews
        },
        reviewForm: { updateScore },
        history
    }) => {
        const reviewsToDisplay = viewAllReviews ? reviews : reviews.slice(-3);

        return (
            <Fragment>
                <Header>
                    <h1>Reviews</h1>
                    <div className="general-stats">
                        <div>
                            <ColoredBox>{totalScore}</ColoredBox>
                            <GrayedSmallText>
                                from {totalReviews}{' '}
                                {totalReviews === 1 ? 'rating' : 'ratings'}
                            </GrayedSmallText>
                        </div>
                        <DisplayReviewsLink
                            viewAllReviews={viewAllReviews}
                            showAllReviews={showAllReviews}
                            showLatestReviews={showLatestReviews}
                        />
                    </div>
                </Header>
                <RateReview
                    updateScore={score => {
                        updateScore(score);
                        history.push('/add-review');
                    }}
                />
                <ReviewsList reviews={reviewsToDisplay} />

                <Footer>
                    <DisplayReviewsLink
                        viewAllReviews={viewAllReviews}
                        showAllReviews={showAllReviews}
                        showLatestReviews={showLatestReviews}
                    />
                </Footer>
            </Fragment>
        );
    }
);
export default ReviewPage;

const Header = styled.header`
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    h1 {
        font-size: 18px;
    }
    span {
        padding: 7px 0 0 10px;
    }
    a {
        padding-top: 5px;
    }
    div.general-stats {
        display: flex;
        justify-content: space-between;
        div {
            display: flex;
            justify-content: flex-start;
        }
    }
`;

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;
