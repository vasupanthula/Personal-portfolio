import { useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    e.currentTarget.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <h2>
            GET IN
            <br />
            TOUCH
          </h2>

          <div className="contact-description">

            <p>
              If you have any questions, please feel free to reach out to me.
              I will be happy to answer your questions and provide you with
              the information you need.
            </p>

            <p>
              I am always open to new opportunities and collaborations. If you
              have a project in mind or would like to work together, please
              don't hesitate to contact me. I am always looking for new and
              exciting projects to work on, and I would love to hear from you.
            </p>

          </div>

          <div className="contact-details">

            <a href="tel:+918712336386">
              ☎ +91 8712336386
            </a>

            <a href="mailto:vasupanthula@gmail.com">
              ✉ vasupanthula@gmail.com
            </a>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="contact-right">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME + LAST NAME */}
            <div className="form-row">

              <div className="form-group">

                <label htmlFor="firstName">
                  Name <span>(required)</span>
                </label>

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="lastName">
                  Last Name
                </label>

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                />

              </div>

            </div>


            {/* EMAIL */}
            <div className="form-group">

              <label htmlFor="email">
                Email <span>(required)</span>
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
              />

            </div>


            {/* PHONE NUMBER */}
            <div className="form-group">

              <label htmlFor="number">
                Number <span>(required)</span>
              </label>

              <input
                type="tel"
                id="number"
                name="number"
                required
              />

            </div>


            {/* SUBJECT */}
            <div className="form-group">

              <label htmlFor="subject">
                Subject <span>(required)</span>
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                required
              />

            </div>


            {/* MESSAGE */}
            <div className="form-group">

              <label htmlFor="message">
                Message <span>(required)</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>

            </div>


            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="contact-submit"
            >
              SEND MESSAGE
            </button>


            {/* SUCCESS MESSAGE */}
            {submitted && (
              <p className="contact-success">
                Thank you! Your message has been submitted successfully.
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;