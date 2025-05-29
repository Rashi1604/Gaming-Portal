import React from "react";

const Footer = () => {

  return (
    <footer>
      <div className="footer">
        {/* <!-- newsletter-area --> */}
        {/* <div className="newsletter-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="newsletter-wrap">
                  <div className="section-title newsletter-title">
                    <h2>
                      Our <span>Newsletter</span>
                    </h2>
                  </div>
                  <div className="newsletter-form">
                    <form action="#">
                      <div className="newsletter-form-grp">
                        <i className="far fa-envelope"></i>
                        <input type="email" placeholder="Enter your email..." />
                      </div>
                      <button>
                        SUBSCRIBE <i className="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <!-- newsletter-area-end --> */}

      <div className="copyright-wrap">
        <div className="container">
          <div className="row flex justify-evenly">
            <div className="col-lg-12 col-md-12">
              <div className="copyright-text">
                <p>
                   © {new Date().getFullYear()} <a style={{
                    color:"orange",
                   }}>Visiontrek Communication.</a>Tous droits réservés
                </p>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;