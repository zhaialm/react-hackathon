import React from 'react';
import './InfoModal.css';

const InfoModal = (props) => {
        console.log(props);
    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close-1">
                    <button onClick={props.handleCloseModalSecond}>&times;</button>
                </div>
                <h3>{props.infoDetails.name}</h3>
                <img className="img-render" src={props.infoDetails.image} />
                <h4>{props.infoDetails.description}</h4>
                {/* <div
                    // asd={props.infoDetails.img}
                    fgh={props.infoDetails.name}

                    jkl={props.infoDetails.description}
                /> */}
                
            </div>
        </div>
    );
};

export default InfoModal;