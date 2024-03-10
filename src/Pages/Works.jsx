import { Link } from "react-router-dom"


const Works = () => {
  return (
    <main className="main">
      <section className="subpage-hero ourworks-hero grid grid-center">
        <div className="container subpage__container text-center">
          <h1 className="heading-primary subpage-hero__heading">
            Our works & Achievements
          </h1>
          <p className="subpage-hero__texts flex flex-center">
            <Link to="/" className="subpage-hero__text">Home</Link>
            <i className="bx bxs-chevrons-right subpage-hero__icon"></i>
            <Link to="/Works" className="subpage-hero__text">Our works</Link>
          </p>
        </div>
      </section>

      {/* <!----------------- Our Work Starts -----------------> */}
      <section className="our-work-section">
        <div className="section-title container">
          <h2
            className="section-title__heading heading-secondary text-center text-capitalize"
          >
            Our works
          </h2>
        </div>
        <div className="works container grid ">
          <article className="work" data-work-count="1">
            <h3 className="work__title heading-tertiary text-capitalize">
              To disseminate digital “Sustainability” pledges
            </h3>
            <p className="work__text">
              To be signed and followed by children and young people to increase
              climate literacy and awareness
            </p>
          </article>
          <article className="work" data-work-count="2">
            <h3 className="work__title heading-tertiary text-capitalize">
              To organize webinars and workshops
            </h3>
            <p className="work__text">
              To provide a platform to the unheard voices who are the worst
              victims of climate change
            </p>
          </article>
          <article className="work" data-work-count="3">
            <h3 className="work__title heading-tertiary text-capitalize">
              To publish the first-ever sustainability e-magazine of South Asia,
              “Tal Pata”
            </h3>
            <p className="work__text">
              Our sustainability e-magazine, Tal Pata, is being published mainly
              in English and other South Asian languages. To find more,
              <a href="talpata.html">click here</a>
            </p>
          </article>
          <article className="work" data-work-count="4">
            <h3 className="work__title heading-tertiary text-capitalize">
              To facilitate the Climate Ambassador program
            </h3>
            <p className="work__text">
              In this program, the selected CAs iterate and prototype project
              ideas to minimize environmental degradation and achieve a
              sustainable solution
            </p>
          </article>
          <article className="work" data-work-count="5">
            <h3 className="work__title heading-tertiary text-capitalize">
              To conduct research and advocacy
            </h3>
            <p className="work__text">
              With an aim to understand the deeper linkages behind climate
              change and sustainability. The research we conduct helps us to do
              evidence-based advocacy to achieve sustainability
            </p>
          </article>
        </div>
        {/* <!-- Our Achievements --> */}
        <div className="our-achievements container">
          <h3 className="our-achievements-heading heading-tertiary text-capitalize">
            our achievements
          </h3>
          <ul className="achievements grid ">
            <li className="achievement">
              <div className="achievement__icon bx bxs-medal"></div>
              <span className="achivement__text"
              >To date, 3000 digital pledges have been signed (and are being
                continued) by the youth from arounf the world <a href="english.html">Find the pledges here</a></span
              >
            </li>
            <li className="achievement">
              <div className="achievement__icon bx bxs-medal"></div>
              <span className="achivement__text"
              >One research study on Ecocide has been presented at the
                International Conference on Political Economy of Climate Change,
                organized by the Association of Asia Scholars (AAS). To read the
                paper,
                <a href=" https://doi.org/10.1142/13067">click here</a></span
              >
            </li>
            <li className="achievement">
              <div className="achievement__icon bx bxs-medal"></div>
              <span className="achivement__text"
              >One research paper on Rainwater Management has been published
                in a Scopus-indexed journal, Water Policy. A Visiting Research
                Fellow from the University of Liberal Arts Bangladesh (ULAB) has
                supervised this research project, and Lead – Research & Advocacy
                of VGO was the lead author.
                <a href="https://doi.org/10.2166/wp.2022.290"
                >Read the article here</a
                ></span
              >
            </li>
            <li className="achievement">
              <div className="achievement__icon bx bxs-medal"></div>
              <span className="achivement__text"
              >More than 5,000 people have been directly impacted and reached
                through our campaigns and activities</span
              >
            </li>
            <li className="achievement">
              <div className="achievement__icon bx bxs-medal"></div>
              <span className="achivement__text"
              >The Lead - Research & Advocacy of VGO led a team of 5 who
                conducted a study, “Eco-friendly Entrepreneurship to Promote
                Plastic Alternatives.” The article is published in Notitia.
                <a href=" https://hrcak.srce.hr/287421"
                >Read the article here</a
                ></span
              >
            </li>
          </ul>
        </div>
      </section>
      {/* <!---------------X- Our Work Ends -X---------------> */}

      <section className="work-with-us-section">
        <div className="section-title container">
          <h2
            className="section-title__heading heading-secondary text-center text-capitalize"
          >
            Work with us
          </h2>
        </div>
        <div className="jobs container grid grid-justify-center">
          <div className="job">
            <h3 className="job__title heading-tertiary">Be a Volunteer</h3>
            <p className="job__text">
              The volunteer program of VGO is a 6-month program. As a volunteer,
              you will assist the project team in implementing the planned
              activities, collect funds, and represent VGO within your network.
              At the core of our design, we put our volunteers. Our volunteers
              are our strength and pillar of the organization.
            </p>
            <p className="job__text mgt-md">
              After successful completion of the volunteer program, you will be
              awarded a certificate. Moreover, we would like to offer full
              membership to our successful volunteers. As a full member of the
              organization, you will be included in the relevant committees and
              contribute strategically to the sustainability journey in South
              Asia.
            </p>
          </div>
          <div className="job">
            <h3 className="job__title heading-tertiary">Intership</h3>
            <p className="job__text">
              VGO recruits undergraduate/graduate students from universities and
              colleges studying any relevant subjects or any fields who has strong passion
              in social work and sustainabilty as interns for a 3-month period. During the
              internship engagement, one can develop organizational management
              skills, interpersonal communication skills, and writing skills.
            </p>
            <p className="job__text mgt-md">
              We expect that our interns will actively take part in any of the
              project activities, fund-raising activities, communication
              activities, etc., according to their interests and relevance to
              their education and career.
            </p>
            <p className="job__text mgt-md">
              After the successful completion of the internship, you will get a
              certificate and a letter of recommendation. Your further
              involvement with the organization will be highly appreciated.
            </p>
          </div>
          <div className="job">
            <h3 className="job__title heading-tertiary">Campus Ambassador</h3>
            <p className="job__text">
              Campus Ambassadors will represent VGO on their own campuses.
              Campus Ambassadors will be our focal point for the respective
              institutes. We believe campus ambassadors will aim to increase the
              branding/networking of VGO. Furthermore, campus ambassadors will
              bring new volunteers to the organization from their network.
            </p>
          </div>
          <div className="job">
            <h3 className="job__title heading-tertiary">Partnership</h3>
            <p className="job__text">
              We are open to partnerships with like-minded organizations in Europe, Asia or around the world. If you
              believe in climate action, environmental safeguarding,
              sustainability, and inclusive development, then VGO is keen to be
              your partner and achieve the goals together. Write us in our email
              box or fill out the message box in the contact page. Our team will reach out to you soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Works;