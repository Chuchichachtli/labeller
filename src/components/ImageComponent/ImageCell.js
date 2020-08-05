import React from 'react';
import './ImageCell.css';

const ImageCell = (props) => {
    
    const { color, documentName, image } = props;
       

        return (
            <div className='document-container' style={{ borderColor: color }}>
                 <img src={image} className="document" alt={documentName} />
                <span className="document-name" style={{color: color}}>{documentName}</span>

            </div>
        );
    
}

export default ImageCell;