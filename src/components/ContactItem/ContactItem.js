import React from 'react';
import styles from './ContactItem.module.scss';

function ContactItem({ name, link, img }) {
  return (
    <a
      className={styles.link}
      href={link}
      target='_blank'
    >
      <img
        src={img}
        alt='img'
      />
      <span>{name}</span>
    </a>
  );
}

export default ContactItem;
