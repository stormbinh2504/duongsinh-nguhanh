import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./ModalContact.scss"
import InfoContact from './InfoContact/InfoContact'
import icon_close from "../../../assets/images/icon_close.png"

const ModalContact = ({ isOpen, toggle }) => {

    return (
        <Modal
            centered={true}
            isOpen={isOpen}
            backdrop={"static"}
            keyboard={false}
            toggle={toggle}
            className={"modal-contact"}
            autoFocus={false}
            fade={false}

        >
            <div className="header-modal">
                <div className="title-header"></div>
                <div className="btn-icon-close" onClick={() => toggle()}>
                    <div className="wrap-icon item-center">
                        <img src={icon_close} />
                    </div>
                </div>
            </div>
            <div className="body-modal">
                <div className="wrap-body">
                    <InfoContact />
                </div>
            </div>
        </Modal>
    )
}

export default ModalContact