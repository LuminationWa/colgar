"use client";
import { React, useState, useEffect } from "react";
import Accuweather from "./carousel/Accuweather";
import OpenWeather from "./carousel/OpenWeather";
import Tomorrow from "./carousel/Tomorrow";

const Carousel = (props) => {
  const accuData = props.data[0];
  const openData = props.data[1];
  const tomorrowData = props.data[2];
  const [styles, setStyles] = useState(["visible", "hidden", "hidden"]);
  const rotateStyles = (direction) => {
    // Rotate the styles array
    //Right
    if (direction === "right") {
      setStyles((prevStyles) => {
        return [prevStyles[1], prevStyles[2], prevStyles[0]];
      });
    }
    //Left
    else if (direction === "left") {
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
      className="min-h-screen w-[100%] max-w-[1368px] relative flex lg:px-8"
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
      <Accuweather styles={styles[0]} />
      <OpenWeather styles={styles[1]} openData={openData} />
      <Tomorrow styles={styles[2]} tomorrowData={tomorrowData} />
    </div>
  );
};

export default Carousel;
