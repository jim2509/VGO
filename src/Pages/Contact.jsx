import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="main">
      <section className="subpage-hero contact-hero grid grid-center">
        <div className="container subpage__container text-center">
          <h1 className="heading-primary subpage-hero__heading">Contact us</h1>
          <p className="subpage-hero__texts flex flex-center">
            <Link to="/" className="subpage-hero__text">Home</Link>
            <i className="bx bxs-chevrons-right subpage-hero__icon"></i>
            <Link to="/Contact" className="subpage-hero__text">Contact</Link>
          </p>
        </div>
      </section>

      {/* <!----------------- Contact Starts -----------------> */}
      <section className="contact-section">
        <div className="section-title container">
          <h2
            className="section-title__heading heading-secondary text-capitalize text-center"
          >
            Contact with us today!
          </h2>
        </div>
        <div className="contact-ways container grid mb ">
          <article className="contact-box">
            <i className="bx bxs-home contact-box__icon"></i>
            <h4 className="contact-box__heading heading-tertiary">Address</h4>
            <address className="contact-box__txt">
              Hungary Address: 93 Villányi út, 1118 Budapest. <br />
              Bangladesh Address: Road 1/b, house -4, Nikunjo -2, Dhaka. <br />
              Nepal Address: Sankharapur-06, <br /> Kathmandu, Bagmati province, Nepal.
            </address>
          </article>
          <article className="contact-box">
            <i className="bx bxs-phone contact-box__icon"></i>
            <h4 className="contact-box__heading heading-tertiary">
              Contact Number
            </h4>
            <a href="tel:+88 01672 744543" className="contact-box__txt"
            >+36 204096958</a
            >
          </article>
          <article className="contact-box">
            <i className="bx bx-world contact-box__icon"></i>
            <h4 className="contact-box__heading heading-tertiary">Social media</h4>
            <ul className="contact-box__socials flex flex-center">
              <li className="contact-box__socials-item">
                <a
                  href="mailto:visiongreenorganization@gmail.com"
                  className="contact-box__socials-link"
                >
                  <i className="bx bxl-gmail contact-box__socials-icon"></i>
                </a>
              </li>
              <li className="contact-box__socials-item">
                <a
                  href="https://www.linkedin.com/company/vision-green-organization/"
                  className="contact-box__socials-link"
                >
                  <i className="bx bxl-linkedin contact-box__socials-icon"></i>
                </a>
              </li>
              <li className="contact-box__socials-item">
                <a
                  href=" https://web.facebook.com/visiongreenorganization"
                  className="contact-box__socials-link"
                >
                  <i className="bx bxl-facebook contact-box__socials-icon"></i>
                </a>
              </li>
              <li className="contact-box__socials-item">
                <a
                  href="https://instagram.com/vision_green_organization?igshid=Yzg5MTU1MDY="
                  className="contact-box__socials-link"
                >
                  <i className="bx bxl-instagram contact-box__socials-icon"></i>
                </a>
              </li>
            </ul>
          </article>
        </div>
        {/* <!-- Contact Form --> */}
        <form
          action="https://formspree.io/f/xyyajvnw"
          method="POST"
          className="form container grid"
        >
          <div className="form__group grid grid-2-cols">
            <input
              type="text"
              className="form__input"
              placeholder="First Name"
              name="first-name"
              required
            />
            <input
              type="text"
              className="form__input"
              placeholder="Last Name"
              name="last-name"
              required
            />
          </div>
          <div className="form__group grid grid-2-cols">
            <input
              type="email"
              className="form__input"
              placeholder="Email Address"
              name="email"
              required
            />
            <input
              type="text"
              className="form__input"
              placeholder="Subject"
              name="subject"
              required
            />
          </div>
          <div className="form__group">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="form__input"
              placeholder="Enter your message here"
            ></textarea>
          </div>
          <div className="flex flex-center">
            <button type="submit" className="form__btn">Send message</button>
          </div>
        </form>
      </section>
      {/* <!----------------X- Contact Ends -X---------------> */}
    </main>
  );
};

export default Contact;