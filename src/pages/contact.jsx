import React from 'react'
import PageBanner from './components/PageBanner'

export default function contact () {
  return (<>
    <PageBanner page="Contact" header="Contact Us" />

    {/*================Contact Area =================*/}
    <section className="contact_area section_gap_bottom">
      <div className="container">
      <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.794008437608!2d144.9541010757369!3d-37.818293671974494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2sCollins%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1724674930455!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className='my-5 py-4'
            ></iframe>
        <div className="row">
          <div className="col-lg-3">
            <div className="contact_info">
              <div className="info_item">
                <i className="lnr lnr-home" />
                <h6>California, United States</h6>
                <p>Santa monica bullevard</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-phone-handset" />
                <h6>
                  <a href="#">00 (440) 9865 562</a>
                </h6>
                <p>Mon to Fri 9am to 6 pm</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-envelope" />
                <h6>
                  <a href="#">support@colorlib.com</a>
                </h6>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <form
              className="row contact_form"
              action="contact_process.php"
              method="post"
              id="contactForm"
              noValidate="novalidate"
            >
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter your name'"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter email address'"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter Subject"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Subject'"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows={1}
                    placeholder="Enter Message"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Message'"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12 text-right">
                <button type="submit" value="submit" className="primary-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/*================Contact Area =================*/}
  
  
    </>
    
  )
}

  