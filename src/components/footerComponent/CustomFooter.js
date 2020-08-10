import React, { Component } from 'react';
import './CustomFooter.css';
function Footer(props) {




    const { onClickForward, onClickBackward } = props;

    return (
        <footer className="custom-footer">
            <input
                type="button"
                className="add-button"
                value="<"
                onClick={console.log()}
            />
            <input
                type="button"
                className="add-button"
                value=">"
                onClick={console.log()}
            />
        </footer>
    );
}


export default Footer;