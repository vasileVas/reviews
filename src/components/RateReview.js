import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Rating from 'react-rating';

import { Avatar, StarEmpty, StarFull } from './icons';
import { GrayedSmallText } from '../styles';

class RateReview extends Component {
    updateScore = score => {
        console.log(this.props);
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
    margin-top: 12px;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #eee;
    padding-bottom: 12px;

    svg.avatar {
        width: 56px;
    }
    div {
        margin-left: 10px;
    }
    h2 {
        font-size: 14px;
        margin: 0px 0 3px 0;
        height: 12px;
    }
    .rating {
        margin-top: 12px;
    }
`;
