"use client";
import { React, useRef, useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);
  const refArray = [carouselRef1, carouselRef2, carouselRef3];
  const [currentRef, setCurrentRef] = useState(0);
  useEffect(() => {
    refArray.forEach((element, index) => {
      //Leaves only the current slide visible
      if (index === currentRef) {
        element.current.style.opacity = 1;
      } else {
        element.current.style.opacity = 0;
      }
    });
  }, [currentRef]);
  //Mobile swiping
  //The higher the more to the right
  let touchStartX = 0;
  let touchEndX = 0;
  let clickStartX = 0;
  let clickEndX = 0;
  const checkDirection = (start, end) => {
    //Adjusts state based off swipe direction
    const minimumSwipeValue = 40; //So it doens't count swiping up or down as swiping the carousel
    if (end - start < -minimumSwipeValue) {
      //Swiped left, ended up at a lower number
      currentRef > 0 ? setCurrentRef(currentRef - 1) : setCurrentRef(2);
    } else if (end - start > minimumSwipeValue) {
      //Swiped right, ended up at a higher number
      currentRef < 2 ? setCurrentRef(currentRef + 1) : setCurrentRef(0);
    }
  };

  return (
    <div
      className="w-[100%] max-w-[1368px] relative flex lg:px-8"
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
      <div
        ref={carouselRef1}
        className="lg:grid grid-cols-[65%_35%] transition-all ease duration-1000 w-[100%] max-w-[1368px] z-0"
      >
        <div className="flex flex-col bg-red-600 w-[100%] max-w-[1368px] py-10 px-8 gap-12">
          <div className="flex">
            <img src="/pictures/accuweather.png" alt="AccuWeather logo"/>
          </div>
          <div className="flex justify-between">
              <div>
                <div>
                    <p>Dia</p>
                </div>
                <div>
                    Noche
                </div>
              </div>
              <div>
                <p>Maxima</p>
                <p>Minima</p>
              </div>
          </div>
        </div>
      </div>


      <div
        className="lg:grid grid-cols-[65%_35%] transition-all ease duration-1000 w-[100%] max-w-[1368px] absolute opacity-0"
        ref={carouselRef2}
      >
         <div className="flex flex-col bg-red-600 w-[100%] max-w-[1368px] py-10 px-8 gap-12">
          <div className="flex">
            <img src="/pictures/openweather.png" alt="OpenWeather logo"/>
          </div>
          <div className="flex justify-between">
              <div>
                <div>
                    <p>Dia</p>
                </div>
                <div>
                    Noche
                </div>
              </div>
              <div>
                <p>Maxima</p>
                <p>Minima</p>
              </div>
          </div>
        </div>
      </div>


      <div
        className="lg:grid grid-cols-[65%_35%] transition-all ease duration-1000 w-[100%] max-w-[1368px] absolute opacity-0"
        ref={carouselRef3}
      >
        <div></div>
        <div className="flex flex-col bg-red-600 w-[100%] max-w-[1368px] py-10 px-8 gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-white font-light">
              Mauris mollis, nibh a iaculis pulvinar
            </p>
            <h1 className="text-white text-3xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis
              sem, rutrum nec dapibus sed, lacinia vel ipsum.
            </h1>
          </div>
          <div>
            <button className="flex items-center gap-1 bg-white hover:bg-red-800 text-red-700 font-bold py-3 px-8 rounded-full">
              <p>More information</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Carousel;
