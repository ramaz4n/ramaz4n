import React from 'react';
import ContactItem from '../../components/ContactItem/ContactItem';
import styles from './Contact.module.scss';

import instagram from '../../Images/instagram.svg';
import vkontakte from '../../Images/vk.svg';
import telegram from '../../Images/telegram.svg';
import twitter from '../../Images/twitter.svg';
import linkedin from '../../Images/linkedin.svg';
import email from '../../Images/email.svg';
import phone from '../../Images/telefon.svg';

function Contact(props) {
  return (
    <div className={styles.contact}>
      <ContactItem
        link={'tel:89604426706'}
        name={'+7 960 442 67 06'}
        img={phone}
      />
      <ContactItem
        link={'https://t.me/ram4z4n'}
        name={'Telegram'}
        img={telegram}
      />
      <ContactItem
        link={'mailto:ramazan.abdullaev.00@gmail.com'}
        name={'Email'}
        img={email}
      />
      <ContactItem
        link={'https://www.instagram.com/ramazan_aw'}
        name={'Instagram'}
        img={instagram}
      />
      <ContactItem
        link={'https://vk.com/ram4z4n'}
        name={'Vkontakte'}
        img={vkontakte}
      />
      <ContactItem
        link={'https://www.linkedin.com/in/ramazan-abdullaev-491a30241/'}
        name={'LinkedIn'}
        img={linkedin}
      />
      <ContactItem
        link={'https://twitter.com/ramaz4n'}
        name={'Twitter'}
        img={twitter}
      />
    </div>
  );
}

export default Contact;
