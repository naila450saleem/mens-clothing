import React from "react";
import "./Sitemap.css";

const Sitemap = () => {
  return (
    <div className="sitemap1">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div className="row">
          <div className="col-lg-12">
            <div className="paginations_002">
              <div className="paginations_001">
                <a href="https://coresportswears.com/">Home</a>
                <span>/</span>Sitemap
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Left Side - Accordion Menu */}
          <div className="col-lg-3">
            <div 
              className="menu_title_002002202" 
              style={{ 
                paddingBottom: "12px",
                backgroundColor: "#000",
                textAlign: "center",
                padding: "22px 0",
                display: "none"
              }}
            >
              <img 
                src="https://coresportswears.com/img/left_menu_titkle.png" 
                style={{ width: "100%" }} 
                alt="Menu Title" 
              />
            </div>

            <ul className="cd-accordion-menu animated">
              {/* Ski & Snow Wear */}
              <li className="has-children">
                <input type="checkbox" name="1" id="1" />
                <label htmlFor="1">Ski & Snow Wear</label>
                <ul>
                  <li><a href="https://coresportswears.com/products/ski-snow-wear/ski-snowboarding-pants.html">Ski & Snowboarding Pants</a></li>
                  <li><a href="https://coresportswears.com/products/ski-snow-wear/rain-jackets.html">Rain Jackets & Suits</a></li>
                  <li><a href="https://coresportswears.com/products/ski-snow-wear/base-layer-jumpsuits.html">Base Layer Jumpsuits</a></li>
                  <li><a href="https://coresportswears.com/products/ski-snow-wear/ski-snow-board-coversbags.html">Ski & Snow Board Covers/Bags</a></li>
                  <li><a href="https://coresportswears.com/products/ski-snow-wear/ski-snowboarding-jackets.html">Ski & Snowboarding Jackets</a></li>
                  <li><a href="https://coresportswears.com/products/ski-snow-wear/puffer-down-jackets.html">Puffer & Down Jackets</a></li>
                  <li><a href="https://coresportswears.com/products/ski-snow-wear/windbreakers.html">Windbreakers</a></li>
                  <li><a href="https://coresportswears.com/products/ski-snow-wear/pullover-tall-hoodies.html">Pullover Tall Hoodies</a></li>
                  <li><a href="https://coresportswears.com/products/ski-snow-wear/snow-gloves.html">Snow Gloves & Mittens</a></li>
                  <li><a href="https://coresportswears.com/products/ski-snow-wear/ski-balaclava-neck-warmers.html">Ski Balaclava Neck Warmers</a></li>
                  <li><a href="https://coresportswears.com/products/ski-snow-wear/beanies.html">Beanies</a></li>
                </ul>
              </li>

              {/* Street Wears */}
              <li className="has-children">
                <input type="checkbox" name="2" id="2" />
                <label htmlFor="2">Street Wears</label>
                <ul>
                  <li><a href="https://coresportswears.com/products/street-wears/pullover-hoodies.html">Pullover Hoodies</a></li>
                  <li><a href="https://coresportswears.com/products/street-wears/onesies.html">Onesies</a></li>
                  <li><a href="https://coresportswears.com/products/street-wears/casual-shorts.html">Casual Shorts</a></li>
                  <li><a href="https://coresportswears.com/products/street-wears/beach-shorts.html">Beach Shorts</a></li>
                  <li><a href="https://coresportswears.com/products/street-wears/bomber-jackets.html">Bomber Jackets</a></li>
                  <li><a href="https://coresportswears.com/products/street-wears/varsity-jackets.html">Varsity Jackets</a></li>
                  <li><a href="https://coresportswears.com/products/street-wears/zipper-hoodies.html">Zipper Hoodies</a></li>
                  <li><a href="https://coresportswears.com/products/street-wears/tie-dye-hoodies.html">Tie & Dye Hoodies</a></li>
                  <li><a href="https://coresportswears.com/products/street-wears/sweat-shirts.html">Sweat Shirts</a></li>
                  <li><a href="https://coresportswears.com/products/street-wears/flannel-shirts.html">Flannel Shirts</a></li>
                  <li><a href="https://coresportswears.com/products/street-wears/sweat-pants-bottoms.html">Sweat Pants & Bottoms</a></li>
                  <li><a href="https://coresportswears.com/products/street-wears/tee-shirts.html">Tee Shirts</a></li>
                  <li><a href="https://coresportswears.com/products/street-wears/polo-shirts.html">Polo Shirts</a></li>
                  <li><a href="https://coresportswears.com/products/street-wears/singlets-tops.html">Singlets & Tops</a></li>
                </ul>
              </li>

              {/* Custom Team Wear */}
<li className="has-children">
  <input type="checkbox" name="3" id="3" />
  <label htmlFor="3">Custom Team Wear</label>
  <ul>
    <li><a href="https://coresportswears.com/products/custom-team-wear/soccer-uniforms.html">Soccer Uniforms</a></li>
    <li><a href="https://coresportswears.com/products/custom-team-wear/rugby-head-guards.html">Rugby Head Guards</a></li>
    <li><a href="https://coresportswears.com/products/custom-team-wear/sports-socks.html">Sports Socks</a></li>
    <li><a href="https://coresportswears.com/products/custom-team-wear/baseball-uniform.html">Baseball Uniform</a></li>
    <li><a href="https://coresportswears.com/products/custom-team-wear/basketball-uniform.html">Basketball Uniform</a></li>
  </ul>
</li>

{/* Fitness Wear */}
<li className="has-children">
  <input type="checkbox" name="4" id="4" />
  <label htmlFor="4">Fitness Wear</label>
  <ul>
    <li><a href="https://coresportswears.com/products/fitness-wear/leggings.html">Leggings</a></li>
    <li><a href="https://coresportswears.com/products/fitness-wear/track-suits.html">Track Suits</a></li>
    <li><a href="https://coresportswears.com/products/fitness-wear/hoodies.html">Hoodies</a></li>
    <li><a href="https://coresportswears.com/products/fitness-wear/jogger-pants.html">Jogger Pants</a></li>
    <li><a href="https://coresportswears.com/products/fitness-wear/running-shorts.html">Running Shorts</a></li>
  </ul>
</li>

{/* Head Wear & Accessories */}
<li className="has-children">
  <input type="checkbox" name="5" id="5" />
  <label htmlFor="5">Head Wear & Accessories</label>
  <ul>
    <li><a href="https://coresportswears.com/products/head-wear-accessories/bandana-tubular.html">Bandana Tubular</a></li>
    <li><a href="https://coresportswears.com/products/head-wear-accessories/head-wears.html">Head Wears</a></li>
    <li><a href="https://coresportswears.com/products/head-wear-accessories/arm-warmer.html">Arm Warmer</a></li>
    <li><a href="https://coresportswears.com/products/head-wear-accessories/leg-warmer.html">Leg Warmers</a></li>
    <li><a href="https://coresportswears.com/products/head-wear-accessories/hats.html">Hats</a></li>
  </ul>
</li>

{/* Bags */}
<li className="has-children">
  <input type="checkbox" name="6" id="6" />
  <label htmlFor="6">Bags</label>
  <ul>
    <li><a href="https://coresportswears.com/products/bags/sports-backpack.html">Sports Backpack</a></li>
    <li><a href="https://coresportswears.com/products/bags/fanny-bags.html">Fanny Bags</a></li>
    <li><a href="https://coresportswears.com/products/bags/duffel-bags.html">Duffel Bags</a></li>
    <li><a href="https://coresportswears.com/products/bags/tote-bags-shopping-bags.html">Tote Bags/Shopping Bags</a></li>
    <li><a href="https://coresportswears.com/products/bags/snowboarding-bags.html">Snowboard Bags</a></li>
  </ul>
</li>
              
            </ul>
          </div>

          {/* Right Side - Sitemap Links */}
          <div className="col-lg-9">
            <div className="sitemap">
              <ul>
                <li><a href="https://coresportswears.com/home.html">Home</a></li>
                <li><a href="https://coresportswears.com/about.html">about us</a></li>
                <li>
                  <a href="">our categories</a>
                  <ul className="submenu">
                    <li>
                      <a href="https://coresportswears.com/categories/ski-snow-wear.html">Ski & Snow Wear</a>
                      <ul className="submenu">
                        <li><a href="https://coresportswears.com/products/ski-snow-wear/ski-snowboarding-pants.html">Ski & Snowboarding Pants</a></li>
                        <li><a href="https://coresportswears.com/products/ski-snow-wear/rain-jackets.html">Rain Jackets & Suits</a></li>
                        <li><a href="https://coresportswears.com/products/ski-snow-wear/base-layer-jumpsuits.html">Base Layer Jumpsuits</a></li>
                        <li><a href="https://coresportswears.com/products/ski-snow-wear/ski-snow-board-coversbags.html">Ski & Snow Board Covers/Bags</a></li>
                        <li><a href="https://coresportswears.com/products/ski-snow-wear/ski-snowboarding-jackets.html">Ski & Snowboarding Jackets</a></li>
                      </ul>
                    </li>
                    {/* Other categories would follow the same pattern */}
                    {/* ... */}
                    \
                  </ul>
                </li>
                <li><a href="https://coresportswears.com/catalouge.html">cataloug</a></li>
                <li><a href="https://coresportswears.com/sitemap.html">sitemap</a></li>
                <li><a href="https://coresportswears.com/privacy_policy.html">privacy policy</a></li>
                <li><a href="https://coresportswears.com/contact.html">contact us</a></li>
              </ul>
            </div>
            {/* Newsletter Section */}
      <div className="newsletter-section">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <input type="email" placeholder="Enter Your Email Address..." />
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;