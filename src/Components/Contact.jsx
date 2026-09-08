import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(e.target);
    
    try {
      const res = await fetch("https://techport13-applicant-form.bpt3creations.workers.dev", {
        method: "POST",
        body: formData
      });
    
      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Here at Techport13 we love making connections and meeting new people. 
            If you're interested in joining our team or getting to know us, 
            please send us a message and we will get back to you soon.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>4505 Peachtree Lakes Dr, Berkeley Lake, GA 30096</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>careers@techport13.com</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <iframe
              className="mb-4 mb-lg-0"
              src="https://www.google.ca/maps/d/u/0/embed?mid=14bmOdIqxiPEk68RLpXKVrq8yYl7IZLI&ehbc=2E312F&noprof=1"
              frameBorder="0"
              style={{ border: 0, width: "100%", height: "420px" }}
              allowFullScreen
              title="Techport13 Location"
            ></iframe>
          </div>

          <div className="col-lg-6">
            <form onSubmit={sendEmail} className="php-email-form">
              <div className="form-group">
                <input type="text" name="applicant_name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="row mt-3">
                <div className="col-md-6 form-group">
                  <input type="email" name="applicant_email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="tel" name="applicant_phone" className="form-control" placeholder="Your Phone" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <select name="source" className="form-control" required>
                  <option value="">How did you hear about us?</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Indeed">Indeed</option>
                  <option value="Referral">Referral</option>
                  <option value="Career Fair">Career Fair</option>
                  <option value="Company Website">Company Website</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group mt-3">
                <select name="position_type" className="form-control" required>
                  <option value="">Position Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="start_date">Available Start Date</label>
                <input type="date" className="form-control" id="start_date" name="start_date" required />
              </div>
              <div className="form-group mt-3">
                <textarea name="message" className="form-control" rows="5" placeholder="Tell us more about yourself..." required></textarea>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="resume">Upload Resume (Optional)</label>
                <input type="file" className="form-control" id="resume" name="resume" accept=".pdf,.doc,.docx" />
              </div>
              <div className="my-3">
                <div className={`loading ${status === "sending" ? "d-block" : ""}`}>Loading</div>
                <div className={`error-message ${status === "error" ? "d-block" : ""}`}>
                  Failed to send message. Please try again.
                </div>
                <div className={`sent-message ${status === "success" ? "d-block" : ""}`}>
                  Your application has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;