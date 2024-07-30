import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* leftside */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We always ready to help by providing the best service for you belive
            a good place to live that will make your life better
          </span>

          {/* <div className="flex-container">
            <div className="flexCenter icon">
              <MdCall size={25} />
            </div>
            <span className="primaryText">Call</span>
            <div className="secondaryText">0421 765 977 548</div>
          </div> */}

          <div className="flexColStart contactModes">
            {/* firstrow */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">0421 765 977 548</span>
                  </div>
                </div>

                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second mode */}
              <div className="flexCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">0421 765 977 548</span>
                  </div>
                </div>

                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* secondrow */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">0421 765 977 548</span>
                  </div>
                </div>

                <div className="flexCenter button">Video Call Now</div>
              </div>

              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Messege</span>
                    <span className="secondaryText">0421 765 977 548</span>
                  </div>
                </div>
                <div className="flexCenter button">Messege Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* rightside */}
        <div className="c-right">
          <div className="image-container">
            <img src="./image/contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
