import React, { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation is handled by HTML5 required attribute
    setStatus('Sending...');
    
    setTimeout(() => {
      e.target.reset();
      setStatus('');
      alert('Thank you for your message! I\'ll get back to you soon.');
    }, 2000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section__title">Get In Touch</h2>
        <div className="contact__grid">
          <div className="contact__info">
            <h3 className="contact__subtitle">Let's create something amazing together</h3>
            <div className="contact__details">
              <div className="contact__item">
                <div className="contact__icon">📧</div>
                <div className="contact__text">
                  <span className="contact__label">Email</span>
                  <a href="mailto:bibhukrupa5@gmail.com">bibhukrupa5@gmail.com</a>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__icon">📱</div>
                <div className="contact__text">
                  <span className="contact__label">Phone</span>
                  <a href="tel:+91 1234567890">+91 1234567890</a>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__icon">📍</div>
                <div className="contact__text">
                  <span className="contact__label">Location</span>
                  <span>Noida, Uttarpradesh</span>
                </div>
              </div>
            </div>
            <div className="contact__social">
              <a href="https://github.com/bibhukrupa01" target="_blank" rel="noreferrer" className="contact__social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/bibhu-krupa-pradhan-45b021329/" target="_blank" rel="noreferrer" className="contact__social-link">LinkedIn</a>
              <a href="https://twitter.com/bibhukrupa5" target="_blank" rel="noreferrer" className="contact__social-link">Twitter</a>
            </div>
          </div>
          <form className="contact__form" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" required />
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" name="subject" required />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-control" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--full-width" disabled={status === 'Sending...'}>
              {status || 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
