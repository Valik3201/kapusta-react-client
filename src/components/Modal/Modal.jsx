import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import styles from './Modal.module.css';

function Modal ({ handleClickLeft, handleClickRight, onClose}) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown',handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.document.body.style.overflowY = 'visible';
    };
  });

  const handleKeyDown = e => {
    if(e.code === 'Escape') {
      onClose();
    } 
  };
  
  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();

    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

 return (

 );






}
export default Modal;