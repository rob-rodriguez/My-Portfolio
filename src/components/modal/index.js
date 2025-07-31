import * as styles from './modal.module.scss';
import React, { useState } from "react";
import Modal from 'react-modal';
import { motion } from 'motion/react';
import { XCircle } from 'react-feather';


Modal.setAppElement('#___gatsby');

export default function LightboxModal({ label, title, buttonClassName, contentLabel, children, ariaLabel }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    // document.body.classList.toggle('modaal-noscroll');
  };

  const closeModal = () => {
    setModalIsOpen(false);
    // document.body.classList.toggle('modaal-noscroll');
  };

  return (
    <>
      <motion.button
        onClick={openModal}
        className={buttonClassName}
        title={ariaLabel}
        aria-label={ariaLabel}
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.75
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.1,
        }}
      >
        {label}
      </motion.button>

      <Modal
        closeTimeoutMS={400}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={contentLabel}
        className={styles.modal}
        overlayClassName={styles.overlay}
        bodyOpenClassName='modaal-noscroll'
        shouldCloseOnOverlayClick={true}
      >
        {children}
        <motion.button
          onClick={closeModal}
          className={styles.closeButton}
          title="Close Modal"
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.75
          }}
          transition={{
            ease: 'easeInOut',
            duration: 0.1,
          }}
        >
          <XCircle size={18} /> Close
        </motion.button>
      </Modal>
    </>
  );
}