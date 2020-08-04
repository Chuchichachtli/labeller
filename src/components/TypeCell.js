import React from 'react';
import './TypeCell.css';

class DataType extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            checked: false
        }
    }
    render() {
        const { checked } = this.state;
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
                <input className="form-component" type="text" value={this.props.type} />
                <br />
                <label className="form-component">Page Number</label>
                <input className="form-component" type="text" value={this.props.page} />
                <br />
                <span className="form-component">{this.props.labelCount} docs labeled</span>
                <div style={circleStyle} onClick={() => { this.setState({checked: !checked }) }}>
                    
                    {/* <input type="checkbox" className="customcb"/> */}
                </div>
                {(checked ? "Selected" : "" ) }


            </div>
        );
    }
}

export default DataType;