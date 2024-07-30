import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";
import CountUp from "react-countup";
import {motion, spring} from 'framer-motion';


const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/*leftside*/}
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1 
            initial ={{y:"2rem", opacity:0}}
            animate= {{y:0, opacity:1}}
            transition={{duration:3, type:"ease"}}
            >
              Discover <br />
              Most Suitable <br />
              property
            </motion.h1>
          </div>

          <div className="secondaryText flexColStart hero-des">
            <span>Find a variety of property that suit you very easily</span>
            <span>forget all difficulties to find a residence </span>
          </div>

          <div className=" flexCenter search-bar">
            <HiLocationMarker color="blue" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Preminum Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1900} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Award Winnings</span>
            </div>
          </div>
        </div>

        {/* right side*/}
        <div className="flexCenter hero-right">
          
          <motion.div 
          initial={{x:"7rem", opacity:0}}
          animate ={{x: 0, opacity:1}}
          transition={{
            duration:5,
            type:"ease",
          }}

          className="image-container">
            <img src="./image/hero-image.png" alt=""></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
