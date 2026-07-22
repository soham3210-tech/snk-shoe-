import { Fragment, useEffect } from "react";
import "../CSS/Footer.css";

import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  ArrowUpward
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";


const ScrollToTop = () => {

  const calcScrollValue = () => {

    const pos =
      document.documentElement.scrollTop;

    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;


    const percent =
      Math.round((pos * 100) / calcHeight);


    const button =
      document.querySelector(".scrollToTop");


    if (pos > 100) {

      button.style.display = "flex";

    } else {

      button.style.display = "none";

    }


    button.style.background =
      `conic-gradient(#2563eb ${percent}%, #ffffff ${percent}%)`;

  };


  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };


  useEffect(() => {

    window.addEventListener(
      "scroll",
      calcScrollValue
    );


    return () => {

      window.removeEventListener(
        "scroll",
        calcScrollValue
      );

    };


  }, []);



  return (

    <div
      className="scrollToTop"
      onClick={scrollTop}
    >

      <div className="inner">

        <ArrowUpward />

      </div>

    </div>

  );

};





const Footer = () => {

  const navigate = useNavigate();


  return (

    <Fragment>

      <footer className="footer">


        <div className="footer-section">

          <h2>SpectaStyle</h2>


          <p>
            Premium footwear crafted for
            style, comfort and confidence.
          </p>


          <div className="email-signup">

            <input
              type="email"
              placeholder="Enter your email"
            />


            <button>
              Subscribe
            </button>


          </div>


        </div>





        <div className="footer-section">

          <h2>Quick Links</h2>


          <ul>

            <li onClick={() => navigate("/about")}>
              About Us
            </li>


            <li>
              Services
            </li>


            <li onClick={() => navigate("/contact")}>
              Contact
            </li>


            <li onClick={() => navigate("/faq")}>
              FAQ
            </li>


          </ul>


          <div className="footer-social">

            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn />

          </div>


        </div>






        <div className="footer-section">


          <h2>Contact</h2>


          <p>
            Phone: +91 565 8989 878
          </p>


          <p>
            Email: spectastyle@gmail.com
          </p>


          <p>
            Address: Nagpur, India
          </p>



        </div>





        <div className="footer-section">


          <h2>Resources</h2>


          <ul>

            <li>
              Website Builder
            </li>


            <li>
              Download for Mac
            </li>


            <li>
              Download for Windows
            </li>


          </ul>


        </div>



        <ScrollToTop />


      </footer>


    </Fragment>


  )

}


export default Footer;