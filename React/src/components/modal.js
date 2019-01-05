import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class Trigger extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleHide() {
        this.setState({ show: false });
    }

    render() {
        return (
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.handleShow}>
                    Detaylı Bilgi
            </Button>

                <Modal
                    {...this.props}
                    show={this.state.show}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">
                            Modal heading
                </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Wrapped Text</h4>
                        <p>

                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </ButtonToolbar>
        );
    }
}

export default Trigger;