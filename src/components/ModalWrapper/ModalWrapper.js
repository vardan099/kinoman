import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import App from "../../App"

ReactModal.setAppElement(App);

const ModalWrapper = ({isOpen, closeCallback, videoKey}) => {
    return (
        <div  data-test="modalWrapperComponent">
            <ReactModal
                isOpen={isOpen}
            >
                <i className="fa fa-close modal-close-icon" onClick={closeCallback}/>
                <iframe className={'embed-video-iframe'} title={'trailer'} width="98%" height="98%"
                        src={`https://www.youtube.com/embed/${videoKey}`} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </ReactModal>
        </div>
    );
};

ModalWrapper.propTypes = {
    isOpen: PropTypes.bool,
    closeCallback: PropTypes.func,
    videoKey: PropTypes.string,
};

export default ModalWrapper;