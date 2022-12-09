import React from "react";

function Contact() {
  return (
    <div className="section">
      <div className="contact">
        <div className="container">
          <h2 className="title">Contact</h2>
          <div className="row">
            <div className="col-md-4">
              <h2>Get In Touch</h2>
              <p>
                If you'd like to get in touch
              </p>
            </div>
            <div className="col-md-8">
              <form id="contact-form" className="contact-form mt-6 needs-validation">
                <div className="row">
                  <div className="column col-md-6">
                    <input type="text" className="form-control" id="name"
                    placeholder="Name" />
                  </div>
                  <div className="column col-md-6">
                    <input type="number" className="form-control" id="number"
                    placeholder="Phone" />
                  </div>
                  <div className="column col-12">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                  </div>
                  <div className="column col-md-12">
                    <textarea type="message" className="form-control" id="message" placeholder="Message"></textarea>
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