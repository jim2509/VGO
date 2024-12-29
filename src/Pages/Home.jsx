import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      \
      <main>
        <section className="hero flex flex-center">
          <div className="container hero__content text-center">
            <h1 className="heading-primary hero__heading">
              Vision Green Organization
            </h1>
            <p className="hero__hastag">Empowering Sustainable Change</p>
            <p className="hero__text">
              Vision Green Organization is dedicated to addressing environmental
              and social challenges through sustainable technology and
              initiatives.
              <strong>
                {" "}
                Our Work Areas: Climate Action, Green Entrepreneurship,
                Sustainability, Youth Engagement{" "}
              </strong>
            </p>
            <Link
              to="/English"
              className="btn btn--primary btn--flex mg-right-sm"
            >
              <i className="bx bxs-hand btn__icon"></i>
              Pledge
            </Link>
            <Link to="/Talpata" className="btn btn--secondary btn--flex">
              <i className="bx bxs-download btn__icon"></i>
              Talpata
            </Link>
          </div>
          {/* <!-- Scroll down btn --> */}
          <a href="#" className="scroll-down display-block">
            <i className="bx bx-chevrons-down"></i>
          </a>
          {/* <!-- Social Media --> */}
          <ul className="hero__social flex flex-items-center">
            <li className="hero__social-list">
              <a
                href="https://web.facebook.com/visiongreenorganization"
                className="hero__social-link"
              >
                <i className="bx bxl-facebook hero__social-icon"></i>
              </a>
            </li>
            <li className="hero__social-list">
              <a
                href="https://instagram.com/vision_green_organization?igshid=Yzg5MTU1MDY="
                className="hero__social-link"
              >
                <i className="bx bxl-instagram hero__social-icon"></i>
              </a>
            </li>
            <li className="hero__social-list">
              <a
                href="https://www.linkedin.com/company/vision-green-organization/"
                className="hero__social-link"
              >
                <i className="bx bxl-linkedin hero__social-icon"></i>
              </a>
            </li>
          </ul>
        </section>
        {/* <!---------------X- Hero Ends -X---------------> */}

        <section className="goal-section">
          <div className="goal container grid ">
            {/* <!-- GOAL o1 --> */}
            <figure className="goal__image-wrapper">
              <img
                src="/src/assets/images/home-1.jpg"
                alt="..."
                className="goal__image"
              />
            </figure>
            <div className="goal__content">
              <h3 className="goal__heading heading-tertiary">
                The path towards sustainability by vision green organization
              </h3>
              <ul className="goal__list flex flex-column">
                <li className="goal__list-item">
                  <i className="bx bx-check-double goal__list-icon"></i>
                  Ensuring mass awareness, especially among the youths
                </li>
                <li className="goal__list-item">
                  <i className="bx bx-check-double goal__list-icon"></i>
                  Motivating people to use more eco-friendly products and adopt
                  an eco-friendly lifestyle
                </li>
                <li className="goal__list-item">
                  <i className="bx bx-check-double goal__list-icon"></i>
                  Emphasizing the adoption of recycled products and promoting
                  upcycled products. Avoiding the use of plastic products
                </li>
                <li className="goal__list-item">
                  <i className="bx bx-check-double goal__list-icon"></i>
                  <span>
                    Promoting green entrepreneurship to ensure accessibility of
                    eco-friendly products and services
                  </span>
                </li>
              </ul>
            </div>
            {/* <!-- GOAL 02 --> */}
            <div className="goal__content">
              <h3 className="goal__heading heading-tertiary">
                Offer your help to bring sustainable change in the communities
                and the lives of people
              </h3>
              <p className="goal__subheading">
                Your assistance can be instrumental to:
              </p>
              <ul className="goal__list flex flex-column">
                <li className="goal__list-item">
                  <i className="bx bxs-spa goal__list-icon"></i>
                  Make the unheard voices of the youth from disadvantaged and
                  vulnerable parts of the Climate Stories heard through our
                  Eco-Journalism.
                </li>
                <li className="goal__list-item">
                  <i className="bx bxs-spa goal__list-icon"></i>
                  Disseminate the sustainability stories, stories of the effects
                  of climate change, and stories that reflect the adverse
                  consequence of environmental degradation to make people aware
                  and motivated to contribute to achieving a greener and world
                </li>
              </ul>
            </div>
            <figure className="goal__image-wrapper">
              <img
                src="/src/assets/images/home-2.jpg"
                alt="..."
                className="goal__image"
              />
            </figure>

            {/* <!-- GOAL 03 --> */}
            <figure className="goal__image-wrapper">
              <img
                src="/src/assets/images/hero-img-3.jpg"
                alt="..."
                className="goal__image"
              />
            </figure>

            <div className="goal__content">
              <ul className="goal__list flex flex-column">
                <li className="goal__list-item">
                  <i className="bx bxs-spa goal__list-icon"></i>
                  Conduct research to highlight the root causes that hinder
                  sustainability, means of achieving sustainability, and
                  systemic analysis of the sustainability journey
                </li>
                <li className="goal__list-item">
                  <i className="bx bxs-spa goal__list-icon"></i>
                  Advocate the sustainability thoughts and actions to promote
                  this among other youths and adults
                </li>
                <li className="goal__list-item">
                  <i className="bx bxs-spa goal__list-icon"></i>
                  Promote small local youth-led projects to inspire the youths
                  to adopt actionable measures to achieve sustainability
                </li>
                <li className="goal__list-item">
                  <i className="bx bxs-spa goal__list-icon"></i>
                  Mitigate the adverse effects on lives due to climate change,
                  environmental pollution, and lack of a sense of sustainability
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!----------------- Flag Map Starts -----------------> */}
        <section className="flagmap-section ">
          <div className="container section-title">
            <h2 className="section-title__heading heading-secondary text-center">
              We are in these countries
            </h2>
          </div>
          <div className="container flags grid  grid-items-center">
            <figure className="flap">
              <img
                src="/src/assets/images/countries/bangladesh-flag.png"
                alt="Bangladesh flag map"
                className="flag__img pointer"
              />
            </figure>
            <figure className="flap">
              <img
                src="/src/assets/images/countries/indian-flag.png"
                alt="India flag map"
                className="flag__img pointer"
              />
            </figure>
            <figure className="flap">
              <a
                href="https://nepal-visiongreen.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/src/assets/images/countries/nepal-flag.jpg"
                  alt="Nepal flag map"
                  className="flag__img pointer"
                />
              </a>
            </figure>

            <figure className="flap">
              <img
                src="/src/assets/images/countries/Hungary-flag.png"
                alt="Pakistan flag map"
                className="flag__img pointer"
              />
            </figure>
          </div>
        </section>
        {/* <!---------------X- Flag Map Ends -X---------------> */}

        {/* <!----------------- CTA Starts -----------------> */}
        <section className="cta-section">
          <div className="container flex flex-column cta text-center">
            <h3 className="heading-tertiary cta__subheading">
              Have any questions?
            </h3>
            <h2 className="heading-secondary cta__heading text-capitalize">
              Click on the button below to contact us!
            </h2>
            <a
              href="https://visiongreen.org/contact"
              className="btn btn--secondary cta__btn"
            >
              contact
            </a>
          </div>
        </section>
        {/* <!---------------X- CTA Ends -X---------------> */}
      </main>
    </>
  );
};

export default Home;
