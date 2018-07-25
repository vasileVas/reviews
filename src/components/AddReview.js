import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Rating from 'react-rating';
import styled from 'styled-components';
import { Avatar, StarEmpty, StarFull } from './icons';
import { GrayedSmallText, StyledAnchor } from '../styles';
import Modal from 'react-responsive-modal';

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
                <Modal
                    open={this.state.showModal}
                    onClose={this.onCloseModal}
                    center
                    styles={modalStyles}
                >
                    <ModalTitle>Thank you for your review</ModalTitle>
                    <GrayedSmallText>
                        You're helping others make smarter decisions every day.
                    </GrayedSmallText>
                    <hr />
                    <ModalButton onClick={this.onModalConfirm}>
                        Okay!
                    </ModalButton>
                </Modal>
            </AddReviewWrapper>
        );
    }
}

export default observer(AddReview);

const modalStyles = {
    overlay: {
        background: 'rgba(0, 0, 0, 0.5)'
    },
    closeButton: {
        display: 'none'
    },
    modal: {
        maxWidth: '230px',
        borderRadius: '10px',
        textAlign: 'center',
        padding: '0px'
    }
};

const ModalTitle = styled.h3`
    font-size: 14px;
    margin: 20px 0 5px;
`;

const ModalButton = styled(StyledAnchor)`
    padding-bottom: 10px;
    display: block;
`;

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
