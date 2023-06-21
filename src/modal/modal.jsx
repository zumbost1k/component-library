import React, { useState } from 'react';
import Modal from 'react-modal';
import './modal.css'

const ModalWindow = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const modalContent = (
        <div className='container'>
            <h2 className='remove'>Remove item?</h2>
            <p className='common'>Are you sure want to remove this item from your cart?</p>
            <button className='sure' onClick={closeModal}><span className='sure-text'>Sure</span></button>
            <button className='thanks' onClick={closeModal}><span className='thanks-text'>No, thanks</span></button>
        </div>
    );
    return (
        <div>
            <button onClick={openModal}>open modal window</button>
            <Modal className='modal-window' isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
            </Modal>
        </div>
    );



}

export default ModalWindow