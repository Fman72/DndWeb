import React from 'react';
import {Modal} from 'react-bootstrap';

let StyledModal = (props) => {
    return (
      <Modal show = {props.show} onHide = {props.handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>
              {props.title}
            </Modal.Title>
              {props.headerContent}
          </Modal.Header>
          <Modal.Body>
            {props.children}
          </Modal.Body>
          <Modal.Footer>
            {props.footerContent}
          </Modal.Footer>
      </Modal>
    );
}


export default StyledModal;
