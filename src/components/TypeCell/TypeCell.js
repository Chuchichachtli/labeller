import React from 'react';
import './TypeCell.css';

class TypeCell extends React.Component {

    render() {
        let circleStyle = {
            padding: "10px",
            margin: "auto",
            display: "block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            cursor: "pointer"
        };

        return (
            <div className='container'>

                <label className="form-component">Class Type</label>
                <input className="form-component" type="text" value={this.props.type} disabled />
                <br />
                <label className="form-component">Page Number</label>
                <input className="form-component" type="text" value={this.props.page} disabled />
                <br />
                <span className="form-component">{this.props.labelCount} docs labeled</span>
                <div style={circleStyle} onClick={() => { this.props.select(this.props.id, this.props.bgColor); }}>

                </div>
                {(this.props.id === this.props.currentId ? "Selected" : "")}


            </div>
        );
    }
}

export default TypeCell;