import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Rating from 'react-rating';
import styled from 'styled-components';
import { Avatar, StarEmpty, StarFull } from './icons';
import { GrayedSmallText } from '../styles';

class AddReview extends Component {
    saveReview = () => {
        this.props.reviewForm.saveReview();
        this.props.history.push('/');
    };
    closeForm = () => {
        this.props.history.push('/');
    };
    updateName = event => {
        this.props.reviewForm.updateName(event.currentTarget.value);
    };
    updateText = event => {
        this.props.reviewForm.updateText(event.currentTarget.value);
    };
    render() {
        const {
            reviewForm: {
                name,
                text,
                score,
                scoreLabel,
                updateScore,
                errorMessage
            }
        } = this.props;

        return (
            <AddReviewWrapper>
                <Header>
                    <a onClick={this.closeForm}>Close</a>
                    <span>Review COMPANY</span>
                    <a onClick={this.saveReview}>Save</a>
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
                <ReviewerName
                    placeholder="Your Name"
                    defaultValue={name}
                    onChange={this.updateName}
                />
                <ReviewerText
                    placeholder="Add more details on your experience ..."
                    onChange={this.updateText}
                />
            </AddReviewWrapper>
        );
    }
}

export default observer(AddReview);

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
