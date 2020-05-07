import React from 'react';
import ReactDOM from 'react-dom';

import { Modals, Button } from './styles'

const Modal = ({ isShowing, hide, confirm, Template }) => isShowing ? ReactDOM.createPortal(
  <Modals>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <Template/>
        <Button onClick={confirm.action}>
            OK
        </Button>
        <Button onClick={hide}>
            CANCEL
        </Button>
      </div>
    </div>
  </Modals>, document.body
) : null;

export default Modal;