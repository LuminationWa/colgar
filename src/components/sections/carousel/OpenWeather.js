"use client";
import { useEffect, useState } from "react";

const OpenWeather = (props) => {
  const openData = props.openData;
  const [styles, setStyles] = useState(props.styles);
  useEffect(() => {
    setStyles(props.styles);
  }, [props.styles]);
  return (
    <div
      className={`transition-all ease duration-1000 w-[100%] max-w-[1368px] bg-red-600 ${styles}`}
    >
      <div className="flex flex-col w-[100%] h-[100%] max-w-[1368px] py-10 px-8">
        <div className="flex">
          <img
            src="/pictures/openWeather.png"
            alt="OpenWeather logo"
            className="max-w-[100%]"
          />
        </div>
        <div>
          <p>Temp: {openData.temp}</p>
          <p>Maxima: {openData.tempMin}</p>
          <p>Minima: {openData.tempMax}</p>
        </div>
      </div>
    </div>
  );
};

export default OpenWeather;
