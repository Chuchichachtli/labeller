import React from 'react';
import './ImageCell.css';

const ImageCell = (props) => {
    
    const { colour, documentName, image, id } = props;
       

        return (
            <div className='document-container' style={{ borderColor: colour }} onClick={() => {props.labelClick(id, documentName) }}>
                 <img src={image} className="document" alt={documentName} />
                <span className="document-name" style={{color: colour}}>{documentName}</span>
            </div>
        );
    
}

export default ImageCell;