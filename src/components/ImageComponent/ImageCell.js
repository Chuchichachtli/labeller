import React from 'react';
import './ImageCell.css';

const ImageCell = (props) => {
    
    const { colour, documentName, image, id, savedDocument, documentType } = props;
    const height = (savedDocument ? "370px" : "340px");   
    const divStyle = { borderColor: colour, height:height  }

    return (
       <>
        {image ? (
            <div className='document-container'
            style={divStyle}
            onClick={() => { props.labelClick(id, documentName) }}
        >
            
            <img src={image} className="document" alt={documentName} />
            <span className="document-name" style={{ color: colour }}>{documentName}</span> <br />
            {savedDocument ? <span>{documentType}</span> : null}
            </div>
        ) : null}
        
            </>
        );
            
    
}

export default ImageCell;