import styled from "styled-components";
import logo from "../public/favicon.png";
import Link from "next/link";
import { secondary, gold } from "@/lib/colors";
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Footer(){

const FooterSection = styled.section`
#footer {
    font-size: min(1.2vw, 1em);
  }
  #footer .container {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: ${gold};
    color:white;
  }

  #footer .right-section {
    margin: 0;
    width: 100%;
    padding: 0rem 2rem;
    max-width: none;
  }
  #footer .right-section .lists {
    width: 100%;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1.5fr 1.75fr .75fr;
    gap: 1em;
    align-items: start;
    justify-items: center;
    ul h2{
      font-size: 1.25rem;
    }
    ul input{
      width: 80%;
      padding: 1rem;
      margin-left: .5rem;
      margin-bottom: .5rem;
      border-radius: 6px/5px;
      border: none;

    }
    ul button{
      background-color: transparent;
      border:1px solid white;
      border-radius: 6px/5px;
      color:white;
      font-weight: 700;
      letter-spacing: .25rem;
      width: fit-content;
      padding: 1rem 2rem;
      margin-left: -.25rem;
      :hover{
          color:${gold};
          background-color: white;
      }
    }
  }
  #footer .right-section .lists ul li {
    margin-top: 0;
    list-style-type: none;
    line-height: 2rem;
    margin: .75rem;
  }
  #footer .right-section .lists ul:nth-of-type(3) li:first-of-type {
    margin-bottom: 0;
    
  }
  #footer .right-section .lists ul li a {
    position: relative;
    text-decoration: none;
    color: white;
    :hover{
      color: #cccc;
    }
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
    padding: 2rem;
    border-top: 1px solid white;
    color: white;
    text-align: center;
    background-color: ${gold};
    a{
      color:white;
    }
  }
  #footer .credit a{
    text-decoration: none;
  }
`
    return(
        <FooterSection>
        <footer id="footer">
        <div class="container">
            <div class="right-section">
                <div class="lists">
                    <ul>
                        <li><h2>Quick Links</h2></li>
                        <li><Link href="/index.html">Shipping & Return Policy</Link></li>
                        <li><Link href="/Linkbout.html">FAQ</Link></li>
                        <li><Link href="/projects.html">Privacy Policy</Link></li>
                        <li><Link href="/testimonials.html">Disclaimer</Link></li>
                    </ul>
                    <ul>
                        <li><h2>Sign Up and receive 10% off on your first order!</h2></li>
                        <li>Stay up-to-date on new products, discount days, specials & more.</li>
                        <input type="text" placeholder="Enter email"/>
                        <li><button>SIGN UP</button></li>
                    </ul>
                    {/* <div class="left-section">
                <Link class="logo" href="/index.html"><img loading="lazy" decoding="async" src={logo.src} alt="logo" width="264" height="180"/></Link>
            </div> */}
                    <ul>
                        <li><h3>Crystal Springs, MO | 777.888.1111</h3></li>
                        <li><em>Disclaimer: The content that you find on this website is for educational purposes only. This informaiton has not been evaluated by the Food and Drug Administration. This informaiton is not intended to diagnose, treat, cure, or prevent any disease.</em></li>
                    </ul>
                    <ul>
                      <li><h2>Follow us</h2></li>
                      <li><FaFacebookSquare size={"40px"}/></li>
                      <li><FaInstagramSquare size={"40px"}/></li>
                      <li><FaLinkedin size={"40px"}/></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="credit">
            <span></span>
            <Link href="" target="_blank" rel="noopener">&#169; B-Lush Digital Studio</Link>
            <span class="copyright"> 2023</span></div>
    </footer>
    </FooterSection>
    )
};