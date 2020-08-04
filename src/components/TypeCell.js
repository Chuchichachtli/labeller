import React from 'react';
import './TypeCell.css';

class DataType extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let circleStyle = {
            padding: "10px",
            margin: "auto",
            display: "block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: "25px",
            height: "25px",
        };
        return (
            <div className='container'>

                <label className="form-component">Class Type</label>
                <input className="form-component" type="text" value={this.props.type} />
                <br />
                <label className="form-component">Page Number</label>
                <input className="form-component" type="text" value={this.props.page} />
                <br />
                <span className="form-component">{this.props.labelCount} docs labeled</span>
                <div style={circleStyle}><input type="checkbox" className="customcb"/></div>

            </div>
        );
    }
}

export default DataType;