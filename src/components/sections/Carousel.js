"use client";
import { React, useState, useEffect } from "react";
import Accuweather from "./carousel/Accuweather";
import OpenWeather from "./carousel/OpenWeather";
import Tomorrow from "./carousel/Tomorrow";
import Gato from "./Gato";

const Carousel = (props) => {
  const accuData = props.data[0];
  const openData = props.data[1];
  const tomorrowData = props.data[2];
  const [gatoStyles, setGatoStyles] = useState({});
  const [styles, setStyles] = useState([{opacity: '0'}, {opacity: '0'}, {opacity: '1'}]);
  function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
  }
  const rotateCat = (direction) => {
    //Handles rotation for the cat image at the very bottom of the page
    if (direction === "right") {
      setGatoStyles({
        transform: `rotate(${getRandomInt(50, 360)}deg)`
      })
    } else if (direction === "left") {
      setGatoStyles({
        transform: `rotate(${getRandomInt(-360, -50)}deg)`
      })
    }
  };
  const rotateStyles = (direction) => {
    // Rotate the styles array
    //Right
    if (direction === "right") {
      rotateCat("right");
      setStyles((prevStyles) => {
        return [prevStyles[1], prevStyles[2], prevStyles[0]];
      });
    }
    //Left
    else if (direction === "left") {
      rotateCat("left");
      setStyles((prevStyles) => {
        return [prevStyles[2], prevStyles[0], prevStyles[1]];
      });
    }
  };
  //Mobile swiping
  //Higher = right
  let touchStartX = 0;
  let touchEndX = 0;
  let clickStartX = 0;
  let clickEndX = 0;
  const checkDirection = (start, end) => {
    //Adjusts state based off swipe direction
    const minimumSwipeValue = 40; //So it doens't count swiping up or down as swiping the carousel
    if (end - start < -minimumSwipeValue) {
      //Swiped left, ended up at a lower number
      rotateStyles("left");
    } else if (end - start > minimumSwipeValue) {
      //Swiped right, ended up at a higher number
      rotateStyles("right");
    }
  };

  return (
    <div
      className="min-h-screen bg-red-600 lg:bg-transparent w-[100%] max-w-[1368px] relative flex lg:px-8 relative"
      //Event handlers for swiping
      onTouchStart={(e) => {
        touchStartX = e.changedTouches[0].screenX;
      }}
      onTouchEnd={(e) => {
        touchEndX = e.changedTouches[0].screenX;
        checkDirection(touchStartX, touchEndX);
      }}
      onMouseDown={(e) => {
        clickStartX = e.clientX;
      }}
      onMouseUp={(e) => {
        clickEndX = e.clientX;
        checkDirection(clickStartX, clickEndX);
      }}
    >
      <Accuweather styles={styles[0]} accuData={accuData} />
      <OpenWeather styles={styles[1]} openData={openData} />
      <Tomorrow styles={styles[2]} tomorrowData={tomorrowData} />
      <Gato styles={gatoStyles} />
    </div>
  );
};

export default Carousel;
