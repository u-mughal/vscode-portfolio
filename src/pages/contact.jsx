import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Contactez-nous via les réseaux sociaux</h1>
        <ContactCode />
      </div>
      <div>
        <h1>Ou remplissez un formulaire</h1>
        <form className={styles.form}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Nom</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">Courriel</label>
              <input type="email" name="email" id="email" />
            </div>
          </div>
          <div>
            <label htmlFor="subject">Sujet</label>
            <input type="text" name="subject" id="subject" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5"></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
