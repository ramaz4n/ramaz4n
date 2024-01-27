import React from 'react';

import styles from './Home.module.scss'




function Home(props) {
	return (
		<div >
			<div className={styles.home}>
				<h1 className={styles.home__title}>Ramazan Abdullaev &#8779; frontend developer</h1>
				<div className={styles.home__about}>
					<div className={styles.home__aboutItem}>
					   <p className={styles.home__aboutItemTitle}>Фронтенд разработчик</p>
						<p>Фронтенд разработчик - это специалист, который занимается созданием и поддержкой пользовательского интерфейса веб-приложений. Он отвечает за реализацию дизайн-концепций и взаимодействие пользователя с веб-страницей.</p>
					   <p>
					      Подробнее про мой стек технологий можно узнать в 
						   <a href="https://kazan.hh.ru/resume/5002437bff07b453630039ed1f576b53333852" target="_blank"> моем резюме</a>
					   </p>	
					</div>
				   <div className={styles.home__aboutItem}>
					   <p className={styles.home__aboutItemTitle}>Frontend developer</p>
						<p>A frontend developer is a specialist who creates and maintains the user interface of web applications. He is responsible for the implementation of design concepts and user interaction with the web page.</p>
					   <p>
					      Learn more about the technology stack in
						   <a href="https://kazan.hh.ru/resume/5002437bff07b453630039ed1f576b53333852" target="_blank"> my resume</a>
					   </p>	
					</div>	
				</div>
			</div>
		</div>
	);
}

export default Home;