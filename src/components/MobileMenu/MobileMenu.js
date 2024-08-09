import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from './MobileMenu.module.scss';

import { ReactComponent as HomeImg } from '../../Images/home.svg';
import { ReactComponent as Hand } from '../../Images/hand.svg';
import { ReactComponent as Tel } from '../../Images/tel.svg';

function MobileMenu({isActive}) {
  const { pathname } = useLocation();

  return (
    <ul className={isActive? styles.mobileMenu + " " + styles.mobileMenuActive :styles.mobileMenu}>
      <li>
        <Link
          className={
            pathname == '/'
              ? styles.mobileMenu__item + ' ' + styles.active
              : styles.mobileMenu__item
          }
          to='/'
        >
          <HomeImg
            className={
              pathname == '/'
                ? styles.mobileMenu__icon + ' ' + styles.activeIcon
                : styles.mobileMenu__icon
            }
          />
          About
        </Link>
      </li>
      <li>
        <Link
          className={
            pathname == '/projects'
              ? styles.mobileMenu__item + ' ' + styles.active
              : styles.mobileMenu__item
          }
          to='/projects'
        >
          <Hand
            className={
              pathname == '/projects'
                ? styles.mobileMenu__icon + ' ' + styles.activeIcon
                : styles.mobileMenu__icon
            }
          />
          Projects
        </Link>
      </li>
      <li>
        <Link
          className={
            pathname == '/contact'
              ? styles.mobileMenu__item + ' ' + styles.active
              : styles.mobileMenu__item
          }
          to='/contact'
        >
          <Tel
            className={
              pathname == '/contact'
                ? styles.mobileMenu__icon + ' ' + styles.activeIcon
                : styles.mobileMenu__icon
            }
          />
          Contacts
        </Link>
      </li>
    </ul>
  );
}

export default MobileMenu;
