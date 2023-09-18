import styled from "styled-components";
import logo from "../public/favicon.png";
import Link from "next/link";

export default function Footer(){

const FooterSection = styled.section`
#footer {
    font-size: min(1.2vw, 1em);
  }
  #footer .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-around;
    width: 96%;
    max-width: 82.5em;
    margin: auto;
    padding: 0;
  }
  #footer .left-section {
    width: 25.5625em;
    margin: 0;
    text-align: left;
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
  #footer .left-section .logo {
    text-align: left;
    margin-left: 0;
    height: auto;
  }
  #footer .left-section p {
    text-align: left;
    margin-left: 0;
  }
  #footer .right-section {
    margin: 0;
    width: 60%;
    max-width: none;
  }
  #footer .right-section .lists {
    width: 100%;
    margin: 0;
    max-width: initial;
    display: flex;
    gap: 5em;
    align-items: start;

  }
  #footer .right-section .lists ul {
    margin-top: 0;
  }
  #footer .right-section .lists ul:nth-of-type(3) li:first-of-type {
    margin-bottom: 0;
  }
  #footer .right-section .lists ul li a {
    position: relative;
  }
  #footer .right-section .lists ul li a:before {
    content: '';
    position: absolute;
    display: block;
    height: 0.11111111em;
    width: 0%;
    background: var(--primary);
    opacity: 1;
    bottom: -0.16666667em;
    left: 0;
    -webkit-transition: width .3s;
    transition: width .3s;
  }
  #footer .right-section .lists ul li a:hover:before {
    width: 100%;
  }
  #footer .right-section .buttons {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
  }
  #footer .credit {
    display: inline-block;
    width: 100%;
    margin-top: 1em;
    text-align: center;
  }
  #footer .credit a{
    text-decoration: none;
  }
`
    return(
        <FooterSection>
        <footer id="footer">
        <div class="container">
            <div class="left-section">
                <Link class="logo" href="/index.html"><img loading="lazy" decoding="async" src={logo.src} alt="logo" width="264" height="180"/></Link>
            </div>
            <div class="right-section">
                <div class="lists">
                    <ul>
                        <li><h2>Information</h2></li>
                        <li><Link href="/index.html">Home</Link></li>
                        <li><Link href="/Linkbout.html">About Us</Link></li>
                        <li><Link href="/projects.html">Projects</Link></li>
                        <li><Link href="/testimonials.html">Reviews</Link></li>
                        <li><Link href="/contact.html">Contact</Link></li>
                    </ul>
                    <ul>
                        <li><h2>Services</h2></li>
                        <li>Service1</li>
                        <li>Service2</li>
                        <li>Service4</li>
                        <li>Service5</li>
                    </ul>
                    <ul>
                        <li><h2>Contact</h2></li>
                        <li><Link href="/contact.html">First Address Line<br/>Denver CO 80206</Link></li>
                        <li><Link href="tel:555-779-4407">T: (555) 779-4407</Link></li>
                        <li><Link href="mailto:email@email.com">Click to Email</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="credit">
            <span>Designed and Hand Coded by</span>
            <Link href="" target="_blank" rel="noopener"> B-Lush Digital Studio</Link>
            <span class="copyright"> Copyright 2023 - Present</span></div>
    </footer>
    </FooterSection>
    )
};