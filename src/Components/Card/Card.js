import styles from './Card.module.css';
import React from 'react';

//Card wrapper with minimal CSS.
const Card = props => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div >
  )
}

export default Card;