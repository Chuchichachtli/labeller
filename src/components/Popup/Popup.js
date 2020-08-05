import React from 'react';
import './Popup.css';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPage: "",
            newType: ""
        }

    }

    handleChangeType = (e) => {
        this.setState({ newType : e.target.value });
    }
    
    handleChangePage = (e) => {
        this.setState({ newPage : e.target.value });
    }

    render() {
        const { addNewType } = this.props;
        const {newPage, newType} = this.state
        return (
            <div className='popup clearfix'>
                <div className="popup-header">
                    <h3 className=''>Add New Document Type</h3>
                    <input type="button" value="X" className="top-right close-button" onClick={this.props.closePopup}/>

                </div>

                <p>
                    <label className="popup-form">Document Type:</label>
                    <input className="popup-form popup-input" type="text" value={newType} onChange={this.handleChangeType} />
                </p>
                <p>
                    <label className="popup-form">Document Page:</label>
                    <input type="text" value={newPage} className="popup-form popup-input" onChange={this.handleChangePage} />
                </p>
                <input
                    type="button"
                    value="Save"
                    className="popup-button"
                    onClick={() => {
                        if (newPage !== "" && newType !== "") { this.props.addNewType(newType, newPage) }
                        this.setState({ newPage: "", newType: "" });
                        this.props.closePopup();
                    }}
                />

            </div>
        );
    }
}

export default Popup;