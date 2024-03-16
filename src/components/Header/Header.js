import React from 'react';
import {Link} from "react-router-dom";
import useSound from 'use-sound';

import Container from '../Container/Container'
import github from '../../Images/github.webp'
import resume from '../../Images/resume.png'
import logoImg from '../../Images/ramazan.svg'

import clickAudio from '../../audio/tic.mp3'

import styles from './Header.module.scss';			



function Header(props) {
	const [play] = useSound(clickAudio)

	return (
		<div className={styles.header}>
		   <Container>
			   <div className={styles.header__wrapper}>											
					<Link onClick={play} to="/">
						<img className={styles.header__logo} src={logoImg} alt="logo"/>
					</Link>
					<a href="https://github.com/ramaz4n" className={styles.header__git} target="_blank">
						<img src={github}/> <span>Github</span>
					</a>
					<a href="https://kazan.hh.ru/resume/5002437bff07b453630039ed1f576b53333852" className={styles.header__resume} target="blank">
						<img src={resume}/>  <span>Resume</span>
					</a>
			   </div>
			</Container>
		</div>
	);
}

export default Header;