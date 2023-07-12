import React from 'react';
import './style.css';

function Modal({ dispatch }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Dear User</h4>
        </div>
        <div className="modal-body">
          <p>Please withdraw all your money before closing this account</p>
        </div>
        <div className="modal-footer">
          <button
            className="button"
            onClick={() => dispatch({ type: 'reactive' })}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
