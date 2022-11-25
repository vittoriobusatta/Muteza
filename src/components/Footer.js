import React from "react";
import footer from "../assets/images/footer.jpg";

function Footer() {
  return (
    <footer className="footer" data-scroll-section data-scroll-section-inview>
      <div className="footer_content">
        <div className="c-footer_image col-6">
          <img src={footer} alt="Get Your Serum Now" />
        </div>
        <div className="c-footer_text col-6">
          <div className="footer--cta">
            <h2 data-scroll className="size_h2 detect is-inview">
              <span className="row">
                <span>Ready to</span>
              </span>
              <span className="row">
                <span>Transform</span>
              </span>
              <span className="row">
                <span>Your Skin?</span>
              </span>
            </h2>
            <a href="/#">
              SEE PRODUCT<span>⟶</span>
            </a>
          </div>
          <div className="footer--links">
            <h3 className="c-footer_logo">MUTEZA</h3>
            <div>
              <ul className="col-8">
                <li>
                  <a href="/#">Product</a>
                </li>
                <li>
                  <a href="/#">How it works</a>
                </li>
                <li>
                  <a href="/#">Faq</a>
                </li>
                <li>
                  <a href="/#">Reviews</a>
                </li>
                <li>
                  <a href="/#">Blog</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://github.com/vittoriobusatta">
                    Github
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/busvtta">
                    Twitter
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.behance.net/fltzwoo">
                    Behance
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer--copy">
              <p className="col-8">
                © 2020 Muteza <br />
                All rights reserved to
                <a
                  target="_blank" rel="noreferrer"
                  href="https://abhishekjha.me/"
                >
                  &nbsp; Abhishek Jha
                </a>
                <br />
                Rebuild by
                <a href="/#">&nbsp;Vittorio</a>
              </p>
              <p></p>
              <div>
                <a href="/#">Privacy Policy</a>
                <br />
                <a href="/#" className="u-copy">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_responsive">
        <div>
          <ul className="col-8">
            <li>
              <a href="/#">Product</a>
            </li>
            <li>
              <a href="/#">How it works</a>
            </li>
            <li>
              <a href="/#">Faq</a>
            </li>
            <li>
              <a href="/#">Reviews</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
          </ul>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/vittoriobusatta">
                Github
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/busvtta">
                Twitter
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.behance.net/fltzwoo">
                Behance
              </a>
            </li>
          </ul>
        </div>
        <div className="footer--copy">
          <p className="col-8">
            © 2022 Muteza |<br />
            All rights reserved to
            <a target="_blank" rel="noreferrer" href="https://abhishekjha.me">
              &nbsp; Abhishek Jha
            </a>
            <br />
            Rebuild by
            <a href="https://www.vittoriobusatta.fr/">&nbsp;Vittorio</a>
          </p>
          <p></p>
          <div>
            <a href="/#">Privacy Policy</a>
            <br />
            <a href="/#" className="u-copy">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
