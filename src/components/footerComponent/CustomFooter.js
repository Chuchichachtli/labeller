import React from 'react';
import './CustomFooter.css';

function Footer(props) {
    const { onClickForward, onClickBackward, savedDocuments } = props;

    return (
        <footer className="custom-footer">
            <input
                type="button"
                className="add-button"
                value="<"
                onClick={() => { onClickBackward() }}
            />
            {savedDocuments ? 
            <input type="button"
                className="add-button"
                value="Delete Selected Labels"
                onClick={() => { console.log("Send Payload for Delete") }}
            />    
            :
            <input type="button"
                className="add-button"
                value="Save"
                onClick={() => { console.log("Send Payload for Save") }}
            />
            }
            <input
                type="button"
                className="add-button"
                value=">"
                onClick={() => { onClickForward() }}
            />
        </footer>
    );
}

export default Footer;