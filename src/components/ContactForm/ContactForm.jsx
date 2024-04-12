import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="contact__group">
        <label htmlFor="name">Name</label>
        <input name="name" type="text" className="contact__control" />
      </div>

      <div className="contact__group">
        <label htmlFor="email">Email</label>
        <input name="email" type="email" className="contact__control" />
      </div>

      <div className="contact__group">
        <label htmlFor="subject">Subject</label>
        <input name="subject" type="text" className="contact__control" />
      </div>

      <div className="contact__group">
        <label htmlFor="message">Subject</label>
        <textarea name="message" id="message"></textarea>
      </div>

      <Button text="See My Work" />
    </form>
  );
};

export default ContactForm;
