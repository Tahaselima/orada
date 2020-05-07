import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const Styled = styled.div`
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .5;
  }
  
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }
  
  .modal {
    z-index: 100;
      background: #404040;
      position: relative;
      margin: 11.75rem auto;
      border-radius: 6px;
      max-width: 500px;
      padding: 2rem;
      border: 1px solid #FF6000;
  }
  
  .modal-header {
    display: flex;
    justify-content: flex-end;
  }
  
  .modal-close-button {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    background: transparent;
    color: #FFF;
    opacity: .3;
    cursor: pointer;
    border: none;
  }

  .template {
    color:white;
    text-align: center;
  }
`;

const Modal = ({ isShowing, hide, confirm, Template }) => isShowing ? ReactDOM.createPortal(
  <Styled>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <Template/>
        <button onClick={confirm.action}>
            OK
        </button>
        <button onClick={hide}>
            CANCEL
        </button>
      </div>
    </div>
  </Styled>, document.body
) : null;

export default Modal;