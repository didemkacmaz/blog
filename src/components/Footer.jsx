import React, { Component } from "react";
import styles from "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" class="footer">
        <nav class="top-nav">
          <a href="/" class="logo" />
          <div class="links">
            <a href="#">
              <span>About</span>
              <span>About</span>
            </a>{" "}
          </div>
          <div class="links">
            <a href="#">
              <span>Contact</span>
              <span>Contact</span>
            </a>{" "}
          </div>
        </nav>
        <h1>Hello my name is Stephen Burgess</h1>
        <div class="container">
          <div id="/about/" class="page">
            <div class="content">
              <p>
                I am a Developer from England, currently based in San Francisco.
              </p>
              <p>
                I earn my bread with HTML, CSS &amp; JavaScript development but
                I'll happily play around with any language &amp; have a passion
                for learning new things. I really like SASS, monkeys &amp;
                Arsenal Football Club.
              </p>
            </div>
          </div>
          <div id="/contact/" class="page">
            <div class="content">
              <p>
                There's plenty of ways to get in touch with me. You can message
                me on Twitter, connect with me on LinkedIn or write me an
                Internet letter.
              </p>
              <div class="contact-buttons">
                <a class="contact-button twitter" href="#">
                  <span>t</span>
                  <span>t</span>
                </a>
                <a class="contact-button linkedin" href="#">
                  <span>i</span>
                  <span>i</span>
                </a>
                <a class="contact-button email" href="#">
                  <span>e</span>
                  <span>e</span>
                </a>
                <a class="contact-button codepen" href="#">
                  <span>c</span>
                  <span>c</span>
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
      </footer>
    );
  }
}
export default Footer;
