import React, { useState, useEffect, useRef } from "react";
import backgroundnew from "../images/backgroundnew.png";

import "../styles/home_styles.css";

import Deck from "./Deck.js";
import NavBar from "./NavBar";

function Home() {
  const [loaded, setLoaded] = useState(false);
  const [gallery, setGallery] = useState(0);
  const galleryRef = useRef(null);

  useEffect(() => {
    setGallery(galleryRef);
    setLoaded(true);
  }, []);

  return (
    <div>
      <div className="section1">
        <img
          src={backgroundnew}
          alt="background"
          className="background_image"
        />
        <div className="greeting">
          Natasha's
          <br />
          Voice
        </div>
      </div>

      <div ref={galleryRef} className="gallery">
        {loaded ? <Deck gallery={gallery} /> : null}
      </div>
    </div>
  );
}

export default Home;
