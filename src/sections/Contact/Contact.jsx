import "./Contact.scss";
import ContactForm from "../../components/ContactForm/ContactForm";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Get In Touch</h2>
      <div className="contact__content">
        <ContactForm />

        <div className="contact__details">
          <a href="mailto:elliemae@email.com">elliemae@email.com</a>
          <a href="tel:123123123">+ 123 123 123</a>
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default Contact;
