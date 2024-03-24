import React from 'react';
import {Link} from "react-router-dom";

import avatar from '../../Images/ava.jpg'


import styles from './Home.module.scss'



function Home(props) {
	return (
		<div >
			<div className={styles.home}>
				<div className={styles.home__titleWrap}>
					<img src={avatar} alt="avatar" />

					<div>
						<h1 className={styles.home__title}>Ramazan Abdullaev</h1>
						<h2 className={styles.home__subTitle}>JavaScript & React js developer</h2>
					</div>
				</div>

				<div className={styles.home__about}>
				   <div className={styles.home__aboutItem}>
					   	<p>
							 I am Ramazan and i JavaScript & React developer with about 2 years of experience.  
							 My skills: html, css, scss, javascript, react, redux, jquery, bootstrap, tailwind and so on. 
							 You can read more about my skills in &nbsp;
						   <a className={styles.home__linkItem} href="https://kazan.hh.ru/resume/5002437bff07b453630039ed1f576b53333852" target="_blank">my resume</a>.
							 And some of my works are presented on the page &nbsp;
							 <Link className={styles.home__linkItem} to="/projects">projects</Link>
					   </p>	
					</div>	
				</div>
			</div>
		</div>
	);
}

export default Home;