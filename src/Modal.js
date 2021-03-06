import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import softwareRes from "./pics/SoftwareEngineer-1.png"
import "./Modal.css"

const ResumeModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button id="modal-button" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Resume</ModalHeader>
        <ModalBody>
            <img src={softwareRes} id="img-modal" alt=""/>
        </ModalBody>
        <ModalFooter>
          <Button id="modal-button" onClick={toggle}>Close</Button>{' '}
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ResumeModal;