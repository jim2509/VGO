import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <main className="main">


        <section className="subpage-hero about-hero grid grid-center">
          <div className="container subpage__container text-center">
            <h1 className="heading-primary subpage-hero__heading">
              Our works & Achievements
            </h1>
            <p className="subpage-hero__texts flex flex-center">
              <Link to="/" className="subpage-hero__text">Home</Link>
              <i className="bx bxs-chevrons-right subpage-hero__icon"></i>
              <Link to="/About" className="subpage-hero__text">About</Link>
            </p>
          </div>
        </section>
        {/* <!----------------- About -----------------> */}
        <section className="about-section">
          <div className="container section-title">
            <h2 className="section-title__heading heading-secondary text-center">
              Sustainable development in the era of climate change: Where VGO
              stands!
            </h2>
          </div>
          <div className="about container grid ">
            {/* <!-- Our Vision --> */}
            <div className="about__text-box">
              <h3 className="about__heading heading-secondary">Our Vision</h3>
              <p className="about__text">
                Vision: Transforming communities through Greentech,
                entrepreneurship, and youth empowerment.
                As the initial name indicates, our Vision is to achieve a Green
                and Sustainably Habitable Earth by 2030!
              </p>
            </div>
            <figure className="about__img-box">
              <img
                src="/src/assets/images/2.2 Our Vision.jpg"
                alt="nature"
                className="about__img"
              />
            </figure>

            {/* <!-- Our Mission --> */}
            <figure className="about__img-box">
              <img
                src="/src/assets/images/2.3 Our Mission.jpg"
                alt="nature"
                className="about__img"
              />
            </figure>
            <div className="about__text-box">
              <h3 className="about__heading heading-secondary">Our mission</h3>
              <p className="about__text">
                Mission: Addressing environmental, climate change, and socioeconomic
                challenges through sustainable technologies and business models.

              </p>
            </div>
          </div>
        </section>
        {/* <!---------------X- About Ends -X---------------> */}

        {/* <!----------------- Core Values -----------------> */}
        <section className="core-values-section">
          <div className="section-title container">
            <h2
              className="heading-secondary core-value__title text-capitalize text-center section-title__heading"
            >
              Our core values
            </h2>
          </div>
          <div className="core-values container grid grid-2-cols grid-justify-center">
            <article className="core-value">
              <figure className="core-value__icon-box">
                <img
                  src="/src/assets/images/about/human-centered.png"
                  alt=""
                  className="core-value__icon"
                />
              </figure>
              <div className="core-value__text-box">
                <h3 className="core-value__heading heading-tertiary">
                  Human-Centered
                </h3>
                <p className="core-value__text">
                  All of our thoughts, approaches, and actions are followed by the
                  human-centered design philosophy. We prioritize the contextual
                  aspect, cultural preference, and traditional sentiments while
                  adopting measures to achieve sustainability.
                </p>
              </div>
            </article>
            <article className="core-value">
              <figure className="core-value__icon-box">
                <img
                  src="/src/assets/images/about/eco-friendly.png"
                  alt=""
                  className="core-value__icon"
                />
              </figure>
              <div className="core-value__text-box">
                <h3 className="core-value__heading heading-tertiary">Eco-Friendly</h3>
                <p className="core-value__text">
                  We promote an eco-friendly lifestyle that is minimalistic,
                  cost-effective, resource-efficient, and upcycled yet healthy and
                  happy.
                </p>
              </div>
            </article>
            <article className="core-value">
              <figure className="core-value__icon-box">
                <img
                  src="/src/assets/images/about/youth-oriented.png"
                  alt=""
                  className="core-value__icon"
                />
              </figure>
              <div className="core-value__text-box">
                <h3 className="core-value__heading heading-tertiary">
                  Youth-Oriented
                </h3>
                <p className="core-value__text">
                  We put the youth (including the children) at the heart of our
                  work. We believe that youth are the future of this earth, and
                  the sense of sustainability among them can safeguard the future
                  of our planet and civilization.
                </p>
              </div>
            </article>
            <article className="core-value">
              <figure className="core-value__icon-box">
                <img
                  src="/src/assets/images/about/diversity.png"
                  alt=""
                  className="core-value__icon"
                />
              </figure>
              <div className="core-value__text-box">
                <h3 className="core-value__heading heading-tertiary">
                  Diverse & inclusive
                </h3>
                <p className="core-value__text">
                  As we are already working in 4 countries, we have experienced
                  and firmly believe in diversity. We welcome diversity, be it
                  religious, political, cultural, gender, sexuality, etc. VGO is
                  an inclusive entity where we gladly and proudly accept
                  differences as long as we respect each other and trust in
                  sustainability.
                </p>
              </div>
            </article>
          </div>
          {/* <!-- Our Aims --> */}
          <div className="our-approaches container">
            <h3 className="our-approaches-heading heading-tertiary text-capitalize">
              Our Aims
            </h3>
            <ul className="approaches flex flex-column">
              <li className="approaches__approach flex flex-items-center">
                <i className="bx bx-check approaches__icon"></i>
                <span>Creating a global platform to create awareness</span>
              </li>
              <li className="approaches__approach flex flex-items-center">
                <i className="bx bx-check approaches__icon"></i>
                <span> Partnering with the national governments and international institutes/organisations to influence policy-level changes.
                </span>
              </li>
              <li className="approaches__approach flex flex-items-center">
                <i className="bx bx-check approaches__icon"></i>
                <span
                >Conducting research to promote evidence-based advocacy and prototype new ideas.</span
                >
              </li>
              <li className="approaches__approach flex flex-items-center">
                <i className="bx bx-check approaches__icon"></i>
                <span
                >Making eco-friendly lifestyle accessible.  </span
                >
              </li>
            </ul>
          </div>
        </section>
        {/* <!---------------X- Core Values Ends -X---------------> */}

        {/* <!----------------- Core Objective -----------------> */}
        <section className="our-objective-section">
          <div className="container section-title">
            <h2
              className="section-title__heading heading-secondary text-capitalize text-center"
            >
              Our Objectives
            </h2>
          </div>
          <div className="container objective">
            <div className="objective__content grid ">
              <figure className="objective__img-box">
                <img
                  src="/src/assets/images/about/objective.jpg"
                  alt=""
                  className="objective__img"
                />
              </figure>
              <div className="objective__text-box">
                <p className="objective__text flex flex-column flex-justify-start">


                </p>

                <ul className="objective__list flex flex-column">
                  <li className="objective__list-item  ">
                    <li className="objective__list-item  flex flex-items-start ">
                      <i className="bx bx-check-double objective__icon"></i>
                      <span >Developing a marketplace (initially a virtual one) to connect eco-friendly product buyers and sellers. </span>
                    </li>

                    <li className="objective__list-item  flex flex-items-start ">
                      <i className="bx bx-check-double objective__icon"></i>
                      <span >Developing a marketplace (initially a virtual one) to connect eco-friendly product buyers and sellers. </span>
                    </li>
                    <li className="objective__list-item   flex flex-items-start">
                      <i className="bx bx-check-double objective__icon"></i>
                      <span > Eco-tourism </span>
                    </li>
                    <li className="objective__list-item flex flex-items-start">
                      <i className="bx bx-check-double objective__icon"></i>
                      <span> Collaborating with global bodies such as the European Union (EU), United Nations (UN) bodies, Erasmus, national governments
                        (especially from the Global South), international and local NGOs, etc. </span>

                    </li>
                    <li className="objective__list-item flex flex-items-start">
                      <i className="bx bx-check-double objective__icon"></i>
                      <span> Prototyping projects to iterate and pilot sustainable ideas.</span>
                    </li>
                  </li>
                  <li className="objective__list-item flex flex-items-start">
                    <i className="bx bx-check-double objective__icon"></i>
                    <span>Providing consultancy support to sustainable business ideas and initiatives.  </span>
                  </li>
                  <li className="objective__list-item flex flex-items-start">
                    <i className="bx bx-check-double objective__icon"></i>
                    <span> Developing and providing branding and marketing solutions for eco-friendly Green entrepreneurs. </span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!----------------- Core Objective Ends -----------------> */}

        <section className="our-team-section">
          <div className="container section-title">
            <h2
              className="section-title__heading heading-secondary text-capitalize text-center"
            >
              Our Team
            </h2>
          </div>
          <div className="container">
            <div className="our-team our-team--1">
              <h3 className="our-team-heading heading-tertiary">
                Board of Directors
              </h3>
              <div className="teams grid ">
                <article className="team">
                  <figure className="team__img-box">
                    <img
                      src="/src/assets/images/team/Jim.jpg"
                      alt="Md Alif Al Montasir Jim"
                      className="team__img"
                    />
                  </figure>
                  <div className="team__content">
                    <p className="team__name">Md Alif Al Montasir Jim</p>
                    <p className="team__job">Founder & Chairperson</p>
                    <a
                      href="https://www.linkedin.com/in/montasir-jim-techshoi/"
                      className="team__linkedin"
                    >Linkedin <i className="bx bxl-linkedin-square"></i
                    ></a>
                  </div>
                </article>
                <article className="team">
                  <figure className="team__img-box">
                    <img
                      src="/src/assets/images/team/Sonia.jpg"
                      alt="Sonia sahid"
                      className="team__img"
                    />
                  </figure>
                  <div className="team__content">
                    <p className="team__name">Sonia Shahid</p>
                    <p className="team__job">Advisor & Member Secretary</p>
                    <a
                      href="https://www.linkedin.com/in/sonia-shahid-1835200357/"
                      className="team__linkedin"
                    >Linkedin <i className="bx bxl-linkedin-square"></i
                    ></a>
                  </div>
                </article>
                <article className="team">
                  <figure className="team__img-box">
                    <img
                      src="/src/assets/images/team/Sohan.jpg"
                      alt="Sohanur Rahman"
                      className="team__img"
                    />
                  </figure>
                  <div className="team__content">
                    <p className="team__name">Sohanur Rahman</p>
                    <p className="team__job">Advisor (Climate Action)</p>
                    <a
                      href="https://www.linkedin.com/in/sohanur-rahman-42872412b/"
                      className="team__linkedin"
                    >Linkedin <i className="bx bxl-linkedin-square"></i
                    ></a>
                  </div>
                </article>
              </div>
            </div>
            {/* <!-- Our team 2 --> */}
            <div className="our-team our-team--2">
              <h3 className="our-team-heading heading-tertiary">
                International Governing Committee
              </h3>
              <div className="teams grid ">
                <article className="team">
                  <figure className="team__img-box">
                    <img
                      src="/src/assets/images/team/Abid.jpeg"
                      alt="Md Abid Hasan"
                      className="team__img"
                    />
                  </figure>
                  <div className="team__content">
                    <p className="team__name">Md Abid Hasan</p>
                    <p className="team__job">Lead, Research & Advocacy</p>
                    <a
                      href="https://www.linkedin.com/in/abidhasan2400/"
                      className="team__linkedin"
                    >Linkedin <i className="bx bxl-linkedin-square"></i
                    ></a>
                  </div>
                </article>
                <article className="team">
                  <figure className="team__img-box">
                    <img
                      src="/src/assets/images/team/Fiaz.jpg"
                      alt="Mazedur Rahim Fiaz"
                      className="team__img"
                    />
                  </figure>
                  <div className="team__content">
                    <p className="team__name">Mazedur Rahim Fiaz</p>
                    <p className="team__job">Lead, Creative Design</p>
                    <a
                      href="https://www.linkedin.com/in/mazedurrahimfiaz/"
                      className="team__linkedin"
                    >Linkedin <i className="bx bxl-linkedin-square"></i
                    ></a>
                  </div>
                </article>
                <article className="team">
                  <figure className="team__img-box">
                    <img
                      src="/src/assets/images/team/Ghurni.jpg"
                      alt="Ghurni Bhattacharya"
                      className="team__img"
                    />
                  </figure>
                  <div className="team__content">
                    <p className="team__name">Ghurni Bhattacharya</p>
                    <p className="team__job">
                      International Outreach & Program Coordinator
                    </p>
                    <a
                      href="https://www.linkedin.com/in/ghurni-bhattacharya-552506180/"
                      className="team__linkedin"
                    >Linkedin <i className="bx bxl-linkedin-square"></i
                    ></a>
                  </div>
                </article>
                <article className="team">
                  <figure className="team__img-box">
                    <img
                      src="/src/assets/images/team/Nabin.JPG"
                      alt="Nabin Bhattarai"
                      className="team__img"
                    />
                  </figure>
                  <div className="team__content">
                    <p className="team__name">Nabin Bhattarai</p>
                    <p className="team__job">Country Representative, Nepal</p>
                    <a
                      href="https://www.linkedin.com/in/environmentnabin/"
                      className="team__linkedin"
                    >Linkedin <i className="bx bxl-linkedin-square"></i
                    ></a>
                  </div>
                </article>
                <article class="team">
                <figure class="team__img-box">
                  <img
                    src="assets/images/team/ahmad.jpg"
                    alt="Ahmad Abueisa"
                    class="team__img"
                  />
                </figure>
                <div class="team__content">
                  <p class="team__name">Ahmad Abueisa</p>
                  <p class="team__job">Head of Supply Chain Development-Advisor, Hungary 

                  </p>
                  <a
                    href="https://www.linkedin.com/in/ahmadabueisa/"
                    class="team__linkedin"
                    >Linkedin <i class="bx bxl-linkedin-square"></i
                  ></a>
                </div>
              </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;