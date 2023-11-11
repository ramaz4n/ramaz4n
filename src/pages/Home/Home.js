import React from 'react';
import {Link} from "react-router-dom";
import styles from './Home.module.scss'
import {ReactComponent as HomeImg} from '../../Images/home.svg'
import {ReactComponent as Hand} from '../../Images/hand.svg'
import {ReactComponent as Tel} from '../../Images/tel.svg'



function Home(props) {
	return (
		<div >
			<ul className={styles.menu}>
				<li><Link className={styles.menu__item + ' ' + styles.active } to="/">
				   <HomeImg className={styles.menu__icon + ' ' + styles.activeIcon}/>
				   Home
				</Link></li>
				<li><Link className={styles.menu__item} to="/projects">
				   <Hand className={styles.menu__icon}/>
				   Projects
				</Link></li>
				<li><Link className={styles.menu__item} to="/contact">
				   <Tel className={styles.menu__icon}/>
				   Contacts
				</Link></li>
			</ul>
			<div className={styles.home}>
				<h1 className={styles.home__title}>Ramazan Abdullaev &#8779; frontend developer</h1>
				<div className={styles.home__about}>
				   <div>
					   <p>Frontend developer. Web developer who makes modern websites</p>
						<p>Student of <a href="https://kpfu.ru/" target="_blank" > Kazan Federal University </a></p>
					   <p>
					      Learn more about the technology stack in
						   <a href="https://kazan.hh.ru/resume/5002437bff07b453630039ed1f576b53333852" target="_blank"> my resume</a>
					   </p>	
					</div>	
					<div>
					   <p>Фронтенд разработчик. Разработчик современных, адаптивных вебсайтов</p>
						<p>Студент <a href="https://kpfu.ru/" target="_blank" > Казанского Федерального Университета </a></p>
					   <p>
					      Подробнее про мой стек технологий можно узнать в 
						   <a href="https://kazan.hh.ru/resume/5002437bff07b453630039ed1f576b53333852" target="_blank"> моем резюме</a>
					   </p>	
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;