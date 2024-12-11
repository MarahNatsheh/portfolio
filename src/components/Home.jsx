import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import homeImg from "../assets/home.jpg";

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Software Engineering Student",
        "Frontend Developer",
        "Product Manager",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home section dark-background">
      <img src={homeImg} alt="Background" data-aos="fade-in" className="" />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Marah Natsheh</h2>
        <p>
          I'm{" "}
          <span
            className="typed"
            ref={typedRef}
          ></span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
