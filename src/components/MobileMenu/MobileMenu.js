import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {Context} from '../../Context';

import styles from './MobileMenu.module.scss';

import { ReactComponent as HomeImg } from '../../Images/home.svg';
import { ReactComponent as Hand } from '../../Images/hand.svg';
import { ReactComponent as Tel } from '../../Images/tel.svg';

function MobileMenu() {
  const { pathname } = useLocation();
  const {isMobile, setIsMobile} = useContext(Context);

  return (
    <div>
      <div onClick={() => setIsMobile(false)} className={isMobile ? styles.mobileMenu__backActive : styles.mobileMenu__back}></div>
      <ul onClick={(e)=>{e.stopPropagation()}} className={isMobile ? `${styles.mobileMenu}  ${styles.mobileMenuActive}` : styles.mobileMenu}>
        <li>
          <Link
            onClick={() => setIsMobile(false)}
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
            onClick={() => setIsMobile(false)}
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
            onClick={() => setIsMobile(false)}
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

        <svg onClick={() => setIsMobile(false)} className='absolute cursor-pointer top-7 right-7 ' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20">
          <path
            d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z" fill="#fff"/>
        </svg>
      </ul>
    </div>
  );
}

export default MobileMenu;
