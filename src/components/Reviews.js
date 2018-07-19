import React, { Fragment, Component } from 'react';
import styled from 'styled-components';

import RateReview from './RateReview';
import LatestReviews from './LatestReviews';
import { ColoredBox, StyledLink, GrayedSmallText } from '../styles';

class ReviewPage extends Component {
    render() {
        const { reviews, totalReviews, totalScore } = this.props.store;
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
                        <StyledLink to="/all-reviews">
                            View all reviews
                        </StyledLink>
                    </div>
                </Header>
                <RateReview />
                <LatestReviews reviews={reviews} />
                <Footer>
                    <StyledLink to="/all-reviews">View all reviews</StyledLink>
                </Footer>
            </Fragment>
        );
    }
}
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
