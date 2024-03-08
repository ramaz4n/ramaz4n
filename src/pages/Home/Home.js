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
							 	Меня зовут Рамазан и я фронтенд разработчик с опытом работы 2 года в создании креативных и 
								отзывчивых веб-сайтов. Я увлечен созданием удобных и красивых пользовательских интерфейсов, 
								которые обеспечивают отличный пользовательский опыт. У меня навыки в HTML, CSS, JavaScript, 
								React и т.д. Более подробно про мои навыки можно почитать в &nbsp;
						   <a className={styles.home__linkItem} href="https://kazan.hh.ru/resume/5002437bff07b453630039ed1f576b53333852" target="_blank">моем резюме</a>.
							 А некоторые из моих работ представлены на странице &nbsp;
							 <Link className={styles.home__linkItem} to="/projects">projects</Link>
					   </p>	
					</div>	
				</div>
			</div>
		</div>
	);
}

export default Home;