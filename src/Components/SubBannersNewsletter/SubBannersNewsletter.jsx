import React from "react";
import "./SubBannersNewsletter.css";

// Import images from src/assets
import subBannerImg from "../../assets/sub_banner.jpg";
import certificatesImg from "../../assets/certificates.png";
// import footLogo from "../../assets/foot_loog.png";

const SubBannersNewsletter = () => {
  return (
    <div>
      {/* Sub Banners Section */}
      <div className="sub_banners">
        <div className="row">
          <div className="col-lg-6">
            <div className="left">
              <h1>core sports<br /> video</h1>
              <iframe
                width="100%"
                height="450px"
                src="https://www.youtube.com/embed/WNyCe7QOGfE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right">
              <a href="https://coresportswears.com/catalouge.php">
                <img src={subBannerImg} alt="Sub Banner" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="news_letter">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="left">
                <div className="title_section">
                  <h1>Subscribe to our newsletter</h1>
                </div>
                <div className="news_letter_002">
                  <div className="news_letter_001">
                    <form
                      action="https://coresportswears.com/submit_email.php"
                      method="post"
                    >
                      <div className="form-group">
                        <div className="arrow_001"></div>
                        <input
                          type="email"
                          className="form-control"
                          name="signup"
                          placeholder="Enter Your Email Address..."
                          required
                        />
                        <div className="arrow_002"></div>
                      </div>
                      <button type="submit" className="btn">
                        <span>
                          <i className="fas fa-location-arrow"></i>
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="right">
                <img src={certificatesImg} alt="Certificates" />
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default SubBannersNewsletter;
