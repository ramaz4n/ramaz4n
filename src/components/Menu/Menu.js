import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Menu.module.scss"
import home from '../../Images/home.svg'
import work from '../../Images/hand.png'
import tel from '../../Images/tel.png'


function Menu(props) {
	return (
			<ul className={styles.menu}>
				<li><Link className={styles.menu__item} to="/">
				   <img src={home}/>
				   Home
				</Link></li>
				<li><Link className={styles.menu__item} to="/works">
				   <img src={work}/>
				   Works
				</Link></li>
				<li><Link className={styles.menu__item} to="/contact">
				   <img src={tel}/>
				   Contact
				</Link></li>
			</ul>
	);
}

export default Menu;