"use client";
import { useEffect, useState } from "react";

const Accuweather = (props) => {
  const [styles, setStyles] = useState(props.styles);
  useEffect(() => {
    setStyles(props.styles);
  }, [props.styles]);
  return (
    <div
      className={`min-h-screen transition-all ease duration-1000 w-[100%] max-w-[1368px] z-0 bg-red-600 ${styles}`}
    >
      <div className="flex flex-col w-[100%] h-[100%] max-w-[1368px] py-10 px-8">
        <div className="flex">
          <img
            src="/pictures/accuWeather.png"
            alt="AccuWeather logo"
            className="max-w-[300px]"
          />
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <p>Dia</p>
            </div>
            <div>Noche</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accuweather;
