import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./videoCarousel";

const Highlights = () => {
  // GSAP animations
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full flex items-end justify-between">
          {/* Left side: title */}
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          {/* Right side: links */}
          <div className="md:flex flex-wrap items-end gap-5">
            <p className="link flex items-center">
              Watch the film
              <img src={watchImg} alt="watch" className="mt-2 ml-2" />
            </p>
            <p className="link flex items-center">
              Watch the event
              <img src={rightImg} alt="right" className="mt-2 ml-2" />
            </p>
          </div>
        </div>

        {/* Video Carousel */}
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
