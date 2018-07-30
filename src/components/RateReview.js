import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Rating from 'react-rating';

import { Avatar, StarEmpty, StarFull } from './icons';
import { GrayedSmallText } from '../styles';

class RateReview extends Component {
    updateScore = score => {
        this.props.reviewForm.updateScore(score);
        this.props.history.push('/add-review');
    };

    render() {
        return (
            <RateReviewWrapper>
                <Avatar className="avatar" />
                <div>
                    <h2>Rate and review</h2>
                    <GrayedSmallText>
                        Share your experience to help others
                    </GrayedSmallText>
                    <Rating
                        onChange={this.updateScore}
                        className="rating"
                        emptySymbol={<StarEmpty />}
                        fullSymbol={<StarFull />}
                    />
                </div>
            </RateReviewWrapper>
        );
    }
}

export default observer(RateReview);

const RateReviewWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 12px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;

    svg.avatar {
        width: 32px;
    }
    & > div {
        margin-left: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    h2 {
        margin: 0 0 3px 0;
        height: 13px;
        color: #333;
    }
    & .rating {
        margin-top: 10px;
    }
`;
