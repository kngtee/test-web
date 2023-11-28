import Hero from "@/components/Hero";

const About = () => {
  return (
    <>
      <Hero
        title="All you need to know about"
        subtitle="Custodian Life Assurance"
        description="Your dedicated ally in ensuring life's uncertainties and achieving financial aspirations. Explore Custodian Life Assurance today."
      />
      {/* About Us Write up */}
      <section>
        <div className="container">
          <h1 className="heading">About Us</h1>
          <p className="text__para">
            Custodian Life Assurance Limited (formerly Crusader Life Insurance
            Limited) is a specialist life insurance company incorporated in
            Nigeria and licensed by the National Insurance Commission to
            transact all classes of life insurance business. Custodian Life
            Assurance Limited (CLA) is the subsidiary of Custodian Investment
            Plc, the holding company which is wholly owned by Nigerians.
          </p>
          <p className="text__para">
            The Company is quoted on the Nigerian Stock Exchange. CLA started
            insurance business in 1956 as a foreign office of Crusader Insurance
            Company Ltd, Reigate UK. It became a public company in 1989 and
            listed on the Nigeria Stock Exchange in 1990.
          </p>
          <p className="text__para">
            Following the merger of the parent company, Crusader Nigeria Plc
            with the Custodian and Allied Insurance Plc, it was renamed
            Custodian Life Assurance Limited to reflect the new brand of the
            emerging entity. Other companies in the Custodian Investment Plc
            Group are:
            <ol>
              <li>Custodian and Allied Insurance Limited</li>
              <li>CrusaderSterling Pensions Limited</li>
              <li>UPDC Plc</li>
              <li>Custodian Trustees Limited</li>
            </ol>
          </p>
        </div>
      </section>

      {/* Vision, Mission & Goals */}
      <section>
        <div className="conatiner">
          <div>
            <div className="vision">
              <span>Our Vision</span>
              <h1>To be African's Insurer of Choice.</h1>
            </div>
            <div className="mission">
              <span>Our Mission</span>
              <p>
                CLA’s mission is to develop and deliver innovative insurance
                products that best satisfy customer needs, whilst operating a
                highly profitable, efficient, resourceful and ethical
                organisation.
              </p>
            </div>
          </div>
          <div className="goals">
            <span>Our Goals</span>
            <ol>
              <li>
                To position ourselves strategically in the market and be
                perceived as a modern, dynamic and resourceful insurance
                company.
              </li>
              <li>
                To strike a fine balance between the businesses of sound
                underwriting, cost control and service on one hand and
                investment on the other.
              </li>
              <li>
                To assemble a seasoned team of professionals who would, with the
                aid of modern information processing techniques, deliver
                qualitative, fast and efficient services to our select
                clientele.
              </li>
              <li>
                To provide services that extend beyond national frontiers and
                ultimately establish and operate in the ECOWAS sub-region.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
