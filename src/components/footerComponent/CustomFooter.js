import React from 'react';
import './CustomFooter.css';
function Footer(props) {
    const { onClickForward, onClickBackward } = props;

    return (
        <footer className="custom-footer">
            <input
                type="button"
                className="add-button"
                value="<"
                onClick={() => { onClickBackward() }}
            />
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