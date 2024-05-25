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
      className="absolute transition-all ease duration-1000 w-[100%] max-w-[1368px] bg-red-600 ${styles} lg:bg-transparent lg:text-black pointer-events-none	" style={styles}
    >
      <div className="flex flex-col w-[100%] h-[100%] max-w-[1368px] py-10 px-8">
        <div className="flex justify-center">
          <img
            src="/pictures/openWeather.png"
            alt="OpenWeather logo"
            className="max-w-[100%]"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-2xl gap-2">
          <p>Temp: {openData.temp}°C</p>
          <p>Máxima: {openData.tempMin}°C</p>
          <p>Mínima: {openData.tempMax}°C</p>
        </div>
      </div>
    </div>
  );
};

export default OpenWeather;
