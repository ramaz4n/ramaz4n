import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from './Menu.module.scss';

import { ReactComponent as HomeImg } from '../../Images/home.svg';
import { ReactComponent as Hand } from '../../Images/hand.svg';
import { ReactComponent as Tel } from '../../Images/tel.svg';

function Menu(props) {
  const { pathname } = useLocation();

  return (
    <ul className={styles.menu}>
      <li>
        <Link
          className={
            pathname == '/'
              ? styles.menu__item + ' ' + styles.active
              : styles.menu__item
          }
          to='/'
        >
          <HomeImg
            className={
              pathname == '/'
                ? styles.menu__icon + ' ' + styles.activeIcon
                : styles.menu__icon
            }
          />
          Home
        </Link>
      </li>
      <li>
        <Link
          className={
            pathname == '/projects'
              ? styles.menu__item + ' ' + styles.active
              : styles.menu__item
          }
          to='/projects'
        >
          <Hand
            className={
              pathname == '/projects'
                ? styles.menu__icon + ' ' + styles.activeIcon
                : styles.menu__icon
            }
          />
          Projects
        </Link>
      </li>
      <li>
        <Link
          className={
            pathname == '/contact'
              ? styles.menu__item + ' ' + styles.active
              : styles.menu__item
          }
          to='/contact'
        >
          <Tel
            className={
              pathname == '/contact'
                ? styles.menu__icon + ' ' + styles.activeIcon
                : styles.menu__icon
            }
          />
          Contacts
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
