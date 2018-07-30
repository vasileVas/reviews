import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'react-responsive-modal';
import { GrayedSmallText, StyledAnchor } from '../styles';

class ReviewModal extends Component {
    render() {
        return (
            <Modal
                open={this.props.showModal}
                onClose={this.props.onCloseModal}
                center
                styles={modalStyles}
            >
                <ModalTitle>Thank you for your review</ModalTitle>
                <GrayedSmallText>
                    You're helping others make smarter decisions every day.
                </GrayedSmallText>
                <hr />
                <ModalButton onClick={this.props.onModalConfirm}>
                    Okay!
                </ModalButton>
            </Modal>
        );
    }
}

export default ReviewModal;

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
    font-size: 13px;
    margin: 20px 0 5px;
`;

const ModalButton = styled(StyledAnchor)`
    padding-bottom: 10px;
    display: block;
`;
