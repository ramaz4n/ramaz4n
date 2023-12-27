import React from 'react';
import {Link} from "react-router-dom";
import styles from './Works.module.scss'

import {ReactComponent as HomeImg} from '../../Images/home.svg'
import {ReactComponent as Hand} from '../../Images/hand.svg'
import {ReactComponent as Tel} from '../../Images/tel.svg'

import WorksItem from '../../components/WorksItem/WorksItem'
import jk from '../../Images/jk.jpg'
import pravovik from '../../Images/recovery.png'
import ambient from '../../Images/ambient.jpg'
import game from '../../Images/game.jpg'
import warehouse from '../../Images/warehouse.jpg'
import askin from '../../Images/askin.jpg'
import papa from '../../Images/papa.jpg'
import hook from '../../Images/hook.png'
import energy from '../../Images/energy.png'



function Works(props) {

	let worksItem = [
		{
			id: 9,
			title: 'Energy',
			info: 'Отправь TRON и мы делегируем энергию на транзакцию',
			url: energy,
			link: "https://energysun.online",
			tech: "next js"
		},
		{
			id: 8,
			title: 'React-hook-form',
			info: 'Инпуты, Формы, drag&drop и JSON',
			url: hook,
			link: "https://hook-form-nine.vercel.app/",
			tech: "ts, react js"
		},
		{
			id: 7,
			title: 'Папа Лаваш',
			info: 'Сайт для фирмы, специализирующегося по продаже фастфудов ',
			url: papa,
			link: "https://www.papalavash.ru/",
			tech: "react js"
		},
		{
			id: 6,
			title: 'ASKIN&CO',
			info: 'Сайт для компании, работающего с техникой для зрения ',
			url: askin,
			link: "https://ramaz4n.github.io/askin-co/",
			tech: "html, css, js"
		},
		{
			id: 5,
			title: 'Ambient',
			info: 'Сайт - портфолио для знакомого фотографа',
			url: ambient,
			link: "https://ramaz4n.github.io/ambient/",
			tech: "html, css, js, jquery"
		},
		{
			id: 4,
			title: 'Game 2048',
			info: 'Игра "2048", написанная на JavaScript',
			url: game,
			link: "https://ramaz4n.github.io/2048/",
			tech: "html, css, js"
		},
		{
			id: 3,
			title: 'WareHouse',
			info: 'Лендинг, одностраничный, адаптивный',
			url: warehouse,
			link: "https://ramaz4n.github.io/warehouse/",
			tech: "html, css, js"
		},
		{
			id: 2,
			title: 'ЖК "Ильинские луга"',
			info: 'Сраница подбора квартиры по выбранным параметрам в жилых комплексах Москвы',
			url: jk,
			link: "https://ramaz4n.github.io/test-for-job/",
			tech: "html, css, js"
		},
		{
			id: 1,
			title: 'Pravovik',
			info: 'Верстка одностраничного адаптивного сайта',
			url: pravovik,
			link: "https://ramaz4n.github.io/Pravovik/",
			tech: "html, css, js, bootstrap"
		}
	
	]
	return (
		<div className={styles.works}>

			<ul className={styles.menu}>
			   <li><Link className={styles.menu__item } to="/">
				   <HomeImg className={styles.menu__icon }/>
				   Home
				</Link></li>
				<li><Link className={styles.menu__item + ' ' + styles.active } to="/projects">
				   <Hand className={styles.menu__icon + ' ' + styles.activeIcon}/>
				   Projects
				</Link></li>
				<li><Link className={styles.menu__item } to="/contact">
				   <Tel className={styles.menu__icon}/>
				   Contacts
				</Link></li>
			</ul>

			<div className={styles.works__content}>
				{
					worksItem.map(item=>(
						<WorksItem
							key={item.id}
							title={item.title}
							info={item.info}
							url={item.url}
							link={item.link}
							tech={item.tech}
						/>
					))
				}
			</div>
		</div>
	);
}

export default Works;