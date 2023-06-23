import React from 'react';
import './modal.css'

const ModalWindow = () => {

    return (
        <div>
            <button className='open'><a href='#openModal' className='open-text'>Открыть модальное окно</a></button>
            <div id='openModal' className='modal'>
                <div className='modal-dialog'>
                    <div className='modal-body'>
                        <h2 className='remove'>Remove item?</h2>
                        <p className='common'>Are you sure want to remove this item from your cart?</p>
                        <a href='#close' title='Close' className='close' >
                            <button className='sure'><span className='sure-text'>Sure</span></button>
                        </a>
                        <a href='#close' title='Close' className='close' >
                            <button className='thanks'><span className='thanks-text'>No, thanks</span></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow