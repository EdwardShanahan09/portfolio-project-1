import Button from "../Button/Button";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="contact__group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" className="contact__control" />
      </div>

      <div className="contact__group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="contact__control"
        />
      </div>

      <div className="contact__group">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="contact__control"
        />
      </div>

      <div className="contact__group">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
      </div>

      <button>Sumbit</button>
    </form>
  );
};

export default ContactForm;
