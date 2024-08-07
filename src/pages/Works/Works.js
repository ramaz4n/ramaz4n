import React from 'react';
import styles from './Works.module.scss';

import WorksItem from '../../components/WorksItem/WorksItem';
import jk from '../../Images/jk.jpg';
import pravovik from '../../Images/recovery.png';
import ambient from '../../Images/ambient.jpg';
import game from '../../Images/game.jpg';
import warehouse from '../../Images/warehouse.jpg';
import askin from '../../Images/askin.jpg';
import papa from '../../Images/papa.jpg';
import hook from '../../Images/hook.png';
import energy from '../../Images/energy.png';
import balls from '../../Images/99ballow.jpg';


function Works(props) {
  let worksItem = [
    {
      id: 10,
      title: '99баллов',
      info: '«99 баллов» – это онлайн-школа по подготовке к ЕГЭ и ОГЭ по русскому языку, математике и другим предметам. Пробное занятие бесплатно',
      url: balls,
      link: 'https://lk.99ballov.ru/',
      tech: 'html, less, js, php, jquery, react'
    },
    {
      id: 9,
      title: 'Energy',
      info: 'Отправь TRON и мы делегируем энергию на транзакцию',
      url: energy,
      link: 'https://energysun.online',
      tech: 'next js'
    },
    {
      id: 8,
      title: 'Папа Лаваш',
      info: 'Сайт для фирмы, специализирующегося по продаже фастфудов ',
      url: papa,
      link: 'https://www.papalavash.ru/',
      tech: 'react js'
    },
    {
      id: 7,
      title: 'ASKIN&CO',
      info: 'Сайт для компании, работающего с техникой для зрения ',
      url: askin,
      link: 'https://www.askin.ru',
      tech: 'html, css, js'
    },
    {
      id: 6,
      title: 'React-hook-form',
      info: 'Инпуты, Формы, drag&drop и JSON',
      url: hook,
      link: 'https://hook-form-theta.vercel.app/',
      tech: 'ts, react js'
    },
    {
      id: 5,
      title: 'Ambient',
      info: 'Сайт - портфолио для знакомого фотографа',
      url: ambient,
      link: 'https://ramaz4n.github.io/ambient/',
      tech: 'html, css, js, jquery'
    },
    {
      id: 4,
      title: 'Game 2048',
      info: 'Игра "2048", написанная на JavaScript',
      url: game,
      link: 'https://ramaz4n.github.io/2048/',
      tech: 'html, css, js'
    },
    {
      id: 3,
      title: 'WareHouse',
      info: 'Лендинг, одностраничный, адаптивный',
      url: warehouse,
      link: 'https://ramaz4n.github.io/warehouse/',
      tech: 'html, css, js'
    },
    {
      id: 2,
      title: 'ЖК "Ильинские луга"',
      info: 'Сраница подбора квартиры по выбранным параметрам в жилых комплексах Москвы',
      url: jk,
      link: 'https://ramaz4n.github.io/test-for-job/',
      tech: 'html, css, js'
    },
    {
      id: 1,
      title: 'Pravovik',
      info: 'Верстка одностраничного адаптивного сайта',
      url: pravovik,
      link: 'https://ramaz4n.github.io/Pravovik/',
      tech: 'html, css, js, bootstrap'
    }
  ];
  return (
    <div className={styles.works}>
      <div className={styles.works__content}>
        {worksItem.map((item) => (
          <WorksItem
            key={item.id}
            title={item.title}
            info={item.info}
            url={item.url}
            link={item.link}
            tech={item.tech}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
