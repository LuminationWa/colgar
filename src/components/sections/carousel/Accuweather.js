"use client";
import { useEffect, useState } from "react";

const Accuweather = (props) => {
  const weatherData = props.accuData;
  const [dayImg, setDayImg] = useState();
  const [nightImg, setNightImg] = useState();
  const [styles, setStyles] = useState(props.styles);
  const defineWeather = (data) => {
    data.lluviaDia ? setDayImg("rain") : setDayImg("sun");        
    data.lluviaNoche ? setNightImg("rain") : setNightImg("sun");        
  }
  useEffect(() => {
    setStyles(props.styles);
    defineWeather(weatherData);
  }, [props.styles]);
  return (
    <div
      className="transition-all ease duration-1000 w-[100%] max-w-[1368px] z-0 bg-red-600 ${styles} lg:bg-transparent lg:text-black pointer-events-none" style={styles}
    >
      <div className="flex flex-col w-[100%] h-[100%] max-w-[1368px] py-10 px-8">
        <div className="flex justify-center">
          <img
            src="/pictures/accuWeather.png"
            alt="AccuWeather logo"
            className="max-w-[100%]"
          />
        </div>
        <div className="flex justify-around items-center text-2xl">
          <div className="flex flex-col text-center gap-2">
            <p>Día</p>
            <div>
              <img
                src={`/pictures/icons/${dayImg}.svg`}
                alt="Weather picture"
                className="max-h-[70px]"
              />
            </div>
          </div>
          <div className="flex flex-col text-center gap-2">
            <p>Noche</p>
            <div>
              <img
                src={`/pictures/icons/${nightImg}.svg`}
                alt="Weather picture"
                className="max-h-[70px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accuweather;
