import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        maxHeight: '170px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        border: 'none',
        maxWidth: '400px',
        width: '90%',
        textAlign: 'center',
        color: 'black', // 텍스트 색상
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};

const confirmButtonStyles = { backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '4px', marginRight: '10px' }
const cancelButtonStyles = { backgroundColor: 'red', color: 'white', padding: '10px 20px', borderRadius: '4px' }

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Confirm Modal"
            appElement={document.getElementById('modal-root')}
        >
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{message}</h2>
            <button onClick={onConfirm} style={confirmButtonStyles}>확인</button>
            <button onClick={onClose} style={cancelButtonStyles}>취소</button>
        </Modal>
    );
};

export default ConfirmModal;
