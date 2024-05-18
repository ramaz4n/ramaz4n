import React from 'react';
import styles from './WorksItem.module.scss';

function WorksItem({ title, info, url, link, tech }) {
  return (
    <>
      <a
        href={link}
        target='_blank'
        className={styles.worksItem}
      >

        <img
          className={styles.worksItem__img}
          src={url}
          alt='#'
        />
        <div className={styles.worksItem__textWrap}>
          <h4 className={styles.worksItem__title}>{title}</h4>
          <p className={styles.worksItem__info}>{info}</p>
        </div>
        <p className={styles.worksItem__tech}>{tech}</p>
        
      </a>
    </>
  );
}

export default WorksItem;
