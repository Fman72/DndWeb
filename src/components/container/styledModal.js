import React from 'react';
import {Modal} from 'react-bootstrap';
import {connect} from 'react-redux';

class StyledModal extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Modal show = {this.props.show} onHide = {this.props.handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalTitle}</Modal.Title>
              {this.props.headerContent}
          </Modal.Header>
          <Modal.Body>
            {this.props.bodyContent}
          </Modal.Body>
          <Modal.Footer>
            {this.props.footerContent}
          </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(null)(StyledModal);
