import React from 'react';
import {Link} from "react-router-dom";
import ContactItem from '../../components/ContactItem/ContactItem';
import styles from './Contact.module.scss'
import instagram from '../../Images/instagram.png'
import vkontakte from '../../Images/vkontakte.png'
import telegram from '../../Images/telegram.png'
import twitter from '../../Images/twitter.png'
import linkedin from '../../Images/linkedin.png'
import email from '../../Images/email.png'
import phone from '../../Images/phone.svg'
import {ReactComponent as HomeImg} from '../../Images/home.svg'
import {ReactComponent as Hand} from '../../Images/hand.svg'
import {ReactComponent as Tel} from '../../Images/tel.svg'


function Contact(props) {
	return (
		<div>
			<ul className={styles.menu}>
			   <li><Link className={styles.menu__item } to="/">
				   <HomeImg className={styles.menu__icon }/>
				   Home
				</Link></li>
				<li><Link className={styles.menu__item} to="/projects">
				   <Hand className={styles.menu__icon}/>
				   Projects
				</Link></li>
				<li><Link className={styles.menu__item + ' ' + styles.active } to="/contact">
				   <Tel className={styles.menu__icon + ' ' + styles.activeIcon}/>
				   Contacts
				</Link></li>
			</ul>
			<div className={styles.contact}>
				<ContactItem link={'tel:89604426706'} name={"+7 960 442 67 06"} img={phone}/> 
				<ContactItem link={'https://t.me/ram4z4n'} name={"Telegram"} img={telegram}/>
				<ContactItem link={'mailto:ramazan.abdullaev.00@gmail.com'} name={"Email"} img={email}/>
				<ContactItem link={'https://www.instagram.com/ramazan_aw'} name={"Instagram"} img={instagram}/>
				<ContactItem link={'https://vk.com/ram4z4n'} name={"Vkontakte"} img={vkontakte}/>
				<ContactItem link={'https://www.linkedin.com/in/ramazan-abdullaev-491a30241/'} name={"LinkedIn"} img={linkedin}/>
				<ContactItem link={'https://twitter.com/ramaz4n'} name={"Twitter"} img={twitter}/>
			</div>
		</div>
	);
}

export default Contact;