import React from 'react';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBan } from '@fortawesome/free-solid-svg-icons';
import './Modal.scss';


const Modal = ({ active, setActive, confirm, abort }) => {
  return (
    <div
      className={clsx(active && 'active', 'modal')}
      onClick={() => setActive(false)}
    >
      <div
        className={clsx(active && 'active', 'modal__content')}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__button" onClick={confirm}>
          <FontAwesomeIcon className="modal__icon modal__icon--confirm" icon={faCheckCircle} />
          <p className="modal__text">CONFIRM</p>
        </button>
        <button className="modal__button" onClick={abort}>
          <FontAwesomeIcon className="modal__icon modal__icon--abort" icon={faBan} />
          <p className="modal__text">ABORT</p>
        </button>
      </div>
    </div>
  );
};

export default Modal;
