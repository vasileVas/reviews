import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Rating from 'react-rating';
import styled from 'styled-components';
import { StarEmpty, StarFull } from './icons';
import { GrayedSmallText, StyledAnchor } from '../styles';
import Modal from './Modal';

class AddReview extends Component {
    state = {
        showModal: false
    };
    saveReview = () => {
        this.props.reviewForm.saveReview();
        this.setState({ showModal: true });
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
    onCloseModal = () => {
        this.setState({ showModal: false });
    };
    onModalConfirm = () => {
        this.setState({ showModal: false });
        this.props.history.push('/');
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
                    <StyledAnchor
                        onClick={this.closeForm}
                        data-testid="close-btn"
                    >
                        Close
                    </StyledAnchor>
                    <span>Review Hitta</span>
                    <StyledAnchor
                        onClick={this.saveReview}
                        data-testid="save-btn"
                    >
                        Save
                    </StyledAnchor>
                </Header>
                <Rating
                    initialRating={score}
                    emptySymbol={<StarEmpty />}
                    fullSymbol={<StarFull />}
                    onChange={updateScore}
                    className="rating"
                />
                <ScoreText>{scoreLabel}</ScoreText>
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
                    defaultValue={text}
                    onChange={this.updateText}
                />
                <Modal
                    showModal={this.state.showModal}
                    onCloseModal={this.onCloseModal}
                    onModalConfirm={this.onModalConfirm}
                />
            </AddReviewWrapper>
        );
    }
}

export default observer(AddReview);

const ScoreText = styled(GrayedSmallText)`
    margin: 15px 0;
`;

const AddReviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .rating {
        padding-left: 25px;
    }
`;

const ReviewerName = styled.input`
    width: 100%;
    padding: 10px 0 10px 5px;
    border: none;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
`;

const ReviewerText = styled.textarea`
    padding-left: 5px;
    width: 100%;
    height: 60px;
    padding: 10px 0px;
    border: none;
    border-bottom: 1px solid #eee;
    resize: none;
    font-family: arial;
`;

const Header = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
    background-color: #00aef0;
    color: #ffffff;
    a {
        color: #fff;
    }
`;
