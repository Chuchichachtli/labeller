import React from 'react';
import '../AddPopup/Popup.css';

function DeletePopup(props) {
    const { deleteFunc, closePopup } = props;

    return (
        <div className='popup clearfix'>
            <div className="popup-header">
                <h4 className=''>Delete Labels</h4>
                <input type="button" value="X" className="top-right close-button" onClick={closePopup} />

            </div>

            <p className="deletePrompt">Are you sure you want to delete "ALL" labels in this project?</p>
            <input
                type="button"
                value="Delete!"
                className="popup-button"
                onClick={deleteFunc}
            />

            <input
                type="button"
                value="Cancel"
                className="popup-button"
                onClick={closePopup}
            />
        </div>
    );
}

export default DeletePopup;