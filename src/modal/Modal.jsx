import React from 'react'

const Modal = ({ setOpen }) => {
    return (
        <div>
            <div className='header'>
                <button onClick={() => setOpen(!open)}>x</button>
            </div>
            <div className='body'>
                <p>are you sure you want to delete this item(s)</p>
            </div>
            <div className="footer">
                <button onClick={() => setOpen(!open)}>cancel</button>
                <button>delete</button>
            </div>
        </div>
    )
}

export default Modal