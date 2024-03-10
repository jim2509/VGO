import { Link } from "react-router-dom";


const Talpata = () => {
  return (

    <main className="main">
      <section className="subpage-hero talpata-hero grid grid-center">
        <div className="container subpage__container text-center">
          <h1 className="heading-primary subpage-hero__heading">Talpata magazine</h1>
          <p className="subpage-hero__texts flex flex-center">
            <Link to="/" className="subpage-hero__text">Home</Link>
            <i className="bx bxs-chevrons-right subpage-hero__icon"></i>
            <Link to="/Talpata" className="subpage-hero__text">Talpata</Link>
          </p>
        </div>
      </section>

      {/* <!----------------- About talpata starts -----------------> */}
      <section className="about-talpata-section">
        <div className="container section-title">
          <h2 className="section-title__heading heading-secondary text-center">
            About talpata
          </h2>
        </div>
        <div className="container talpata grid ">
          <div className="talpata__text-box">
            <b>Tal Pata,</b> an online sustainability magazine, is a collection of feature stories,
            thoughts, and creative contents from our operating countries. TalPata is our paperless initiative
            for promoting eco-friendly print media. <br />

            Talpata is an environmental
            e-magazine and a small effort towards the vision of restoration, re-imagination,
            and recreation created by Vision Green Organization.
          </div>
          <figure className="talpata__img-box">
            <img src="/src/assets/images/talpata/Tal Pata 2.jpg" alt="magazine on bed and a cup of coffee" className="talpata__img" />
          </figure>
        </div>
      </section>
      {/* <!---------------X- About talpata ends -X---------------> */}

      <section className="grab-talpata-section">
        <div className="container section-title">
          <h2 className="section-title__heading heading-secondary text-center">
            Download Talpata
          </h2>
        </div>
        <div className="container magazines flex flex-center">
          <article className="magazine magazine--1">
            <img src="/src/assets/images/talpata/talpata-v1.jpg" className="magazine__img" alt="talpata volume 1" />
            <a href="#" className="btn btn--primary btn--flex magazine__btn magazine__btn--1" data-volume="1">Download V1 <i className='bx bxs-download btn__icon'></i></a>
          </article>
          <article className="magazine magazine--2">
            <img src="/src/assets/images/talpata/talpata-v2.jpg" className="magazine__img" alt="talpata volume 2" />
            <a href="#" className="btn btn--secondary btn--flex magazine__btn magazine__btn--2" data-volume="2">Download V2 <i className='bx bxs-download btn__icon'></i></a>
          </article>
        </div>
      </section>

      {/* <!----------------- Magazine download modal -----------------> */}

      <section className="magazine-download">
        <arrticle className="magazine-modal">
          <figure className="magazine-modal__img-wrapper">
            <img src="/src/assets/images/talpata/talpata-v1-inner.jpg" alt="talpata magazine v1" className="magazine-img" />
          </figure>
          <div className="magazine-modal__content">
            <h3 className="magazine-name heading-tertiary text-capitalize">
              Talpata magazine
            </h3>
            <p className="magazine-text">
              This magazine is totally free of cost and downloadble. Click the button below to download TALPATA.
            </p>
            <div className="magazine-btns flex flex-items-center">
              <a href="#" target="_blank" className="btn btn--primary btn--flex magazine-download-btn">Download <i className='bx bx-download btn__icon'></i></a>
              <button className="btn btn--secondary btn--flex close-modal">Close <i className='bx bx-cross btn__icon'></i></button>
            </div>
          </div>
        </arrticle>
      </section>
    </main>
  );
};

export default Talpata;