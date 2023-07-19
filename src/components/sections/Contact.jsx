import React, {useRef} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wg2o8tt', 'template_phiad6c', form.current, 'zCBLLBK3jR377RoRm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="section">
      <div className="contact">
        <div className="container">
          <h2 className="title">Contact</h2>
          <div className="row">
            <div className="col-md-4">
              <h2>Get In Touch</h2>
              <p className="email-btn">
                If you'd like to get in touch, send me an email{" "} 
                  <a href="mailto:condreaychris@gmail.com">here</a> 
                {" "}or use the form and I'll be sure to get back to you soon
              </p>
            </div>
            <div className="col-md-8">
              <form ref={form} onSubmit={sendEmail}  id="contact-form" className="contact-form mt-6 needs-validation">
                <div className="row">
                  <div className="column col-md-6">
                    <input type="text" className="form-control" name="user_name" id="user_name"
                    placeholder="Name" />
                  </div>
                  <div className="column col-md-6">
                    <input type="phone" className="form-control" name="phone" id="number"
                    placeholder="Phone" />
                  </div>
                  <div className="column col-12">
                    <input type="subject" className="form-control" name="subject" d="subject" placeholder="Subject" />
                  </div>
                  <div className="column col-12">
                    <input type="email" className="form-control" name="user_email" id="email" placeholder="Email" />
                  </div>
                  <div className="column col-md-12">
                    <textarea type="message" className="form-control" name="message" id="message" placeholder="Message"></textarea>
                  </div>
                </div>
                <input type="submit" className="btn btn-custom" value="Send Message" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;